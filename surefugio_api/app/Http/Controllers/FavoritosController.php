<?php

namespace App\Http\Controllers;
use App\Models\fav_protectora;
use App\Models\fav_animal;
use App\Models\User;
use App\Models\Protectora;
use App\Models\Particular;
use App\Models\Animal;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class FavoritosController extends Controller
{

    public function getFavoritosProtectoras()
    {
        $particular = Particular::where('user_id',Auth::id())->first();  
        $favoritosUser = fav_protectora::where('particular_id',$particular->id)->get(); 

        return response()->json([
            'message' => 'Protectoras',
            'favoritos' => $favoritosUser,
        ]);
    }
    
    public function addFavprotectora($id)
    {
        $favorito = new fav_protectora();
        $particular = Particular::where('user_id',Auth::id())->first(); 
        $favorito->particular_id = $particular->id;
        $favorito->protectora_id = $id;
        $favorito->save();

        return response()->json([
            'message' => 'Protectora añadida a favoritos',
            'protectoras' => $favorito,
        ]);
    }

    public function deleteFavprotectora($id)
    {
        $particular = Particular::where('user_id',Auth::id())->first();  
        $favoritosUser = fav_protectora::where('particular_id',$particular->id)->first(); 
        $favoritosProtectora = fav_protectora::where('protectora_id',$id)->first(); 

        $favoritosProtectora->delete();

        return response()->json([
            'message' => 'Protectora eliminada de favoritos',
        ]);
    }




    public function getFavoritosAnimal()
    {
        $particular = Particular::where('user_id',Auth::id())->first();  
        $favoritosUser = fav_animal::where('particular_id',$particular->id)->get(); 

        return response()->json([
            'message' => 'Animales',
            'favoritos' => $favoritosUser,
        ]);
    }
    
    public function addFavAnimal($id)
    {
        $favorito = new fav_animal();
        $particular = Particular::where('user_id',Auth::id())->first(); 
        $favorito->particular_id = $particular->id;
        $favorito->animal_id = $id;
        $favorito->save();

        return response()->json([
            'message' => 'Animal añadido a favoritos',
            'protectoras' => $favorito,
        ]);
    }

    public function deleteFavAnimal($id)
    {
        $particular = Particular::where('user_id',Auth::id())->first();  
        $favoritosUser = fav_animal::where('particular_id',$particular->id)->first(); 
        $favoritosAnimal = fav_animal::where('animal_id',$id)->first(); 

        $favoritosAnimal->delete();

        return response()->json([
            'message' => 'Animal eliminado de favoritos',
        ]);
    }
}
