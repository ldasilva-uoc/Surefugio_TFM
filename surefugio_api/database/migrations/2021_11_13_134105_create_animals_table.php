<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('protectora_id');
            $table->string('nombre');
            $table->enum('especie',['gato','perro','roedor']);
            $table->enum('tamano',['grande','mediano','pequeño']);
            $table->enum('edad',['< 1 año','< - 5 año','5 - 10 año', '> 10 año']);
            $table->string('imagen')->nullable(); //para blob
            $table->text('descripcion')->nullable();
            $table->enum('sexo',['macho','hembra']);
            $table->string('pais');
            $table->string('ciudad');
            $table->string('provincia');
            $table->boolean('adopcion');
            $table->boolean('acogida');
            $table->boolean('urgente');
            $table->boolean('vacunado');
            $table->boolean('desparasitado');
            $table->boolean('esterilizado');
            $table->boolean('microchip');
            $table->enum('tasa_adopcion',['gratis','consultar','tasa']);
            $table->integer('tasa')->nullable();
            $table->boolean('envio');
            $table->foreign('protectora_id')->references('id')->on('protectoras')->onDelete('cascade');


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
        Schema::dropIfExists('animals');
    }
}
