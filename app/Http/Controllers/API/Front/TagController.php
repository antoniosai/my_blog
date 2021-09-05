<?php

namespace App\Http\Controllers\API\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Tag;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tags = Tag::withCount(['blog'])->get();

        return response()->json([
            'status' => 1,
            'message' => 'Successfully fetched Tags',
            'data' => $tags
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
        $tag = Tag::with(['blog.category'])->findOrFail($id);

        return response()->json([
            'status' => 1,
            'message' => 'Successfully fetched Tag',
            'data' => $tag
        ]);
    }
}
