import { combineReducers } from 'redux';
import GalleryReducer from './reducer_gallery'

export default combineReducers({
    gallery: GalleryReducer
});
