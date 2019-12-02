import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
function Shipments({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);
  const [items, setitems] = useState([])
  const [users, setusers] = useState([])
  const [userrole, setName] = useState('');
  const fetchItem = async () => {
    let loggeduser = JSON.parse(localStorage.getItem('state')).userName;
    let loggedrole = JSON.parse(localStorage.getItem('state')).role;
    setName(loggedrole);
    const url = 'http://localhost:5000/shipmentsList';
    fetch(url).then((resp) => resp.json())
      .then(function (data) {
        let result;
        if (loggedrole === 'Manager' && loggedrole !== undefined) {
          result = data;
        }
        else {
          result = data.filter(obj => {
            return obj.AssignedTo === loggeduser
          })
        }
        if (result.length > 0) {
          setitems(result);
        }
        else {
          console.log('NO DATA');
        }
      })
      .catch(function (error) {
        alert('ERROR');
      });
    const userurl = 'http://localhost:5000/users';
    fetch(userurl).then((resp) => resp.json())
      .then(function (data) {
        setusers(data);
      })
      .catch(function (error) {
        alert('ERROR');
      });
  }
  return (
    <div className="container-fluid">
      <h3 className='pagetitle'>Shipment Details</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Vendor Name</th>
            <th scope="col">Origin</th>
            <th scope="col">Destination</th>
            <th scope="col">Assigned To</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td key={item.id} data-label="ID">{item.id}</td>
              <td key={item.vendorName} data-label="Vendor Name">{item.vendorName}</td>
              <td key={item.Origin} data-label="Origin">{item.Origin}</td>
              <td key={item.Destination} data-label="Destination">{item.Destination}</td>
              {userrole === 'Manager' && item.status === 'Waiting'
                ? <td key={item.AssignedTo} data-label="Assigned To"><select className='tableselect'>
                  <option> -- Select One --</option>
                  {users.map(user => (
                    <option key={user.id}>{user.userName}</option>
                  ))}
                </select></td> :
                <td key={item.AssignedTo} data-label="Assigned To">{item.AssignedTo}</td>}
              <td key={item.status} data-label="Status">{item.status}</td>
              <td key={item.dateTime} data-label="Date">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
const mapStateToProps = (state) => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(Shipments)