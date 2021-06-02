import React from 'react';

import './styles.scss';

export const SortPanel = (props) => {
    const {sortParam, setSortParam, genre, setGenre} = props;

    return (
        <div className='sortPanel'>
            <select value={sortParam} onChange={(e) => setSortParam(e.target.value)}>
                <option value={'title'}>Названию</option>
                <option value={'year'}>Году</option>
                <option value={'rating'}>Рейтингу</option>
                <option value={'date_added'}>Дате добавления</option>
            </select>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value={'all'}>Все</option>
                <option value={'drama'}>Драмы</option>
                <option value={'fantasy'}>Фэнтэзи</option>
                <option value={'comedy'}>Комедии</option>
                <option value={'adventure'}>Приключения</option>
                <option value={'thriller'}>Триллеры</option>
            </select>
        </div>
    );
};