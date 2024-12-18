export const getMovies = async () => {
  try {
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    return json.movies;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const json = await response.json();
    return json.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getDetailProducts = async productId => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
