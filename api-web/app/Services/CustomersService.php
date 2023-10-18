<?php

namespace App\Services;

use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Models\Customers;


class CustomersService
{
    public function saveCustomers($params)
    {
        $englishSlug = Str::slug($params['fullname']);
        $a = $this->insertCustomers($params['avatar'], 'avatar', $englishSlug, $params['phonenumber']);
        $b = $this->insertCustomers($params['photobeforesurgery'], 'before', $englishSlug, $params['phonenumber']);
        $c = $this->insertCustomers($params['photoaftersurgery'], 'after', $englishSlug, $params['phonenumber']);
        dd($a, $b, $c);
    }

    public function insertCustomers($files, $namefile, $name, $phonenumber)
    {
        if ($namefile == 'avatar') {
            $numberRandom = mt_rand(1, 9999);
            $nameFile     = Carbon::now()->format('ymdHis') . $numberRandom . $namefile . $name . $phonenumber . '.png';
            $path         = $files->storeAs('public/uploads/' . $namefile, $nameFile);
            return str_replace("public/", '', $path);
        } else {
            foreach ($files as $file) {
                $numberRandom = mt_rand(1, 9999);
                $nameFile     = Carbon::now()->format('ymdHis') . $numberRandom . $namefile . $name . $phonenumber . '.png';
                $path         = $file->storeAs('public/uploads/' . $namefile, $nameFile);
                $data[] = str_replace("public/", '', $path);
            }
            return $data;
        }
    }
}
