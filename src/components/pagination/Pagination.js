import React from 'react';

import './styles.scss';

export const Pagination = (props) => {
    const {page, setPage, movieCount} = props;

    const pagesArr = [];
    [-2, -1, 0, 1, 2].forEach(addition => {
        let btnValue = page + addition;
        ((btnValue > 0) && (btnValue < Math.floor(movieCount / 20)))
            ? pagesArr.push(btnValue)
            : (btnValue <= 0) ? pagesArr.push(btnValue + 5) : pagesArr.push(btnValue - 5);
    });


    return (
        <div className='pagination'>
            {
                pagesArr.sort((a, b) => a - b).map((value, index) => (
                    <button
                        key={index}
                        className={(value === page) ? 'active' : 'standart'}
                        onClick={() => setPage(value)}>
                        {value}
                    </button>))
            }
        </div>
    );
};