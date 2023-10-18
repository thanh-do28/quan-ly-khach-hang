<?php

use App\Http\Controllers\Api\Customers\CustomersController;
use Illuminate\Support\Facades\Route;

Route::post('/save-costomers', [CustomersController::class, "customers"]);
