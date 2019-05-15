import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';
import pins from '../pins/pins';

// 7:30
const seePinDiv = (e) => {
  // 7:36
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a button', boardId);
  // 7:33
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  // 8:28
  pins.initPins(boardId);
};

// 7:28
const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

// 7:13 make domstring to display boards
const domStringBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += `<div id=${board.id} class="card board col-3">`;
    domString += `<h3 class="card-text"> ${board.name}"</h3>`;
    // 7:27 make button to display num of pins and take user to pins
    domString += '<button class="btn btn-warning see-pins">Pins</button>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardData.loadBoards()
    .then((resp) => {
      // console.error('resp', resp.data.boards);
      // the spot where we know we have data back from the promise
      domStringBuilder(resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};
export default { initBoards };
