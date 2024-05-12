import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image } from 'antd';
import './Movie.css';

function Movie() {
    let { id } = useParams();
    const apiUrl = `http://localhost:1337/api/movies/${id}?populate=img`; // Updated API URL
    const [movie, setMovie] = useState(null); // Changed state to hold a single movie instead of an array

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(
          (result) => {
            setMovie(result.data);
          }
        )
    }, [apiUrl]); // Added apiUrl as a dependency for useEffect
    
    if (!movie) {
        return <div>Loading...</div>; // Added a loading state
    }

    return (
        <div>
            <div className="detail text-white content-center">
                <div key={movie.id}>
                    <h1 className='title2'>ชื่อเรื่อง : {movie.attributes.title}</h1>
                    <p className='Des2 w-96'>เรื่องย่อ : {movie.attributes.description}</p>
                    <Image width={400} height={500} className="rounded-xl" src={"http://localhost:1337"+movie.attributes.img.data.attributes.url}/>
                    {/* Add other movie details here */}
                </div>
            </div>
        </div>
    );
}

export default Movie;




