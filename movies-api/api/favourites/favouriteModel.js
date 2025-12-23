import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
    userId: { type: String, required: true },
    movieId: { type: Number, required: true },
    title: { type: String },
    poster_path: { type: String },
    addedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Favourite', FavouriteSchema);