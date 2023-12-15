import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { router } from "@inertiajs/react";

export default function AddNote(props) {
    const [user_id, setUser_id] = useState(props.auth.user.id)
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {user_id, title, notes}
        router.post('/note', data)
    }

    return (
        <>
            <Navbar author={props.auth}></Navbar>
            <div className="font-mono flex flex-col items-center min-h-screen">
                <h1 className="text-3xl ml-16 mt-4">Add New Note</h1>
                <div className="card w-1/2 bg-base-100 shadow-xl p-3 static">
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <input
                            type="hidden"
                            name="user_id"
                            value={user_id}
                        />
                        <label htmlFor="title">
                            Add Title
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                id="title"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                name="title"
                            />
                        </label>
                        <label htmlFor="notes" className="block mt-6">
                            Add Notes
                            <textarea
                                className="textarea textarea-bordered w-full block"
                                id="notes"
                                placeholder="Enter Notes Here"
                                value={notes}
                                onChange={(e)=>setNotes(e.target.value)}
                                name="notes"
                            ></textarea>
                        </label>
                        <div className="flex items-center justify-center">
                            <button
                                className="btn btn-primary mt-3"
                                type="submit"
                            >
                                Add New Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
