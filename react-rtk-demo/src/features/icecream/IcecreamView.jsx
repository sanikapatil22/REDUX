import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecream = useSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
  <div>
    <h2>Number of Icecreams-{numOfIcecream}</h2>
    <button onClick={() => dispatch(ordered())}>Order Icecream</button>
    <input
    type='number'
    value={value}
    placeholder='enter'
    onChange={(e) => setValue(parseInt(e.target.value))}
     />
    <button onClick={() => dispatch(restocked(value))}>Restock Icecreams</button>

  </div>
  )
};

