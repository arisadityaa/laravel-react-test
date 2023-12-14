import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function ({ author }) {
    let { user } = author;
    // console.log(user);
    return (
        <>
            <nav className="w-full p-2 bg-slate-400 sticky top-0">
                <div className="flex justify-between font-mono">
                    <div className="flex space-x-2 items-center">
                        <h1 className="text-2xl">Notes App</h1>
                        {!user ? (
                            ""
                        ) : (
                            <Link
                                href={route("dashboard")}
                                className="text-stone-800 hover:brightness-200"
                            >
                                Dashboard
                            </Link>
                        )}
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
                            About
                        </a>
                    </div>

                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary>{!user? "Guest User" : user.name}</summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    {!user ? (
                                        <>
                                            <li>
                                                <Link
                                                    href={route("login")}
                                                    as="button"
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    href={route("register")}
                                                    as="button"
                                                >
                                                    Register
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link
                                                    href={route("profile.edit")}
                                                    as="button"
                                                >
                                                    Edit Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href={route("logout")}
                                                    as="button"
                                                    method="post"
                                                >
                                                    Logout
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
