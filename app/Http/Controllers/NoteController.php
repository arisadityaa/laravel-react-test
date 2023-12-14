<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    //
    public function index(){
        $note = Note::limit(9)->get();
        return Inertia::render('Home/Homepage', ['note'=>$note]);
    }

    public function edit($id){
        $note = Note::find($id);
        return Inertia::render('Notes/EditNote', ['note'=>$note]);
    }

    public function update(Request $request, $id){
        dd($request, $id);
    }
}
