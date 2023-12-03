<?php

namespace App\Services\FinancialData;

use App\Repositories\FinancialData\FinancialDataRepositoryInterface;

class FinancialDataService
{
    private $oFinancialDataRepository;

    /**
     * @param FinancialDataRepositoryInterface $oFinancialDataRepository
     */
    public function __construct(FinancialDataRepositoryInterface $oFinancialDataRepository)
    {
        $this->oFinancialDataRepository = $oFinancialDataRepository;
    }

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getProfile(string $symbol): array
    {
        return $this->oFinancialDataRepository->getProfile($symbol);
    }

    /**
     * @param string $symbol
     * 
     * @return array
     */
    public function getQuote(string $symbol): array
    {
        return $this->oFinancialDataRepository->getQuote($symbol);
    }
}