import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Card(props){
    let {id, title, created_at, notes} = props.note
    const date = new Date(created_at);
    const formattedDate = date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    console.log(formattedDate)
    return(
        <>
            <div className="w-full max-w-md p-2 pl-6 bg-cyan-600 rounded shadow-2xl shadow-teal-500/90">
                <h1 className='text-center'>{title}</h1>
                <p className='mt-2 text-gray-600'>{formattedDate}</p>
                <p className='mt-2'>{notes}</p>
                <div className='w-full flex items-center justify-center mt-4'>
                    <a href={`/note/edit/${id}`} type="button" className="block focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Edit</a>
                    <button type="button" className="block focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </div>
            </div>
        </>
    )
}