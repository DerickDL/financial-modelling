<?php

namespace App\Repositories\FinancialData;

use App\Trait\ApiTrait;
use Illuminate\Support\Facades\Cache;

class FinancialDataApiRepository implements FinancialDataRepositoryInterface
{
    use ApiTrait;

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getProfile(string $symbol): array
    {
        $sBaseUrl = config('api.financial_api.base_url');
        $apiKey = config('api.financial_api.api_key');

        $sUrl = $sBaseUrl . 'profile' . '/' . $symbol;
        $sCacheKey = 'company_profile_' . $symbol;
        $params['apikey'] = $apiKey;

        return $this->getCachedData($sCacheKey, $sUrl, $params);
    }

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getQuote(string $symbol): array
    {
        $sBaseUrl = config('api.financial_api.base_url');
        $apiKey = config('api.financial_api.api_key');

        $sUrl = $sBaseUrl . 'quote' . '/' . $symbol;
        $sCacheKey = 'company_quote_' . $symbol;
        $params['apikey'] = $apiKey;

        return $this->getCachedData($sCacheKey, $sUrl, $params);
        
    }

    /**
     * @param string $sCacheKey
     * @param string $sUrl
     * @param array $params
     * 
     * @return array
     */
    private function getCachedData(string $sCacheKey, string $sUrl, array $params): array
    {
         return Cache::remember($sCacheKey, now()->addMinutes(30), function () use ($params, $sUrl) {
            try {
                return $this->apiGet($sUrl, $params);
            } catch (\Exception $e) {
                \Log::error('API request failed', ['exception' => $e->getMessage()]);
                return ['error' => 'API request failed'];
            }
        });
    }
}