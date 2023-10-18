<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('customer_information', function (Blueprint $table) {
            $table->id();
            $table->longText('avatar')->nullable();
            $table->string('fullname')->nullable();
            $table->date('yearofbirth')->nullable();
            $table->string('address')->nullable();
            $table->integer('phonenumber')->nullable();
            $table->longText('index')->nullable();
            $table->integer('service')->nullable();
            $table->integer('price')->nullable();
            $table->string('surgeryaddress')->nullable();
            $table->string('doctor')->nullable();
            $table->integer('material')->nullable();
            $table->integer('size')->nullable();
            $table->integer('volume')->nullable();
            $table->string('brand')->nullable();
            $table->integer('status')->nullable();
            $table->date('examination')->nullable();
            $table->string('note')->nullable();
            $table->longText('surgerytimes')->nullable();
            $table->longText('photobeforesurgery')->nullable();
            $table->longText('photoaftersurgery')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_information');
    }
};
