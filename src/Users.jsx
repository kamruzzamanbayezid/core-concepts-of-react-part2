import { useEffect, useState } from "react"
import Customers from "./Customers";

export default function User() {

      // Declare state to hold data
      const [user, setUser] = useState([]);

      // Use Effect with dependency array
      useEffect(() => {

            // use fetch to load data
            fetch('https://jsonplaceholder.typicode.com/users')
                  .then(response => response.json())

                  // set loaded data to the state
                  .then(data => setUser(data))
      }, [])

      return (
            <div style={{ border: '2px solid violet', margin: '10px' }}>
                  {/* Display data */}
                  <h3>User: {user.length}</h3>
                  <hr />
                  {
                        // Display data to component
                        user.map(customer=><Customers customer={customer}></Customers>)
                  }                
            </div>
      )
}