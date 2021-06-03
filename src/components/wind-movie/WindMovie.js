import React from 'react';
import './styles.scss';

export const WindMovie = (props) => {
    const {createComment, commentValue, comments, setCommentValue, currentMovie, setCurrentMovie, moviesData} = props;

    if (currentMovie !== null) {
        const movie = moviesData.movies.find(movie => movie.id === currentMovie);
        return (<div className='movieComments' onClick={() => setCurrentMovie(null)}>
            <div onClick={(e) => e.stopPropagation()}>
                <div className='close' onClick={() => setCurrentMovie(null)}>&times;</div>
                <div className='movieData'>
                    <img src={movie.medium_cover_image} alt=''/>
                    <p>{movie.description_full}</p>
                </div>
                <div className='comments'>
                    <div className='newComment'>
                        <p>Оставьте комментарий</p>
                        <textarea value={commentValue} onChange={(e) => setCommentValue(e.target.value)}/>
                        <button onClick={() => createComment(movie.id)}>Отправить</button>
                    </div>
                    <div className='commentsMain'>
                        {comments.filter(comm => comm.id === movie.id).map((elem, i) => <p
                            key={i}>{elem.value}</p>)}
                    </div>
                </div>
            </div>
        </div>);
    } else {
        return '';
    }
};