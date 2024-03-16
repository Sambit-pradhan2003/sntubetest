import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'

function Test() {


  const dataToSend = {
    key1: 'value1',
    key2: 'value2',
    // Add other data properties as needed
  };
  
  const x =useSelector(state=>state.status)
  
  const y=useSelector(state=>state. userdata)
  console.log("at x,",x)
  console.log("at y",y)

  return (
    <>
    <Link 

    to='/test1'
     state={{data:dataToSend}}
    >
      Go to Component B

    </Link>
    
    </>

  );
}
export default Test;
