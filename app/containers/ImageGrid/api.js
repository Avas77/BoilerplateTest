const KEY = '?client_id=LCRljsqN-cWjztpLZAGPCr57Fy8zOOEoNyJKBJioeKU';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export default fetchImages;
