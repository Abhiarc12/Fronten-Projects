let audioElement = new Audio('');
let currentAudio = new Audio('');

var x = 0;
var prevAudioBtn = '';
var currentAudioBtn = '';

document.getElementById("home").addEventListener("click",(e)=>{
  alert("You are currently on Home Page 🤗");
});
document.getElementById("about").addEventListener("click",(e)=>{
  window.location.href = "Project-4-about-page.html";
});



for(i=0;i<document.getElementsByClassName("Play").length;i++){
  document.getElementsByClassName("Play")[i].addEventListener("click",(e)=>{
    let name = e.target.name;

    if(x===0){
      audioElement = new Audio(name);
      prevAudioBtn = e.target;
      e.target.src ="images-4/stop.png";
      currentAudioBtn.src = "images-4/play.png";
      currentAudio.pause();
      audioElement.play();
      x=x+1;
    }

    else{
        currentAudio = new Audio(name);
        currentAudioBtn = e.target;
        prevAudioBtn.src = "images-4/play.png";
        e.target.src = "images-4/stop.png";
        audioElement.pause();
        currentAudio.play();
        x=0;
    }
  });
}
audioElement = new Audio('musics-4/'+name);
