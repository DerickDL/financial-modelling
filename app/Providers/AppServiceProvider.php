<?php

namespace App\Providers;

use App\Repositories\FinancialData\FinancialDataApiRepository;
use App\Services\FinancialData\FinancialDataService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(FinancialDataService::class, function ($app) {
            return new FinancialDataService($app->make(FinancialDataApiRepository::class));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
