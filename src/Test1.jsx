import {useDispatch} from "react-redux"
import { useLocation } from 'react-router-dom';
import { login as authLogin } from './feature/snslice'

function Test1() {
  const dispatch = useDispatch()
  const userdata = {
    key1: 'value11',
    key2: 'value21',
    // Add other data properties as needed
  };
   const handler=()=>{
    dispatch(authLogin(userdata))
   }
  


  const { state } = useLocation();
  let receivedData = state && state?.data;
  // console.log(state)
  // console.log(receivedData)
  // console.log(x)

  return (
    <div>
      <h2>Component B</h2>
      <h2>The receiveddata are {receivedData?.key1} and  {receivedData?.key2}.</h2>
      <button onClick={handler}>hgghg</button>
    </div>
  )
}

export default Test1
