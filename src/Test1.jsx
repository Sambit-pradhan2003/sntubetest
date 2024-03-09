import React from 'react'
import { useLocation } from 'react-router-dom';

function Test1() {
  const location = useLocation();
  const receivedData = location.state && location.state.data;
  console.log(receivedData)

  return (
    <div>
      <h2>Component B</h2>
     
    </div>
  )
}

export default Test1
