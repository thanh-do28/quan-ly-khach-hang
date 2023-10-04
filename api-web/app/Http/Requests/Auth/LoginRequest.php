<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'signinEmail' => 'required',
            'signinPassword' => 'required'
        ];
    }
}
