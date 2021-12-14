<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProtectorasController;
use App\Http\Controllers\AnimalsController;
use App\Http\Controllers\ParticularController;
use App\Http\Controllers\FavoritosController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/protectora/register', [ProtectorasController::class, 'register']);
    Route::post('/particular/register', [ParticularController::class, 'register']);
    Route::get('/particular/{id}', [ParticularController::class, 'particular']);
    Route::post('/protectora/edit', [ProtectorasController::class, 'editProtectora']);
    Route::post('/particular/edit', [ParticularController::class, 'editParticular']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/profile', [AuthController::class, 'userProfile']);
    Route::post('/protectora/animal/add', [AnimalsController::class, 'addAnimal']);
    Route::get('/protectora/animal/deleter/{id}', [AnimalsController::class, 'deleteAnimal']);
    Route::post('/protectora/animal/edit/{id}', [AnimalsController::class, 'editAnimal']);
    Route::get('/protectora', [ProtectorasController::class, 'protectorabyUser']);
    Route::get('/particular', [ParticularController::class, 'particularbyUser']);


    Route::post('/particular/favorito/protectora/add/{id}', [FavoritosController::class, 'addFavprotectora']);
    Route::get('/particular/favorito/protectora/deleter/{id}', [FavoritosController::class, 'deleteFavprotectora']);
    Route::get('/particular/favorito/protectora', [FavoritosController::class, 'getFavoritosProtectoras']);
    Route::post('/adoptar/{idP}/{idA}', [MailController::class, 'adoptar']);
    Route::post('/acoger/{idP}/{idA}', [MailController::class, 'acoger']);
    Route::post('/voluntariado/{idP}', [MailController::class, 'voluntariado']);

    
    Route::post('/particular/favorito/animal/add/{id}', [FavoritosController::class, 'addFavAnimal']);
    Route::get('/particular/favorito/animal/deleter/{id}', [FavoritosController::class, 'deleteFavAnimal']);
    Route::get('/particular/favorito/animal', [FavoritosController::class, 'getFavoritosAnimal']);

    //mis favoritos animales (PARTICULAR)
    //mis favoritos protectoras (PARTICULAR)
    //añadir a favoritos protectora (PARTICULAR)
    //añadir a favoritos animales (PARTICULAR)
    //eliminar de favoritos protectora (PARTICULAR)
    //eliminar de favoritos animales (PARTICULAR)
    
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'list'

], function ($router) {
    Route::get('/protectoras', [ProtectorasController::class, 'index']); 
    Route::get('/protectora/{id}', [ProtectorasController::class, 'protectora']); 
    Route::get('/animals_protectora/{id}', [ProtectorasController::class, 'animals_protectora']); 
    Route::get('/voluntariado', [ProtectorasController::class, 'voluntariado_protectora']); 
    Route::get('/animales', [AnimalsController::class, 'index']); 
    Route::get('/animal/{id}', [AnimalsController::class, 'animal']); 
    Route::get('/storage/{filename}', function ($filename)
{
    $path = storage_path('public/' . $filename);

    if (!File::exists($path)) {
        abort(404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});
});

