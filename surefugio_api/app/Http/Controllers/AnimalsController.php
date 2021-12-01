<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Animal;
use Illuminate\Support\Facades\Auth;
use App\Models\Protectora;
use Validator;

class AnimalsController extends Controller
{
    //

    public function index()
    { 
        return Animal::all();
    }

    public function animal($id)
    { 
        return Animal::findOrFail($id);
    }

    public function addAnimal(Request $request){
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string',
            'imagen' => 'image|dimensions:min_width=200,min_height=200',
            'especie' => 'required',
            'sexo' => 'required',
            'pais'=> 'required',
            'ciudad'=> 'required',
            'provincia'=> 'required',
            'adopcion'=> 'required',
            'acogida'=> 'required',
            'urgente'=> 'required',
            'vacunado'=> 'required',
            'desparasitado'=> 'required',
            'esterilizado'=> 'required',
            'microchip'=> 'required',
            'tasa_adopcion'=> 'required',
            'envio'=> 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $animal = new Animal($request->all());

        $path = '';

        if(!empty($request->imagen)){
            $path = $request->imagen->store('animales');
        }
        $animal->imagen = $path;
        $protectora = Protectora::where('user_id',Auth::id())->first(); 
        $protectora_id = $protectora->id ;
        $animal->protectora_id = $protectora_id;
        $animal->save();
        return response()->json([
            'message' => 'animal successfully registered',
            'animal' => $animal,
        ]);
    }

    public function deleteAnimal($id){

        $animal = Animal::find($id);
        $protectora = Protectora::findOrFail($animal->protectora_id);

        if($protectora->user_id != Auth::id())
        {
            return response()->json([
                'message' => 'no logueado',
            ]);
        }


        if($protectora){
            $animal->delete();
        }
        
       
        return response()->json([
            'message' => 'animal deleter',
        ]);
        
    }

    public function editAnimal(Request $request, $id){
        $animal = Animal::find($id);

        $protectora = Protectora::findOrFail($animal->protectora_id);

        if($protectora->user_id != Auth::id())
        {
            return response()->json([
                'message' => 'no logueado',
            ]);
        }

        $animal->nombre =$request->nombre;
        $animal->especie =$request->especie;
        $animal->tamaño =$request->tamaño;

        if($request->hasFile('imagen')) {
            $path = '';

            if(!empty($request->imagen)){
                $path = $request->imagen->store('animales');
            }
            $animal->imagen = $path;
        }


        $animal->fecha_nacimiento =$request->fecha_nacimiento;
        $animal->descripcion =$request->descripcion;
        $animal->sexo =$request->sexo;
        $animal->pais =$request->pais;
        $animal->ciudad =$request->ciudad;
        $animal->provincia =$request->provincia;
        $animal->adopcion =$request->adopcion;
        $animal->acogida =$request->acogida;
        $animal->urgente =$request->urgente;
        $animal->vacunado =$request->vacunado;
        $animal->desparasitado =$request->desparasitado;
        $animal->esterilizado =$request->esterilizado;
        $animal->microchip =$request->microchip;
        $animal->tasa_adopcion =$request->tasa_adopcion;
        $animal->tasa =$request->tasa;
        $animal->envio =$request->envio;
        $animal->save();
        return response()->json([
            'message' => 'animal successfully editado',
            'animal' => $animal,
        ]);

     


    }

   

}
