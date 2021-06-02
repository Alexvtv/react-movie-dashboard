import React, {useEffect, useState} from 'react';

import {Pagination, Table, SortPanel} from './components';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

export const App = () => {

    const [page, setPage] = useState(1);
    const [sortParam, setSortParam] = useState('date_added');
    const [genre, setGenre] = useState('all');
    const [moviesData, setMoviesData] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=20&genre=${genre}&sort_by=${sortParam}`);
                const json = await response.json();
                setMoviesData(json.data);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
        fetchData();
        setLoadedImages([]);
    }, [page, genre, sortParam]);

    return (
        <div className='main'>
            <SortPanel
                sortParam={sortParam}
                setSortParam={setSortParam}
                genre={genre}
                setGenre={setGenre}/>
            <Table
                moviesData={moviesData}
                loadedImages={loadedImages}
                setLoadedImages={setLoadedImages}/>
            <Pagination
                movieCount={moviesData?.movie_count}
                page={page}
                setPage={setPage}/>
        </div>
    );
};
