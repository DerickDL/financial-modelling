<?php

namespace App\Http\Controllers\Api\V1\FinancialData;

use App\Http\Controllers\Controller;
use App\Services\FinancialData\FinancialDataService;
use Illuminate\Http\Request;

class FinancialDataController extends Controller
{
    /**
     * @var FinancialDataService
     */
    private $oFinancialDataService;

    /**
     * @param FinancialDataService $oFinancialDataService
     */
    public function __construct(FinancialDataService $oFinancialDataService)
    {
        $this->oFinancialDataService = $oFinancialDataService;
    }

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getProfile(string $symbol): array
    {
        return $this->oFinancialDataService->getProfile($symbol);
    }

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getQuote(string $symbol): array
    {
        return $this->oFinancialDataService->getQuote($symbol);
    }
}
