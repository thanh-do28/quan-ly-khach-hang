<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterService
{
    public function CreateRegister(array $params)
    {
        $registerName = $params["registerName"];
        $registerEmail = $params["registerEmail"];
        $registerPassword = Hash::make($params['registerPassword']);
        $user = User::query()->where('email', $registerEmail)->first();
        if (isset($user)) {
            return response()->json([
                'status' => 404,
                'error'  => 'Email đã được sử dụng'
            ]);
        } else {
            $data = User::create([
                'name' => $registerName,
                'email' => $registerEmail,
                'password' => $registerPassword,
            ]);
            if ($data) {
                return response()->json([
                    'status' => 200,
                    'message'  => 'Tạo tài khoản thành công'
                ]);
            }
        }
    }
}
