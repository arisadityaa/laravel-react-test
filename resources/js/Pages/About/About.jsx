import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">
                            Ini Merupakan Aplikasi Pertama Yang dibuat untuk belajar React dalam Laravel.. <br></br>
                            Mungkin akan banyak kekurangan dari aplikasi ini, karena ini masih permulaan dan masih dalam tahapan belajar!!
                        </p>
                        <Link href={route("home")} className="btn btn-primary" as="button">Back To Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
