<?php

namespace App\Repositories\FinancialData;

interface FinancialDataRepositoryInterface
{
    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getProfile(string $symbol): array;

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getQuote(string $symbol): array;
}