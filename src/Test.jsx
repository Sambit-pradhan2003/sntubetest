import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
     state={{data:dataToSend}}
    >
      Go to Component B
    </Link>
    
  );
}

export default Test;
