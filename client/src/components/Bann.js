import { useEffect, useState } from "react";
import {Carousel, Image} from 'antd'

function Ba () {

    const Api_url = "http://localhost:1337/api/movies?populate=img"

    const [movies, setImg] = useState([]);


  
    useEffect(() => {
      fetch(Api_url)
      .then(res => res.json())
      .then(
        (result) => {
          setImg(result.data);
        }
      )},[])
  
  
  
  
  
      const filteredMovies = movies.filter(val => val.id);

      return (
        <div>
          <div className="show">
            <Carousel autoplay className="bg-gradient-to-r from-black via-rose-900 to-black">
              {filteredMovies.map(val => (
                <div key={val.id}>
                  <div>
                    <Image
                      width={400}
                      height={500}
                      className="rounded-xl"
                      src={`http://localhost:1337${val.attributes.img.data.attributes.url}`}
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      );
    }
    
  
    
  
  
  
  export default Ba;