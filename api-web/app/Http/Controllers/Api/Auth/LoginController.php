<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class LoginController extends Controller
{
    protected $service;

    public function __construct(LoginService $service)
    {
        $this->service = $service;
    }

    public function login(LoginRequest $request)
    {

        $params = $request->validated();

        try {
            $data = $this->service->LoginUser($params);
            return $data;
        } catch (\Exception $e) {
            Log::error($e);
        }
    }
}
