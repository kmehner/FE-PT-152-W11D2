async function postData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // converts object into a string
    body: JSON.stringify({
      title: "Why hello there",
      body: "Obi Wan speaks",
      userId: 2
    })
  });

  let data = response.json(); 
  return data; 
}


async function startCall() {

  const serverResponse = await postData(); 

  document.getElementById("userInfo").innerHTML = `${serverResponse.title}<br>
                                                   ${serverResponse.id}<br>
                                                   ${serverResponse.body}<br>
                                                   ${serverResponse.userId}`;

  console.log(serverResponse);                                                 
}

startCall();

// Create a user post 
// Send it to backend to get added to the database (POST)
// It gets returned to us from backend (we know because it got an ID of 101)
// Save that data as json and update the html 