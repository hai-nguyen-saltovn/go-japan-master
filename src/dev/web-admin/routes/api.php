<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'Auth\LoginController@login');
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/logout', 'Auth\LoginController@logout');

Route::get('/clients', 'Api\ClientController@index');
Route::get('/clients/{id}', 'Api\ClientController@show');
Route::post('/clients', 'Api\ClientController@store');
Route::put('/clients/{id}', 'Api\ClientController@update');
Route::delete('/clients/{id}', 'Api\ClientController@delete');