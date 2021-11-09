import { cochlearAPI } from '../index';

export const getPhotos = (query, page = 1, perPage = 100)=>
  cochlearAPI().get('/search/photos?query=' + query + '&page=' + page + '&perPage=' + perPage);