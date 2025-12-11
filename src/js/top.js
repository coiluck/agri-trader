// top.js
import { changeModal } from './modules/changeModal.js';

document.getElementById('top-game-button-new').addEventListener('click', () => {
  changeModal('game');
});
document.getElementById('top-game-button-restart').addEventListener('click', () => {
  changeModal('game');
});
document.getElementById('top-sub-button-settings').addEventListener('click', () => {
  changeModal('settings');
});
document.getElementById('top-sub-button-research').addEventListener('click', () => {
  changeModal('research');
});