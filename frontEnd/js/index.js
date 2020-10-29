// =================================================== Browser loaded ==================================
$(document).ready(function(){
      // alert("connect")
      score = 0;
      degree = 0

      RandomArray = []

      lengthMatrix =3


      createRandomSquareNumberToPlay(lengthMatrix)
      // create custom matrix

      createMatrix(lengthMatrix)



    // change color random each turn

      document.getElementById("score").textContent =score
  })


// =========================================================================================================
// ===================================================== HELPFUL FUNCTION ====================================================
function createRandomSquareNumberToPlay (lengthMatrix) {
for(let j = 1;j<=lengthMatrix;j++){
        test = Math.floor((Math.random() * Math.pow(lengthMatrix,2)) + 1)
        RandomArray.push(test)
      }
      // filter -> unique element
      RandomArray =_.uniq(RandomArray);

}


//  function->DOM  ->  div
function createOneSquare  (id) {
      let oneDiv =document.createElement("div")
      oneDiv.id= id
      oneDiv.classList.add("square")
      oneDiv.onclick = () => {
        // check square click is right value in RandomArray
        let exitLoop = false
        RandomArray.forEach(index => {
          if(index == id){
            // score + 1
            score+= 1
            document.getElementById("score").textContent =score
// play sound for correct
            playAudio("audio-correct")
            // show color user -> right
            document.getElementById(id).style.background = "#085b8d";
            //  + 1 score
            exitLoop = true
            // check score
            checkScore()
            console.log("RIGHT square clicked")
          }
        })

        // remove this square out RandomArray
        RandomArray = RandomArray.filter(squareId => {
            return squareId !== id})
        // check if user successfull choose all square
        if (RandomArray.length == 0){
            alert(`Congratulation player. You win this level. Your Score: ${score} !! Size matrix will be increase ${lengthMatrix +1} x ${lengthMatrix+1} ! Ready to challenge your brain !!`)
            UpgradeNewLevel()

        }
        // check to exit onClick when choose right square
        if(exitLoop){
          return
        }

        score-= 1
        playAudio("audio-incorrect")
        console.log("score: ",score)
        document.getElementById(id).style.background = "red";
        document.getElementById("score").textContent =score
        // check score
        checkScore()
        return console.log("WRONG square clicked")

      }



      document.getElementById("contain-matrix").appendChild(oneDiv)
  }
// change color to hide user
function changeColorOneSquare (id,color){

          let oneSquare =  document.getElementById(id)
          oneSquare.style.background = color;
          oneSquare.style.transition = "all 1s"

     }

//  hide green color
// show green color
  function show () {
    playAudio("audio-correct")
    RandomArray.map(id => {
      // show answer for user

      return changeColorOneSquare(id,"#085b8d")})
      // after 3 seconds -> hide
      setTimeout(hide,2000);
      setTimeout(rotate,2000);

  }

  // create matrix -> 49 square
  function createMatrix(length){
   // set matrix size ->
      document.getElementById("contain-matrix").style.gridTemplateColumns = `repeat(${length}, 1fr)`

      // create 49 matrix
      for(let i = 1;i<=Math.pow(length, 2);i++){
        createOneSquare(i)
      }


  }

  // hide correct square
  function hide (){
    for(let i = 1;i<=Math.pow(lengthMatrix,2); i++){
        changeColorOneSquare(i,"#33FFBE")
    }


  }
  // need Rotate
  function rotate (){
    degree += 90

    document.getElementById("contain-matrix").style.transform ="rotate("+degree+"deg)"
    document.getElementById("contain-matrix").style.transition = "all 2s"


  }



  // check score
  function checkScore(){
    if (score <= 0){
      // show modal -> user cannot play any more
      resetScore()
      $('#scoreModal').modal("show")


    }
  }

  // var terminal
  function terminalButtonClicked(){
    $('#terminateModal').modal("show")


      }


  // reset score
  function resetScore(){
    score = 0
    document.getElementById("score").textContent = score

  }

  // exit modal
  function exitModal(id){
    $(`#${id}`).modal("hide")

    //resetScore()
    terminateGame()
  }

  function removeAllSquare(){


        for(let i = 1; i<= Math.pow(lengthMatrix,2);i++){

          let elem = document.getElementById(i);
          elem.remove();

        }



  }

  // upgrade new level:
  function UpgradeNewLevel(){
    //destroy current matrix
    removeAllSquare()
    // increase size matrix
    lengthMatrix +=1
    // create new matrix

    createMatrix(lengthMatrix)
    // show square to play with player
    createRandomSquareNumberToPlay(lengthMatrix)
    show()
  }




function terminateGame(){

  localStorage.setItem("score", score);
  window.location.href = "./summary.html";
}

function playAudio(id) {
  console.log("sound should play")
  let audio = document.getElementById(id);
  audio.play();
}