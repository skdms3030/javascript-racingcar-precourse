import { getWinner } from './getWinner.js';

function restart() {
    const body = document.querySelector('body');
    body.addEventListener('click', ({ target }) => {
        if (target.id === 'game-reset-button') {
            location.reload();
        }
    })
}

export function getGameResult(CARS) {
    let winner = getWinner(CARS);
    winner = winner.join(',');

    document.querySelector('body').innerHTML += `<span id="racing-winners">
                                                    <p>최종 우승자 : ${winner}</p>
                                                    <button id='game-reset-button'>재시작</button>
                                                </span>`;

    restart();
}
