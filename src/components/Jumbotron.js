import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { extendSpace, parkCar } from '../redux/stateSlice'

const Jumbo = () => {
  const dispatch = useDispatch()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div>
      <div id="space">
        <h2>Add 10 more Spaces</h2>
        <button
          className="btn btn-primary  mx-2"
          onClick={() => dispatch(extendSpace())}
        >
          <strong>CLICK HERE FOR NEW SPACES</strong>
        </button>
      </div>
      <div className="col m-2 hero-image   text-center font-weight-bold ">
        <br />

        <h1 className="text-center"> Add Your Details</h1>
        <br />
        <div className="size text-center">
          <h5>Enter parking slot</h5>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="col form-control"
          />
          <h5>Enter Your name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col form-control"
          />
          {name ? null : <div className="text-danger">Name is required</div>}
          <h5>Enter phone number</h5>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="col form-control"
          />
          <br />
          <div className="text-center">
            <button
              onClick={() => {
                dispatch(
                  parkCar({
                    id,
                    name,
                    phone,
                  })
                )
                setId('')
                setName('')
                setPhone('')
              }}
              className="btn btn-success  mx-2"
            >
              <strong>Book</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jumbo
