export default function AddNote(props) {
    return (
        <div className="font-mono">
            <h1 className="text-3xl ml-16 mt-4">Add New Note</h1>
            <div className="w-1/2 mx-auto bg-rose-300">
                <form action="" method="post">
                <label htmlFor="titel">
                    <input type="text" name="title" id="" />
                </label>
                </form>
            </div>
        </div>
    );
}
