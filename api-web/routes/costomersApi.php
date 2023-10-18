<?php

use App\Http\Controllers\Api\Costomers\CostomersController;
use Illuminate\Support\Facades\Route;

Route::post('/save-costomers', [CostomersController::class, "saveCostomers"]);
