window.addEventListener('DOMContentLoaded', () => {
const columns = Array.from(document.querySelectorAll('.column'));
const game2 = document.querySelector('.game2');
const resetButton = document.querySelector('#reset');
const game4 = document.querySelector('.game4');

let board=['','','','','','','',''];
let current='X';
let ongoinggame=true;

const playerx='playerx';
const playero='playero';
const draw='draw';

const winningarea=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
column,forEach(column) => {
    column.addEventListener("click",()=>){
        console.log("")
    };
};
});