<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavProtectorasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fav_protectoras', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('particular_id');
            $table->unsignedBigInteger('protectora_id');
            $table->foreign('particular_id')->references('id')->on('particulars');
            $table->foreign('protectora_id')->references('id')->on('protectoras');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fav_protectoras');
    }
}
