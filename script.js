const Xclass = "x"
const Oclass = "o"
const allCell = document.querySelectorAll("[data-cell]")
const spaces= document.getElementById('spaces')
let Oturn 
allCell.forEach(cell =>{
    cell.addEventListener('click',handleClick,{once : true})

})
function handleClick (e){
    const cell = e.target
    const currentClass = Oturn ? Oclass : Xclass
    //// place mark
    placeMark(cell, currentClass)
    swap()
    resetSpaces()
    // console.log('clicked')
    
}
const placeMark = (cell, currentClass) =>{
    cell.classList.add(currentClass)

} 
const swap = () =>{ 
    Oturn = !Oturn
}
const resetSpaces =() =>{
    spaces.classList.remove(Xclass)
    spaces.classList.remove(Oclass)
    if(Oturn){
        spaces.classList.add(Oclass)
    }else{
        spaces.classList.add(Xclass)

    }
}