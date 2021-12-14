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
            'nombre' => 'required|string',
            'imagen' => 'image|dimensions:min_width=200,min_height=200',
            'apellido' => 'required|string',
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
            $path = $request->imagen->store('particular');
        }
        $particular->imagen = $path;

        $particular->save();
        return response()->json([
            'message' => 'particular successfully registered',
            'particular' => $particular,
        ]);
    }

    public function particular($id)
    {
            $particular = Particular::findOrFail($id);
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

    public function editParticular(Request $request){
        $particular = Particular::where('user_id',Auth::id())->first();

        $particular->nombre =$request->nombre;
        $particular->apellido =$request->apellido;
        $particular->telefono =$request->telefono;

        if($request->hasFile('imagen')) {
            $path = '';

            if(!empty($request->imagen)){
                $path = $request->imagen->store('particular');
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

    
    public function particularbyUser()
    {
        $particular =  Particular::where('user_id',Auth::id())->get();
        return response()->json([
            'particular' => $particular,
        ]);
        
    }

}
