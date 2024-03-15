const express = require('express');
const router = express.Router();
const Rating = require('../models/Rating');

// POST route to add a new rating
router.post('/ratings', async (req, res) => {
  try {
    const { orderId, productId, rating } = req.body;
    const newRating = new Rating({ orderId, productId, rating });
    await newRating.save();
    res.status(201).json(newRating);
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET route to get all ratings
router.get('/ratings', async (req, res) => {
  try {
    const ratings = await Rating.find();
    res.status(200).json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/ratings/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const ratings = await Rating.find({ productId });
    res.status(200).json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// PUT route to update a rating
router.put('/ratings/:id', async (req, res) => {
  try {
    const { rating } = req.body;
    const updatedRating = await Rating.findByIdAndUpdate(req.params.id, { rating }, { new: true });
    res.status(200).json(updatedRating);
  } catch (error) {
    console.error('Error updating rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE route to delete a rating
router.delete('/ratings/:id', async (req, res) => {
  try {
    await Rating.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting rating:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// // POST route to add a new rating
// router.post('/ratings', async (req, res) => {
//   try {
//     const { orderId, productId, rating } = req.body;

//     // Find the rating document for the product
//     let ratingDoc = await Rating.findOne({ productId });

//     if (!ratingDoc) {
//       // Create a new rating document if it doesn't exist
//       ratingDoc = new Rating({ productId });
//     }

//     // Add the new rating to the ratings array
//     ratingDoc.ratings.push(rating);

//     // Calculate the new average rating
//     const newAverageRating = ratingDoc.ratings.reduce((acc, curr) => acc + curr, 0) / ratingDoc.ratings.length;

//     // Update the averageRating field
//     ratingDoc.averageRating = newAverageRating;

//     // Save the updated rating document
//     await ratingDoc.save();

//     res.status(201).json(ratingDoc);
//   } catch (error) {
//     console.error('Error saving rating:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // PUT route to update a rating
// router.put('/ratings/:id', async (req, res) => {
//   try {
//     const { rating } = req.body;

//     // Find the rating document by id
//     const ratingDoc = await Rating.findById(req.params.id);

//     if (!ratingDoc) {
//       return res.status(404).json({ error: 'Rating not found' });
//     }

//     // Find the index of the rating to update
//     const index = ratingDoc.ratings.findIndex(r => r._id.toString() === req.params.id);

//     if (index === -1) {
//       return res.status(404).json({ error: 'Rating not found' });
//     }

//     // Update the rating in the ratings array
//     ratingDoc.ratings[index] = rating;

//     // Calculate the new average rating
//     const newAverageRating = ratingDoc.ratings.reduce((acc, curr) => acc + curr, 0) / ratingDoc.ratings.length;

//     // Update the averageRating field
//     ratingDoc.averageRating = newAverageRating;

//     // Save the updated rating document
//     await ratingDoc.save();

//     res.status(200).json(ratingDoc);
//   } catch (error) {
//     console.error('Error updating rating:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


module.exports = router;
