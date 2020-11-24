<?php

/** @var \Laravel\Lumen\Routing\Router $router */
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/find', function (Request $request) use ($router) {
    return  Http::get('http://localhost:3100/find', [
        'id' => $request->id,
        ]);
});

$router->post('/create', function (Request $request) use ($router) {
    return  Http::post('http://localhost:3100/create', [
        'name' =>  $request->name,
        'users' => $request->users
    ]);
});

$router->put('/update', function (Request $request) use ($router) {
    return  Http::put('http://localhost:3100/update', [
        'id' =>  $request->id,
        'users' => $request->users
    ]);
});

$router->delete('/delete', function (Request $request) use ($router) {
    return  Http::delete('http://localhost:3100/delete', [
        'id' =>  $request->id
    ]);
});
