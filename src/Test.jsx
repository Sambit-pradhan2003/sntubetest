import { Link } from 'react-router-dom';

function Test() {
  const dataToSend = {
    key1: 'value1',
    key2: 'value2',
    // Add other data properties as needed
  };

  return (
    <Link 
<<<<<<< HEAD
    to='/test1'
     state={{data:dataToSend}}
    >
      Go to Component B
=======
      to='/test1'
      state={{ data: dataToSend }}
    >
      Click Me
>>>>>>> 85710c19424ef000d03aded3e942a423d79764cf
    </Link>

  );
}

export default Test;
