<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Protectora;
use App\Models\Animal;
use Illuminate\Support\Facades\Auth;
use Validator;

class ProtectorasController extends Controller
{
    //
    public function index()
    {
        return Protectora::all();
        //return User::where('protectora',1)->get();
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string',
            'imagen' => 'image|dimensions:min_width=200,min_height=200',
            'voluntariado' => 'required',
            'pais'=> 'required',
            'ciudad'=> 'required',
            'provincia'=> 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $protectora = new Protectora($request->all());

        

        if(!empty($request->imagen)){
            $path = '';
            $path = $request->imagen->store('protectoras');

            $protectora->imagen = $path;
        }
       

        //$protectora->user_id = $id;
        $protectora->save();
        return response()->json([
            'message' => 'Protectora successfully registered',
            'protectora' => $protectora,
        ]);
    }

    public function protectora($id)
    {
        $protectora = Protectora::findOrFail($id);
        $user = User::where('id', $protectora->user_id)->get();
        return response()->json([
            'user' => $user,
            'protectora' => $protectora,
        ]);
        
    }

    public function protectorabyUser()
    {
        $protectora = Protectora::where('user_id',Auth::id())->get();
        return response()->json([
            'protectora' => $protectora,
        ]);
        
    }

    public function animals_protectora($id)
    { 
        return Animal::where('protectora_id',$id)->get();
    }

    public function voluntariado_protectora()
    { 
        return Protectora::where('voluntariado',1)->get();
    }

    public function editProtectora(Request $request){

      
        $protectora = Protectora::where('user_id',Auth::id())->first();

        $protectora->nombre =$request->nombre;
        $protectora->voluntariado =$request->voluntariado;
        $protectora->req_voluntario =$request->req_voluntario;

        if($request->hasFile('imagen')) {
            if(!empty($request->imagen)){
                $path = '';
                $path = $request->imagen->store('protectoras');
    
                $protectora->imagen = $path;
            }
        }


        $protectora->telefono =$request->telefono;
        $protectora->web =$request->web;
        $protectora->facebook =$request->facebook;
        $protectora->instagram =$request->instagram;
        $protectora->historia =$request->historia;
        $protectora->pais =$request->pais;
        $protectora->ciudad =$request->ciudad;
        $protectora->provincia =$request->provincia;
        $protectora->save();
        return response()->json([
            'message' => 'protectora successfully editado',
            'protectora' => $protectora,
        ]);

     


    }

    public function getImage($filename){
        $file = \Illuminate\Support\Facades\Storage::get($filename);
        return response($file, 200)->header('Content-Type', 'image/jpeg');
    }

}
