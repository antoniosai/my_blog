<?php

namespace App\Http\Controllers\API\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::withCount(['blog'])->get();

        return response()->json([
            'status' => 1,
            'message' => 'Successfully fetched categories',
            'data' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $category = Category::withCount(['blog'])->findOrFail($id);

        return response()->json([
            'status' => 1,
            'message' => 'Successfully fetched Category',
            'data' => $category
        ]);
    }
}
