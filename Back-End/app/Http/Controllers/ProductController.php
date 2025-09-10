<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function index () {
        return Product::all();
    }

    function save (Request $request) {
        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
            ]);
    
            $product = new Product();
            $product -> name = $request -> get('name');
            $product -> description = $request -> get('description');
            $product -> save();

            return response()->json([
                'message' => 'Data Berhasil Ditambahkan'
            ],200);

        } catch(\Exception $e) {
            return response()->json([
                'message' => $e
            ],500);
        }
    }

    function update (Request $request, $id) {
        try {
            $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
            ]);
    
            $product = Product::findOrFail($id);
            $product -> name = $request -> get('name');
            $product -> description = $request -> get('description');
            $product -> save();

            return response()->json([
                'message' => 'Data Berhasil Diubah'
            ],200);

        } catch(\Exception $e) {
            return response()->json([
                'message' => $e
            ],500);
        }
    }

    
    function detail ($id) {
        try {
            $product = Product::findOrFail($id);

            return response()->json([
                'message' => 'Data berhasil di tampilkan',
                'data' => $product
            ],200);

        } catch(\Exception $e) {
            return response()->json([
                'message' => $e
            ],500);
        }
    }


    function delete ($id) {
        try {
            $product = Product::findOrFail($id);
            $product -> delete();

            return response()->json([
                'message' => 'Data Berhasil Dihapus'
            ],200);

        } catch(\Exception $e) {
            return response()->json([
                'message' => $e
            ],500);
        }
    }
}
