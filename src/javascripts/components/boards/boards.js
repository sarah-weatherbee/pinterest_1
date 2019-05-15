import boardData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

// 7:13 make domstring to display boards
const domStringBuilder = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += `<div id=${board.id} class="card board col-3">`;
    domString += `<h3 class="card-text"> ${board.name}"</h3>`;
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
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
