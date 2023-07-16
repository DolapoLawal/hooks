import React from "react";
import { useParams, useNavigate } from 'react-router-dom';

const Moviedescription = ({ movies }) => {
    const navigate = useNavigate();
    const { title } = useParams();

    const goBack = () => {
        navigate(-1); // Navigates back to the previous page
    };
    
    const movie = movies.find((movie) => movie.title === title);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const videoId = getYouTubeVideoId(movie.trailerLink);
    
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>  
            <div>
             <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Movie Trailer"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    // trailerLink={videoId}   
                ></iframe>
            </div>
            <button onClick={goBack}>Home Page</button>
        </div>
    );
};

const getYouTubeVideoId = (url) => {
    if (!url || typeof url !== 'string') {
      return null; // Return null or handle the invalid input case as per your requirement
    }
  
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|v\/|embed\/|user\/(?:[\w#]+\/)+))([^&#?]+)/);
    return match && match[1];
  };
  


export default Moviedescription;
