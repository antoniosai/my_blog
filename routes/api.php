<?php

use App\Http\Controllers\API\Front\BlogController;
use App\Http\Controllers\API\Front\TagController;
use App\Http\Controllers\API\Front\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'pub'], function () {
    Route::resource('blog', BlogController::class)->only(['index', 'show']);
    Route::resource('tag', TagController::class)->only(['index', 'show']);
    Route::resource('category', CategoryController::class)->only(['index', 'show']);
});
