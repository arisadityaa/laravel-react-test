<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoteController extends Controller
{
    //
    public function index(){
        $note = Note::orderBy('created_at', 'desc')->limit(9)->get();
        return Inertia::render('Home/Homepage', ['note'=>$note]);
    }
    public function store(Request $request){
        Note::create($request->all());
        return redirect()->route('home');
    }

    public function edit($id){
        $note = Note::find($id);
        return Inertia::render('Notes/EditNote', ['note'=>$note]);
    }

    public function update(Request $request){
        $data = Note::find($request->id);
        $data->update($request->all());
        return redirect()->route('home');
    }

    public function destroy($id){
        Note::find($id)->delete();
        return redirect()->route('home');
    }
}
