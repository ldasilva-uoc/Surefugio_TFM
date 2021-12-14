<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'nombre',
        'especie',
        'tamano',
        'imagen',
        'edad',
        'descripcion',
        'sexo',
        'pais',
        'ciudad',
        'provincia',
        'adopcion',
        'acogida',
        'urgente',
        'vacunado',  
        'desparasitado',
        'esterilizado',
        'microchip',
        'tasa_adopcion',
        'tasa',
        'envio',
    ];
}
