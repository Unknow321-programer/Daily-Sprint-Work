import { useEffect, useState } from "react";

import "../stylesheets/Pagination.css"
const Pagination = ({ totalUsers, setCurrentPage }) => {
    const [pages, setPages] = useState([]);
    const [activeBtn, setActiveBtn] = useState(1);

    useEffect(() => {
        const totalPages = Math.ceil(totalUsers / 5);
        let newPages = [];

        for(let i = 1; i <= totalPages; i++) {
            newPages.push(i);
        }

        setPages(newPages);

    }, [totalUsers]);

    const handlePageChange = (e) => {
        const btn = e.target.value;
        setCurrentPage(btn);
        setActiveBtn(Number(btn));
    }


    return (
        <section className="pagination">
            <div className="pagination-container">

                {pages.map((page) => {
                    return (
                        <button key={page} id={"btn-"+page} className={ activeBtn === page ? "active-page" : ""} onClick={handlePageChange} value={page}>
                            {page}
                        </button>
                    )
                })}
            </div>
        </section>
    );
}

export default Pagination;