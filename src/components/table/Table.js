import React from 'react';

import './styles.scss';

export const Table = (props) => {
    const {moviesData, loadedImages, setLoadedImages} = props;

    return (
        <div className='table'>
            {
                moviesData
                    ? moviesData.movies.map((elem, index) => {
                        return (
                            <div key={index} className='movie'>
                                <img style={{display: loadedImages.some(e => e === index) ? 'block' : 'none'}}
                                     src={elem.medium_cover_image}
                                     onLoad={() => setLoadedImages([...loadedImages, index])} alt=""/>
                                <img style={{display: loadedImages.some(e => e === index) ? 'none' : 'block'}}
                                     src={elem.small_cover_image} alt=""/>
                                <p className='title'>{elem.title}</p>
                                <p className='year'>{elem.year}</p>
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