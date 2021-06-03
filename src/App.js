import React, {useEffect, useState} from 'react';

import {Pagination, Table, SortPanel, WindMovie} from './components';

import star from './img/star.png';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.scss';

export const App = () => {

    const [page, setPage] = useState(1);
    const [sortParam, setSortParam] = useState('date_added');
    const [genre, setGenre] = useState('all');
    const [moviesData, setMoviesData] = useState(null);
    const [loadedImages, setLoadedImages] = useState([]);
    const [comments, setComments] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [commentValue, setCommentValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://yts.mx/api/v2/list_movies.json?page=${page}&limit=20&genre=${genre}&sort_by=${sortParam}`);
                const json = await response.json();
                setMoviesData(json.data);
                setCommentValue('');
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };
        fetchData();
        setLoadedImages([]);
    }, [page, genre, sortParam]);

    const createComment = (id) => {
        if (commentValue !== '') {
            setComments([...comments, {id, value: commentValue}]);
            setCommentValue('');
        }
    };

    return (
        <div className='main'>
            <WindMovie
                createComment={createComment}
                commentValue={commentValue}
                setCommentValue={setCommentValue}
                currentMovie={currentMovie}
                setCurrentMovie={setCurrentMovie}
                moviesData={moviesData}
                comments={comments}/>
            <SortPanel
                sortParam={sortParam}
                setSortParam={setSortParam}
                genre={genre}
                setGenre={setGenre}/>
            <Table
                star={star}
                setCurrentMovie={setCurrentMovie}
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
