import { Link } from "@inertiajs/react";

export default function Pagination(props) {
    console.log(props);
    const {prev_page_url, current_page, next_page_url} = props.data
    // console.log(prev_page_url);
    return (
        <>
            <div className="join flex items-center justify-center mb-10 space-x-1">
                {!prev_page_url? "" : <Link href={prev_page_url} className="join-item btn btn-primary" as="button">Prev</Link>}
                <button className="join-item btn">Page {props.data.current_page}</button>
                {!next_page_url? "" : <Link href={next_page_url} className="join-item btn btn-primary" as="button">Next</Link>}
                
            </div>
        </>
    );
}
