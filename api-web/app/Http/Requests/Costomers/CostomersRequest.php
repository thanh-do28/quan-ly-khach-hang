<?php

namespace App\Http\Requests\Costomers;

use App\Http\Requests\FormRequest;


class CostomersRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        // dd(request()->all(), 111);
        return [
            'avatar' => "required",
            'fullname' => "required",
            'yearofbirth' => "required",
            'address' => "required",
            'phonenumber' => "required",
            'index' => '',
            'service' => "required",
            'price' => "required",
            'surgeryaddress' => "required",
            'doctor' => "required",
            'material' => "required",
            'size' => "required",
            'volume' => "required",
            'brand' => "required",
            'status' => "required",
            'examination' => "required",
            'note' => "required",
            'surgerytimes' => "",
            'photobeforesurgery' => "required",
            'photoaftersurgery' => "required",
        ];
    }
}
