import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Head } from "@inertiajs/react";

export default function EditNote(props) {
    // console.log(props);
    const [id, setId] = useState(props.note.id);
    const [notes, setNotes] = useState(props.note.notes);
    const [title, setTitle] = useState(props.note.title);

    return (
        <>
        <Head title="Notes" />            
            <Navbar></Navbar>
            <div className="font-mono flex flex-col items-center min-h-screen">
                <h1 className="text-3xl ml-16 mt-4">Edit A Note</h1>
                <div className="card w-1/2 bg-base-100 shadow-xl p-3 static">
                    <form action="" method="post">
                        <input type="hidden" name="" value={id} />
                        <label htmlFor="title">
                            Title
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                id="title"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label htmlFor="description">
                            Description
                            <textarea
                                className="textarea textarea-bordered w-full block"
                                id="description"
                                rows={6}
                                placeholder="Enter Description"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            ></textarea>
                        </label>
                        <div className="flex items-center justify-center">
                            <button
                                className="btn btn-warning mt-3"
                                type="submit"
                            >
                                Edit The Note
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
