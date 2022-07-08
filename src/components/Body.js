import React from 'react'
import { useSelector } from 'react-redux'
import Spaceitem from './Parkingitem'

const Body = () => {
  const spaces = useSelector((state) => state.lots.spaces)

  return (
    <div className="my-4" id="park-cont">
      {spaces.map((e, idx) => {
        return (
          <div key={idx+1}>
            <Spaceitem id={idx+1} items={e} />
          </div>
        )
      })}
    </div>
  )
}

export default Body
