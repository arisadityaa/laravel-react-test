import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function AddNote(props) {
    return (
        <>
        <Navbar></Navbar>
        <div className="font-mono flex flex-col items-center min-h-screen">
            <h1 className="text-3xl ml-16 mt-4">Add New Note</h1>
            <div className="card w-1/2 bg-base-100 shadow-xl p-3 static">
                <form action="" method="post">
                    <label htmlFor="title"> Add Title
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            id="title"
                        />
                    </label>
                    <label htmlFor="description">Add Description
                        <textarea className="textarea textarea-bordered w-full block" id="description" placeholder="Enter Description"></textarea>
                    </label>
                    <div className="flex items-center justify-center">

                    <button className="btn btn-primary mt-3" type="submit">Add New Note</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
}
