<?php

namespace App\Http\Controllers;

use App\Mail\adoptar;
use App\Mail\Animalacoger;
use App\Mail\Animaladoptar;
use App\Mail\userVoluntario;

use App\Models\User;
use App\Models\Animal;
use Illuminate\Support\Facades\Auth;
use App\Models\Protectora;
use App\Models\Particular;

use Illuminate\Support\Facades\Mail;

use Illuminate\Http\Request;

class MailController extends Controller
{
    public function adoptar($idP, $idA){

        $particular = Particular::where('user_id',Auth::id())->first(); 
        $userParticular = User::where('id', Auth::id())->first(); 

        $protectora = Protectora::where('id',$idP)->first(); 
        $userProtectora = User::where('id', $protectora->user_id)->first();

        $animal = Animal::where('id',$idA)->first(); 

        $email = $userProtectora->email;

        Mail::to($email)->send(new Animaladoptar($particular ,$userParticular,$animal));
        return response()->json([
            'mensaje' => 'Se ha informado a la protectora'

        ],201);
    }


    public function acoger($idP, $idA){
        $particular = Particular::where('user_id',Auth::id())->first(); 
        $userParticular = User::where('id', Auth::id())->first(); 

        $protectora = Protectora::where('id',$idP)->first(); 
        $userProtectora = User::where('id', $protectora->user_id)->first();

        $animal = Animal::where('id',$idA)->first(); 

        $email = $userProtectora->email;

        Mail::to($email)->send(new Animalacoger($particular ,$userParticular,$animal));
        return response()->json([
            'mensaje' => 'Se ha informado a la protectora'

        ],201);
    }

    public function voluntariado($idP){

        $particular = Particular::where('user_id',Auth::id())->first(); 
        $userParticular = User::where('id', Auth::id())->first(); 

        $protectora = Protectora::where('id',$idP)->first(); 
        $userProtectora = User::where('id', $protectora->user_id)->first();
        $email = $userProtectora->email;

        Mail::to($email)->send(new userVoluntario($particular ,$userParticular));
        return response()->json([
            'mensaje' => 'Se ha informado a la protectora'

        ],201);
    }
      
        
}