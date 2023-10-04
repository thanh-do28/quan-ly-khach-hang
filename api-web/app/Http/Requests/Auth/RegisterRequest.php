<?php

namespace App\Http\Requests\Auth;

use App\Http\Requests\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'registerName' => "required",
            'registerEmail' => 'required',
            'registerPassword' => 'required'
        ];
    }
}
