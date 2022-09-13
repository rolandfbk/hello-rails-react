const SHOW_GREETING   = 'greeting/SHOW_GREETING';
const GET_GREETING_FROM_API = 'greeting/GET_GREETING_FROM_API';

export const getGreetingFromApi = async (dispatch) => {
  try {
    const request = new Request('http://localhost:3000/api/v1/messages');
    const response = await fetch(request);
    const res = await response.json();
    
    dispatch({
      type: GET_GREETING_FROM_API,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
}

const greetingReducer = (state = [], action) => {

  switch (action.type) {
    case GET_GREETING_FROM_API: return action.payload;
    default: return state;
  }
}

export default greetingReducer;