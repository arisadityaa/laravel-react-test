import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Card from "./Component/Card";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

export default function Homepage(props) {
    let {note} = props
    let user = props.auth.user
    return (
        <>
        <Head title="Notes" />
            <Navbar author={props.auth}></Navbar>
            <div className="w-full px-8 min-h-screen mb-10">
                <h1 className="text-slate-700 text-center text-3xl mb-4 mt-2">My Notes</h1>
                {!user ? "" : <a href={route('note.new')} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add New Note</a>}          
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-5">
                    {/* {!note ? "" : note.data.map((data, i)=> <Card note={data} key={i}></Card>)} */}
                    {note.map((data, i)=> <Card data={{"note":data, "user": props.auth.user}} key={i}></Card>)}
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
