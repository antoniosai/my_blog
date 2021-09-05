<?php

namespace App\Http\Controllers\API\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Blog;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $blogs = Blog::query();
        $blogs->with(['user']);

        if ($request->search_query) {
            $escaped_str = "%$request->search_query%";

            $blogs->where('title', 'LIKE', $escaped_str);
        }

        if ($request->category_id) {
            $blogs->where('title', 'LIKE', $escaped_str);
        }

        if ($request->tag_id) {
            $tag_id = $request->tag_id;
            $blogs->whereHas('tag', function ($query) use ($tag_id) {
                $query->whereIn('tag_id', $tag_id);
            });
        }

        if ($blogs) {
            return response()->json([
                'status' => 1,
                'message' => 'Successfully fetched Blogs',
                'data' => $blogs->paginate(10),
            ], 200);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }
}
