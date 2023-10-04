<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class LoginService
{
    public function LoginUser(array $params)
    {
        $userEmail = $params['signinEmail'];
        $userPass = $params['signinPassword'];
        $user = User::query()->where('email', $userEmail)->first();
        if (isset($user)) {
            if (Hash::check($userPass, $user["password"])) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Đăng nhập thành công'
                ]);
            } else {
                return response()->json([
                    'status' => 401,
                    'error' => 'Sai mật khẩu'
                ]);
            }
        } else {
            return response()->json([
                'status' => 404,
                'error'  => 'Tài khoản không tồn tại'
            ]);
        }
    }
}
