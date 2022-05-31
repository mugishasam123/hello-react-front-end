import Axios from 'axios';

const GET_GREETING = 'hello-rails-react/greetings/GET_GREETING';

const initialState = [];

const getGreetings = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const getGreetingsFromApi = () => async (dispatch) => {
  const result = await Axios.get('http://localhost:3001/api/v1/messages', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
  const req = result.data.greetings.greeting;
  console.log(req);
  dispatch(getGreetings(req));
};

const reducerGreetings = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducerGreetings;
