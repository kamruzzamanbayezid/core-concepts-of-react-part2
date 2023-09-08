import { useEffect, useState } from "react"
import './Albums.css'
import Album from "./Album";

export default function Albums() {

      const [albums, setAlbums] = useState([]);
      console.log(albums);

      useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/albums')
                  .then(res => res.json())
                  .then(data => setAlbums(data))
      }, [])

      return (
            <div className="border">
                  <h3 className="albumsStyle">Users: {albums.length}</h3>
                  {
                        albums.map(album=><Album album={album}></Album>)
                  }
            </div>
      )
}