import axios from 'axios';

// the loadBoards fxn is the axios call that returns promise
const loadBoards = () => axios.get('../db/boards.json');

export default { loadBoards };
