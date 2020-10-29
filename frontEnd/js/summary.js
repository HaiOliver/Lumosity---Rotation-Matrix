$(document).ready(function(){

      showScore();

 })

// restart button
const restart = ()=>{
  window.location.href = "./index.html";
}


// submit button
const submit = () => {

  // grab value
  let validate = document.getElementById('name').validity.valid
  if(!validate){
    alert("Username cannot empty !!!")

  }else{
    let username = document.getElementById("name").value
  let getScore = document.getElementById("score").value
  // post for fetch request


  const data = { name: username, score: getScore };


  // POST request
  postRequest(data)
    .then(response => {

      console.log('Success:', response);
      window.location.href = "./leaderboard.html";
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  // setname and score to redirect page
  setNameAndScore()
  // call loading
  loading()




}
  }

const postRequest = async (data) => {

  let response = await fetch('https://memorygame-oliver-server.herokuapp.com/user', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  let getJson = await (response => response.json())

  return getJson
}


  const showScore = ()=> {
      // grab value from index.html
      document.getElementById("score").innerHTML = localStorage.getItem("score")
      // assign value
      document.getElementById("score").value= localStorage.getItem("score")
  }

  const setNameAndScore = () => {

    localStorage.setItem("score", document.getElementById('score').value);
    localStorage.setItem("name", document.getElementById('name').value);


  }

  const loading = () => {

let load = document.createElement('img')
load.src = 'https://hubbravissimo.com/wp-content/uploads/2019/07/fff16-862c4e_80c174747b704e778f110260a995cc97mv2.gif'
document.getElementById('loading').appendChild(load)
      }
