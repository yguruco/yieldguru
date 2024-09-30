<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pool;

class PoolController extends Controller
{
    public function index()
    {
        return Pool::with('users', 'assets')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function store(Request $request)
    {
        $pool = Pool::create([
            'name' => $request->input('name'),
            'description' => $request->input('bio')
        ]);

        return response()->json($pool, 201);
    }

    public function show($id)
    {
        return Pool::with('users', 'assets')->find($id);
    }

    public function update(Request $request, $id)
    {
        $pool = Pool::find($id);
        $pool->update($request->all());
        return response()->json($pool);
    }

    public function destroy($id)
    {
        Pool::destroy($id);
        return response()->json(null, 204);
    }
}
