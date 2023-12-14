import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function (props) {
    return (
        <>
            <nav className="w-full p-2 bg-slate-400 sticky top-0">
                <div className="flex justify-between font-mono">
                    <div className="flex space-x-2 items-center">
                        <h1 className="text-2xl">Notes App</h1>
                        <a
                            href="/"
                            className="text-stone-800 hover:brightness-200"
                        >
                            Home
                        </a>
                        <a
                            href="/"
                            className="text-stone-800 hover:brightness-200"
                        >
                            Notes
                        </a>
                        <a
                            href="/"
                            className="text-stone-800 hover:brightness-200"
                        >
                            About
                        </a>
                    </div>

                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>Username</summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li>
                                        <a>Login</a>
                                    </li>
                                    <li>
                                        <a>Logout</a>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
