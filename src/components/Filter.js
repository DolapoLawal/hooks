import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = () => {
        onFilter({ title, rating });
        // Filter the movies based on title and rating

    };

    return (
        <div className="filter">
        <input
            type="text"
            placeholder="Enter movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="text"
            placeholder="Enter movie rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
        </div>
    );
};

export default Filter;