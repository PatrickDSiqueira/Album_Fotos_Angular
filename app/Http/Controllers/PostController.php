<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index()
    {
        return Post::all();
    }

    public function store(Request $request)
    {
        $path = $request -> file('file')->store('image','public');
        $post = new Post();
        $post -> name = $request->name;
        $post -> email= $request->email;
        $post -> title = $request->title;
        $post -> subtitle= $request->subtitle;
        $post -> message= $request->message;
        $post -> file = $request->$path;
        $post -> likes = 0;

        $post -> save();
        return response($post, 200);
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        if (isset($post)){
            Storage::disk('public')->delete($post->file);
            $post ->delete();
            return 204;
        }
        return reponse('Post não encontrado',404);
    }

    public function like($id)
    {
        $post = Post::find($id);

        if (isset($post)){
            $post ->likes++;
            $post->save();
            return $post;
        }
        return  response("Id não encontrado", 404);
    }
}
