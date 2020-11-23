
let allAudios = document.querySelectorAll('audio');

// Stop all audio
function stopAllAudio(){
	allAudios.forEach(function(audio){
    audio.pause();  
  });
}


// Reset all button to play status
function resetAllButton(){
  document.querySelectorAll('#button').forEach(item => {
    item.innerHTML = "Play";
  })
}


// Listen for all buttons and play or pause
document.querySelectorAll('#button').forEach(item => {
  item.addEventListener('click', event => {
   
    let audio = item.closest(".song").lastElementChild;
  
    if(audio.paused){
      
      stopAllAudio();
      resetAllButton();
  
      audio.play();
      item.innerHTML = "Pause";
    } else {
      audio.pause();
      item.innerHTML = "Play";
    }
  })
})

// Search
function search(input) {
  let songs = document.querySelectorAll(".song");
  
  for (let song of songs) {
    if (song.textContent.toLowerCase().includes(input.toLowerCase())) {
      song.style.display = "flex";
    }else{
      song.style.display = "none";
    }
  }
}  