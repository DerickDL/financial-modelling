# Financial Modelling App

## Description
The system should be able to do the following:

- Build a PHP client (Object Oriented) to work with Financial Modelling API - https://financialmodelingprep.com/developer/docs/
- It needs to support at the below two calls and return the data in the most efficient and re-usable way
    - Company Profile
    - Company Quote
- Code needs to be extendable.
    - Example allowing to change the data provider API to another service, whilst maintaining any other sections of the code that rely on data returned by it.
- Implement user registration
- Registered users can login in and search company profile or Quote
- Cache external API results


## Technologies Used
- Laravel 10
- React (InertiaJS)
- Tailwind CSS
- Vite
- MariaDB

## Prerequisite
- composer
- npm

## How to setup locally
### Backend
1. Rename the .env.example file to .env and set up your database connection settings in the .env file:
2. Generate the application key: 
    `php artisan key:generate`
3. Execute `composer install`
4. Run `php artisan migrate`
5. Run `php artisan serve`

### Frontend
1. npm install
2. npm run dev

You can access the app via http://127.0.0.1:8000

