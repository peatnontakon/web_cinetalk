import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movie from './components/Movie';
import { useState, useEffect } from 'react';

const Index = () => {
  const [movies, setMovies] = useState([]);
  const Api_url = "http://localhost:1337/api/movies?populate=img"

  useEffect(() => {
    fetch(Api_url)
    .then(res => res.json())
    .then(
      (result) => {
        setMovies(result.data);
      }
    )
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App movies={movies} />
    },
    {
      path: "/detail/:id", // Use dynamic route parameter
      element: <Movie />
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

reportWebVitals();

