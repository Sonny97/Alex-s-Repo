window.addEventListener('load', function() {
  const btn = document.getElementById('id-btn')

  btn.addEventListener('clic', function() {
    sendRequest()
  })
})
 
function sendRequest() {
  let id = document.getElementById("userId").value
  fetch("control/UserControl.php", {
  method: 'POST',
  body: JSON.stringify({id}),
  headers:{
   'Content-Type': 'application/json'
 }
})
.then(res => console.log(res))
.catch(error => console.error('Error:', error))

}
