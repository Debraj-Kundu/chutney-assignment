import React, { useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux'
import { emptySpace, parkCar, parkCarFromSpot } from '../redux/stateSlice'

function Spaceitem({ id, items }) {
  const dispatch = useDispatch()
  let trackId = id
  let [name, setName] = useState('')
  let [phone, setPhone] = useState('')

  return (
    <div>
      {items.name ? (
        <div key={id} className="hero-image-booked" id="book-item">
          <h6>Parking Slot No. #{id}</h6>
          <br />
          <h4>{items.name}</h4>
          {/* <input type="text" /> */}
          <h6>{items.phone ? items.phone : ''}</h6>
          {/* <input type="number" /> */}
          <br />
          <button
            type="submit"
            className="btn btn-danger  mx-2"
            onClick={() => {
              setPhone('')
              setName('')
              dispatch(
                emptySpace({
                  id,
                  name,
                  phone,
                }),
              )
            }}
          >
            Leave
          </button>
        </div>
      ) : (
        <div key={id} className="hero-image-empty" id="book-item">
          <h6>Parking Slot No. #{id}</h6>
          <br />
          <h6>Enter Your Name</h6>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h6>Enter Your Number</h6>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-success  mx-2"
            onClick={() => {
              dispatch(parkCar({
                id,
                name,
                phone
              }))
              setName('')
              setPhone('')
            }}
          >
            Book
          </button>
        </div>
      )}
    </div>
  )
}
export default Spaceitem
