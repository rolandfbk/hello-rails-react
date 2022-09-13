import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getGreetingFromApi } from '../redux/greeting/greeting'

const Greeting = () => {
  const listing = useSelector((state) => state.greetingReducer, shallowEqual);

  const result = listing[(Math.random() * listing.length) | 0];
  
  let text = '';
  if(result) {
    text = result.text;
    console.log(text);
  }

  const dispatch = useDispatch();

  const showGreeting = () => {
    getGreetingFromApi(dispatch);
  };

  return (
    <div>
      <button onClick={showGreeting}>Get a greeting</button>
      <br></br>
      <h1>{text}</h1>
    </div>
  );
};

export default Greeting;