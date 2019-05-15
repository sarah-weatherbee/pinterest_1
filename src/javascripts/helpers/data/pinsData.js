import axios from 'axios';

// 8:12
const loadPinsForBoard = boardId => new Promise((resolve, reject) => { // the constructor
  // (resolve representst success, it tells what data comes back if it works,
  // reject represents failure)
  // the code below resolves the axios promise
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      // 8:20 filter the pins
      console.error('boardId inside pinsData', boardId);
      const matchingPins = allPins.filter(pin => pin.boardId === boardId);
      // 8:20 resolve the filtered pins
      resolve(matchingPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoard };
