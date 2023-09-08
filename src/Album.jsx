import './Albums.css'

export default function Album({ album }) {

      const { userId, id, title } = album;
      
      return (
            <div className='albumStyle'>
                  <h4>Id: {id}</h4>
                  <h4>User Id: {userId}</h4>
                  <h4>Title: {title}</h4>
            </div>
      )
}