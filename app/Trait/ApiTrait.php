<?php

namespace App\Trait;

use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpKernel\Exception\HttpException;

trait ApiTrait
{
    /**
     * GET Request
     * 
     * @param string $url
     * @param array $params
     * 
     * @return array
     */
    public function apiGet(string $url, array $params): array
    {
        try {
            $response = Http::get($url, $params);
            return $response->json();
        } catch (HttpException $e) {
            \Log::error('HTTP GET Error', $e);
        }
    }
}