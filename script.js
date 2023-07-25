const Xclass = "x";
const Oclass = "o";
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
const allCell = document.querySelectorAll("[data-cell]");
const spaces = document.getElementById("spaces");
const winnerMessageElement = document.getElementById("winner")
const restart = document.getElementById("restart");
const winnerMessage = document.querySelector('[data-winner-text]');
let Oturn;

start();
restart.addEventListener('click',start)

function start() {
  Oturn = false;
  allCell.forEach((cell) => {
    cell.classList.remove(Xclass);
    cell.classList.remove(Oclass);
    cell.removeEventListener('click',handleClick)
    cell.addEventListener("click", handleClick, { once: true });
  });
  winnerMessageElement.classList.remove("show");

//   hoverChoice();
}
function handleClick(e) {
  const cell = e.target;
  const currentClass = Oturn ? Oclass : Xclass;
  //// place mark
  placeMark(cell, currentClass);
//   check winners
if(checkWin(currentClass)){
   gameOver(false)

}else if(isDraw()){
    gameOver(true)
}else{
    swap();
    hoverChoice();

}
 
  // console.log('clicked')
}
const gameOver = (draw) =>{
    if(draw){
        winnerMessage.innerText = "is Draw!!!!"

    }else{
        winnerMessage.innerText = `${Oturn ? " O's" : "X's" } Wins`

    }
    winnerMessageElement.classList.add("show")
}
const isDraw = () =>{
    return [...allCell].every(cell =>{
        return cell.classList.contains(Xclass) ||  cell.classList.contains(Oclass) 
    })
}
const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};
const swap = () => {
  Oturn = !Oturn;
};
const hoverChoice = () => {
  spaces.classList.remove(Xclass);
  spaces.classList.remove(Oclass);
  if (Oturn) {
    spaces.classList.add(Oclass);
  } else {
    spaces.classList.add(Xclass);
  }
};
const checkWin = (currentClass) => {
    return winCombination.some(combinations =>{
        return combinations.every(index =>{
            return allCell[index].classList.contains(currentClass);
        })
    })
}
