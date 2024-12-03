import React, { useState } from 'react';
import './ReviewForm.css';
//import restaurant from '../images/interiores.jpg'
import dish3 from '../images/dish4.jpg';


const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [dineOption, setDineOption] = useState('Dine in');
  const [selectedTags, setSelectedTags] = useState([]);
  const [experience, setExperience] = useState('');

  const tags = [
    'Worth the money', 'Good quantity', 'Great ambience',
    'Good seating', 'Short wait time', 'Fresh food',
  ];

  const handleRatingClick = (rate) => {
    setRating(rate);
  };

  const handleTagClick = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      rating,
      dineOption,
      selectedTags,
      experience,
    };
    console.log('Review submitted:', review);
    // Implement API call to submit the review
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2>Write Review</h2>

      <div className="restaurant-info">
        {/* <img src="{restaurant}" alt=" "className="restaurant-image" /> */}
        <img src={dish3} alt="Dish 1" className="restaurant-image" />
        <div>
          <h3> Restaurant</h3>
         
        </div>
      </div>

      <div className="rating-section">
        <p>How would you rate your experience?</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? 'filled' : ''}`}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>
        <p>{rating === 5 ? 'Excellent 😍' : ''}</p>
      </div>

      <div className="dine-option-section">
        <label>
          <input
            type="radio"
            name="dineOption"
            value="Dine in"
            checked={dineOption === 'Dine in'}
            onChange={() => setDineOption('Dine in')}
          />
          Dine in
        </label>
        <label>
          <input
            type="radio"
            name="dineOption"
            value="Delivery"
            checked={dineOption === 'Delivery'}
            onChange={() => setDineOption('Delivery')}
          />
          Delivery
        </label>
      </div>

      <div className="tags-section">
        <p>What did you love?</p>
        <div className="tags">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="experience-section">
        <label htmlFor="experience">Tell us about your experience</label>
        <textarea
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Share your experience..."
        />
      </div>

      <button type="submit" className="submit-btn">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
