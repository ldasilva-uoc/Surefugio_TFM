<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Protectora;
use App\Models\Particular;
use App\Models\Animal;
use Illuminate\Support\Facades\Auth;
use Validator;

class ParticularController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|min:6',
            'imagen' => 'image|dimensions:min_width=200,min_height=200',
            'apellido' => 'required',
            'telefono' => 'required',
            'pais'=> 'required',
            'ciudad'=> 'required',
            'provincia'=> 'required',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        $particular = new Particular($request->all());

        $path = '';

        if(!empty($request->imagen)){
            $path = $request->imagen->store('particulars');
        }
        $particular->imagen = $path;

        $particular->user_id = Auth::id();
        $particular->save();
        return response()->json([
            'message' => 'particular successfully registered',
            'particular' => $particular,
        ]);
    }

    public function particular($id)
    {
            $particular = particular::findOrFail($id);
            if($particular->user_id != Auth::id())
            {
                return response()->json([
                    'message' => 'no logueado',
                ]);
            }

            $user = User::where('id', $particular->user_id)->get();
            return response()->json([
                'user' => $user,
                'particular' => $particular,
            ]);  
    }

    public function editParticular(Request $request, $id){
        $particular = Particular::find($id);

        if($particular->user_id != Auth::id())
        {
            return response()->json([
                'message' => 'no logueado',
            ]);
        }

        $particular->nombre =$request->nombre;
        $particular->apellido =$request->apellido;
        $particular->telefono =$request->telefono;

        if($request->hasFile('imagen')) {
            $path = '';

            if(!empty($request->imagen)){
                $path = $request->imagen->store('particulars');
            }
            $particular->imagen = $path;
        }

        $particular->pais =$request->pais;
        $particular->ciudad =$request->ciudad;
        $particular->provincia =$request->provincia;
        $particular->save();
        return response()->json([
            'message' => 'particular successfully editado',
            'particular' => $particular,
        ]);

     


    }

}
