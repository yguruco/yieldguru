<?php

use App\Http\Controllers\PoolController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware(['auth:sanctum'])->group(function () {

        // pool routes
        Route::prefix('/pools')
            ->group(function () {
                Route::get('/', [PoolController::class, 'index'])->name('pools');
                Route::post('/create', [PoolController::class, 'store'])->name('pools.save');
                Route::get('/{pool:id}', [PoolController::class, 'show'])->name('pool.show');        
            });
        
});

Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware(['guest']);
