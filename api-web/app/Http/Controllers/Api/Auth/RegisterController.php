<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Services\RegisterService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class RegisterController extends Controller
{
    protected $service;


    public function __construct(RegisterService $service)
    {
        $this->service = $service;
    }


    public function register(RegisterRequest $request)
    {
        $params = $request->validated();

        try {
            $data = $this->service->CreateRegister($params);
            if ($data) {
                return response()->json([
                    'data' => $data->original,
                    'status' => "200",
                ]);
            }
        } catch (\Exception $e) {
            Log::error($e);
        }
    }
}
