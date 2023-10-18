<?php

namespace App\Http\Controllers\Api\Customers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customers\CustomersRequest;
use App\Services\CustomersService;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    protected $service;

    public function __construct(CustomersService $service)
    {
        $this->service = $service;
    }

    public function customers(CustomersRequest $request)
    {
        $params = $request->validated();
        $this->service->saveCustomers($params);
        // dd($params);
    }
}
