// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


//Get all like buttons:
const init = () =>{
  document.querySelector('div#modal').className = 'hidden'
  
    const likeglyphs = document.querySelectorAll('.like-glyph')
    likeglyphs.forEach(glyph => {
    glyph.addEventListener('click', e => {
      let glyphicon = e.target.textContent
      if(glyphicon == EMPTY_HEART){
        mimicServerCall(e)
        try{
          e.target.textContent = FULL_HEART
          e.target.className = 'activated-heart'
        }catch(e){
          document.querySelector('div#modal').classList.remove('hidden')
        }
        
      }else{
        mimicServerCall(e)
        try{
          e.target.classList.remove('activated-heart')
          e.target.textContent = EMPTY_HEART
          
        }catch(e){
          
        }
    }

      // console.log(glyphicon == '♡')
    })
  })
}

document.addEventListener('DOMContentLoaded', init)
// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
