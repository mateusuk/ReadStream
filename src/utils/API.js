import axios from 'axios';

export const searchBooks = async (searchTerm) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyBizON8Qx4swlC0a-SRQzgUdwpx7aQzTKo&maxResults=16`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

