import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';

// 8:49
const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `<img src="${pin.imageUrl}">`;
  });
  util.printToDom('pins-on-board', domString);
};

const initPins = (boardId) => {
  pinsData.loadPinsForBoard(boardId)
    .then((pins) => {
      console.error('all pins', pins);
      writePins(pins);
    })
    .catch(err => console.error(err));
  // .then and .catch resolve the promise
};

export default { initPins };
