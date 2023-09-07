// Linked with Users.jsx

export default function Customers({ customer }) {
      console.log(customer);
      const { id, name, phone, website, email, address } = customer;
      return (
            <div style={{
                  border: '2px solid red',
                  borderRadius: '10px',
                  margin: '5px'
            }}>
                  <h3>User Name: {name}</h3>
                  <h4>Id: {id}</h4>
                  <h4>Phone: {phone}</h4>
                  <h4>Website: {website}</h4>
                  <h4>Email: {email}</h4>
                  <h4>Address: {address.street}</h4>
            </div >
      )
}