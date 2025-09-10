<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
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

Route::prefix('products')->group(function () {
    Route::get('/', [ProductController::class, 'index']) -> name('product.index');
    Route::post('/save', [ProductController::class, 'save']) -> name('product.save');
    Route::get('/{id}', [ProductController::class, 'detail']) -> name('product.detail');
    Route::post('/update/{id}', [ProductController::class, 'update']) -> name('product.update');
    Route::delete('/{id}/delete', [ProductController::class, 'delete']) -> name('product.delete');
});