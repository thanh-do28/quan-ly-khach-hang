<?php

namespace App\Http\Controllers\Api\Costomers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Costomers\CostomersRequest;
use App\Services\CostomersService;
use Illuminate\Http\Request;

class CostomersController extends Controller
{
    protected $service;

    public function __construct(CostomersService $service)
    {
        $this->service = $service;
    }

    public function saveCostomers(CostomersRequest $request)
    {
        $params = $request->validated();
        dd($params);
    }
}
