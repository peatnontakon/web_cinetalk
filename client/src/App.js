import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import './App.css';
import{ Button, Row} from 'react-bootstrap';
import {Carousel, Image} from 'antd'
import Ba from "./components/Bann";
import { Link  } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movie from "./components/Movie";



function App () {

  const [movies, setMovies] = useState([]);
  const Api_url = "http://localhost:1337/api/movies?populate=img"

  useEffect(() => {
    fetch(Api_url)
    .then(res => res.json())
    .then(
      (result) => {
        setMovies(result.data);
      }
    )},[])





  return (
    <div>
      <NavBar />
      <Ba />
      <div className="show grid grid-cols-3 gap-y-8">
        {movies.map(val => (
            <div key={val.id}>

              <Image width={300} height={400} className="rounded-xl" src={"http://localhost:1337"+val.attributes.img.data.attributes.url}/>
              <p className="name text-white">{val.attributes.title}</p>
              <p className="text-yellow-400">Score : {val.attributes.point} /10</p>
              <Button key={val.id} className="see w-64 rounded-xl text-white bg-rose-800" onClick={() => console.log(`Clicked product with ID: ${val.id}`)}>
                <nav>
                <Link to={`/detail/${val.id}`} className="link">
                อ่านรีวิว
              </Link>
                </nav>
              </Button>
            </div>
          ))}
      </div>
      
    </div>
  )

};

  



export default App;