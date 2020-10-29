// load window:
$(document).ready(function(){
// render current User
      renderNameAndScore()
      let user = []
      fetchUserInDB()
      .then(result => user = result)
      .then(()=>
      {
      // call render -> got data here
        render(user.slice(0,5))
      // use indexOf ->rank current user
      console.log("database will : ", user)
          let rank = "not know yet";
      // find current user
          user.find(found => {
              if (found.name == localStorage.getItem("name")){
                rank= user.indexOf(found)+ 1
                document.getElementById('rank').innerHTML= rank
              }
          }

          )


        }
        )
      })



    const fetchUserInDB = async () => {
      try {
        const response = await fetch('https://memorygame-oliver-server.herokuapp.com/users')
        return await response.json()
      }catch(err){
        console.log("line 43, learderboard: ", err)
      }


    }


    const render = (users) => {
        users.map(user => {
          appendName(user.name)
          appendScore(user.score)
        })



    }

    const appendName = (name) => {
      // create table
      let user = document.createElement("li")
      let text =document.createTextNode(name)
      user.appendChild(text)
      document.getElementById("users").append(user)

    }

    const appendScore = (score) => {
      // create table
      let user = document.createElement("li")
      let text =document.createTextNode(score)
      user.appendChild(text)
      document.getElementById("score").append(user)

    }

    const renderNameAndScore = () => {
// grab value from summary.html
      document.getElementById("currentUser").innerHTML = localStorage.getItem("name")
      document.getElementById("currentScore").innerHTML = localStorage.getItem("score")

    }
