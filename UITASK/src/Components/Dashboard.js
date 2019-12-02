import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
function Dashboard({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);
  const [items, setitems] = useState([])
  const fetchItem = async () => {
    let countarray = [];
    const url = 'http://localhost:5000/shipmentsList';
    fetch(url).then((resp) => resp.json())
      .then(function (data) {
        countarray.push(data.length);
        let deliveredcount = data.filter(obj => {
          return obj.status === 'Delivered'
        })
        let assignedcount = data.filter(obj => {
          return obj.status === 'Assigned'
        })
        let unassignedcount = data.filter(obj => {
          return obj.status === 'Waiting'
        })
        countarray.push(deliveredcount.length);
        countarray.push(assignedcount.length);
        countarray.push(unassignedcount.length);
        const usersurl = 'http://localhost:5000/users';
        fetch(usersurl).then((resp) => resp.json())
          .then(function (data) {
            let totalbikers = data.filter(obj => {
              return obj.role === 'Biker'
            })
            countarray.push(totalbikers.length);
            setitems(countarray);
          })
          .catch(function (error) {
            alert('ERROR');
          });
      })
      .catch(function (error) {
        alert('ERROR');
      });
  }
  return (
    <div className="container-fluid">
      <h3 className='pagetitle'>Dashboard</h3>
      <div className='col-sm-12'>
        <div className='row'>
          <div className='col-sm-12 col-md-3'>
            <div className='tile orange col-sm-12'>
              <div className='row'>
                <div className='col-sm-6 tilehead'>Total Shipments</div>
                <div className='col-sm-6 count'>{items[0]}</div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-3'>
            <div className='tile green col-sm-12'>
              <div className='row'>
                <div className='col-sm-6 tilehead'>Delivered</div>
                <div className='col-sm-6 count'>{items[1]}</div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-3'>
            <div className='tile blue col-sm-12'>
              <div className='row'>
                <div className='col-sm-6 tilehead'>Assigned</div>
                <div className='col-sm-6 count'>{items[2]}</div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-3'>
            <div className='tile darkpink col-sm-12'>
              <div className='row'>
                <div className='col-sm-6 tilehead'>UnAssigned</div>
                <div className='col-sm-6 count'>{items[3]}</div>
              </div>
            </div>
          </div>
          <div className='col-sm-12 col-md-3'>
            <div className='tile seagreen col-sm-12'>
              <div className='row'>
                <div className='col-sm-6 tilehead'>Total Bikers</div>
                <div className='col-sm-6 count'>{items[4]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
const mapStateToProps = (state) => {
  return {
    state: state
  }
}
export default connect(mapStateToProps)(Dashboard)
