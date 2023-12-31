import React from 'react';
import  { Link } from 'react-router-dom';
import MovieCard from './MovieCard';


const MovieLists = () => {
    const movies = [
        {
        title: 'Magic of Disney',
        description: 'Magic of Disney Animal Kingdom gives viewers a backstage pass to explore the magic of nature within Disney Animal Kingdom Theme Park, Disney Animal Kingdom Lodge and The Seas with Nemo & Friends at EPCOT. Each episode dives into the details, unveiling the multifaceted aspects of animal care, conservation and Disney Imagineering and showcases the parks magnificent array of more than 300 species and 5,000-plus animals and the herculean tasks their animal care experts undertake to keep things running day and night.',
        posterURL: "images/disney2.jpg",
        rating: 4.5,
        trailerLink: 'https://www.youtube.com/embed/lgyfP_sOTvA',
        },

        {
        title: 'First',
        description: 'A young mans difficult entry into adulthood, who experiences the highs and lows of his first love, while dealing with the familial fallout spurred by the financial crisis of 2008.',
        posterURL: "images/first2.jpg",
        rating: 4.8,
        trailerLink: 'https://www.youtube.com/embed/j0kro6SuwxM&t=20s'
        },

        {
            title: 'Frozen Fever',
            description: 'On Anna birthday, Elsa and Kristoff are determined to give her the best celebration ever, but Elsa icy powers may put more than just the party at risk.',
            posterURL: "images/frozen2.jpg",
            rating: 4.0,
            trailerLink: 'https://www.youtube.com/embed/3SVUr0yasCQ'
            },

            {
                title: 'King The Land',
                description: 'Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who known for her irresistible smile which he cannot stand.',
                posterURL: "images/king.jpg",
                rating: 5.0,
                trailerLink: 'https://www.youtube.com/embed/AGF16szMOmo'
                },

        // Add more movies as needed
    ];

    return (
        <div className="movie-list">
        {movies.map((movie, index) => (
            <Link to={`/movies/${encodeURIComponent(movie.title)}`} key={index}>
            <MovieCard
                title={movie.title}
                description={movie.description}
                posterURL={movie.posterURL}
                rating={movie.rating}
            />
            </Link>
        ))}
        </div>
    );
};



export default MovieLists;
;