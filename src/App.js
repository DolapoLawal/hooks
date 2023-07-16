import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieLists.js';
import Filter from './components/Filter.js';
import Moviedescription from './components/Moviedescription.js';


const App = () => {
    const [movies, setMovies] = useState([
        {
        title: 'Magic of Disney',
        description: 'Tenth and final installment of the Fast and Furious franchise.',
        trailerLink: 'https://www.youtube.com/watch?v=lgyfP_sOTvA',
        rating: 4.5,
        },

        {
        title: 'First',
        description: 'A young man difficult entry into adulthood, who experiences the highs and lows of his first love, while dealing with the familial fallout spurred by the financial crisis of 2008..',
        trailerLink: 'https://www.youtube.com/watch?v=j0kro6SuwxM&t=20s',
        rating: 4.8,
        },

        {
        title: 'Frozen Fever',
        description: 'On Anna birthday, Elsa and Kristoff are determined to give her the best celebration ever, but Elsa icy powers may put more than just the party at risk.',
        trailerLink: 'https://www.youtube.com/watch?v=3SVUr0yasCQ',
        rating: 4.0,
        },

        {
            title: 'King The Land',
            description: 'Amid a tense inheritance fight, a charming heir clashes with his hardworking employee who known for her irresistible smile which he cannot stand.',
            trailerLink: 'https://www.youtube.com/watch?v=AGF16szMOmo',
            rating: 5.0,
            },

        // Add more movies as needed
    ]);

    const [filteredMovies, setFilteredMovies] = useState([]);

    const handleFilter = ({ title, rating }) => {
        // Filter the movies based on title and rating
        const filtered = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(title.toLowerCase()) &&
            movie.rating >= parseFloat(rating)
        );
        setFilteredMovies(filtered);
    };

    const handleAddMovie = (newMovie) => {
        setMovies([...movies, newMovie]);
        setFilteredMovies([...filteredMovies, newMovie]);
    };

    return (
        <div className="app">
          <Filter onFilter={handleFilter} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MovieList movies={filteredMovies} />} />
              <Route path="/movies/:title" element={<Moviedescription movies={movies} />} />
            </Routes>
          </BrowserRouter>
          <AddMovieForm onAddMovie={handleAddMovie} />
        </div>
      );
    };

    const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMovie = {
        title,
        description,
        posterURL,
        rating: parseFloat(rating),
        };

        onAddMovie(newMovie);

        setTitle('');
        setDescription('');
        setPosterURL('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <input
            type="text"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
        />
        <input
            type="text"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Add Movie</button>
        </form>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
    
  
  export default App;