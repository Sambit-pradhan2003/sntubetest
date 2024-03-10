import { Link } from 'react-router-dom';

function Test() {
  const dataToSend = {
    key1: 'value1',
    key2: 'value2',
    // Add other data properties as needed
  };

  return (
    <Link 
      to='/test1'
      state={{ data: dataToSend }}
    >
      Click Me
    </Link>

  );
}

export default Test;
