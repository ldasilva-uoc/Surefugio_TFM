<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Protectora extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'voluntariado',
        'telefono',
        'pais',
        'ciudad',
        'provincia',
        'req_voluntariado',
        'web',
        'facebook',
        'instagram',
        'historia',
        'imagen',
    ];
}
