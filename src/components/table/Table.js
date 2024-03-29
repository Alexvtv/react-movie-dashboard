import React from 'react';

import './styles.scss';

export const Table = (props) => {
    const {moviesData, loadedImages, setLoadedImages, star, setCurrentMovie} = props;

    return (
        <div className='table'>
            {
                moviesData
                    ? moviesData.movies.map((elem, index) => {
                        return (
                            <div key={index} onClick={() => setCurrentMovie(elem.id)} className='movie'>
                                <img style={{display: loadedImages.some(e => e === index) ? 'block' : 'none'}}
                                     src={elem.medium_cover_image}
                                     onLoad={() => setLoadedImages([...loadedImages, index])} alt=""/>
                                <img style={{display: loadedImages.some(e => e === index) ? 'none' : 'block'}}
                                     src={elem.small_cover_image} alt=""/>
                                <p className='title'>{elem.title}</p>
                                <p className='year'>{elem.year}</p>
                                <div className='rating'>
                                    <img src={star}/>
                                    <p>{elem.rating}</p>
                                </div>
                                <div className='synopsis'>
                                    <p>{elem.synopsis}</p>
                                </div>
                            </div>);
                    })
                    : Array(20).fill('').map((elem, index) => (
                        <div key={index} className='movie loadingMovie'>
                        </div>))
            }
        </div>
    );
};