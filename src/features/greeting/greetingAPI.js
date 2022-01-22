const endPoint = 'http://127.0.0.1:3000/greetings'; // Need to work on this
// A mock function to mimic making an async request for data
const fetchGreeting = async () => {
  let result = '';
  await fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    });
  return result;
};

export default fetchGreeting;
