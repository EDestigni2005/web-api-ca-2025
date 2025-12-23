import express from 'express';
import asyncHandler from 'express-async-handler';
import Favourite from './favouriteModel.js';

const router = express.Router();

// Get all favourites
router.get('/', asyncHandler(async (req, res) => {
    const favourites = await Favourite.find();
    res.status(200).json(favourites);
}));

// Get favourites by userId
router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const favourites = await Favourite.find({ userId: userId });
    res.status(200).json(favourites);
}));

// Add a favourite
router.post('/', asyncHandler(async (req, res) => {
    const { userId, movieId, title, poster_path } = req.body;
    
    // Check if already exists
    const exists = await Favourite.findOne({ userId, movieId });
    if (exists) {
        return res.status(400).json({ success: false, msg: 'Already in favourites' });
    }
    
    const favourite = await Favourite.create({ userId, movieId, title, poster_path });
    res.status(201).json({ success: true, favourite });
}));

export default router;