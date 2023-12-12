import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function(props){
    return(
    <>
      <nav className='w-full p-2 bg-slate-400'>
         <div className="flex justify-between font-mono">
            <div className="flex space-x-2 items-center">
               <h1 className="text-2xl">Notes App</h1>
                  <a href="#" className="text-stone-800 hover:brightness-200">Home</a>
                  <a href="#" className="text-stone-800 hover:brightness-200">Notes</a>
                  <a href="#" className="text-stone-800 hover:brightness-200">About</a>                  
            </div>

            <h2 className="">User</h2>

         </div>
      </nav>
    </>
    )
}