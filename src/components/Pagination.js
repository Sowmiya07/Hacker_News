import React from 'react';
import '../styles/paginationStyles.css';

const Pagination = ({storyPerPage, totalStory, paginate, start, end, previousPage, nextPage}) => {
    const pageNumbers = []

    for(let i = 1; i < Math.ceil(totalStory/storyPerPage); i++) {
        pageNumbers.push(i);
    }

    const currentPageNumbers = pageNumbers.slice(start-1, end)

    return (
        <nav className="pageNav">
            <ul className="pageList">
                <li className="previous">
                    <a herf="#" onClick={() => previousPage()}>prev</a>
                </li>
                {currentPageNumbers.map(number => 
                    <li key={number} className="pageItem">
                        <a herf="#" onClick={() => paginate(number)}>{number}</a>
                    </li>
                )}
                <li className="next">
                    <a herf="#" onClick={() => nextPage()}>next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;