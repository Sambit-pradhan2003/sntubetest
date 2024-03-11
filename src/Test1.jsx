import React from 'react'
import { useLocation } from 'react-router-dom';

function Test1() {
  const { state } = useLocation();
  let receivedData = state && state?.data;
  // console.log(state)
  // console.log(receivedData)
  console.log(receivedData)

  return (
    <div>
      <h2>Component B</h2>
      <h2>The receiveddata are {receivedData?.key1} and  {receivedData?.key2}.</h2>
    </div>
  )
}

export default Test1
