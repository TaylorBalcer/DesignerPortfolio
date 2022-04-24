/* JavaScript */

//make short var reference to the audio player:

let audioElement = document.querySelectorAll("audio")[3];


//Array sotring the track titles
let titles = [
    "Walking Through the City",
    "Taking the SkyTrain",
    "Traveling on the Ferry"

];

let soundPlay =[
    "audio/sunrisemarket_mixdown.mp3",
    "audio/trainsound_mixdown.mp3",
    "audio/burrardinlet_mixdown.mp3",
  ];


let whichTrack= 0;
let whichSound = 0;
document.querySelector("#title_text").innerHTML = titles[whichTrack];

const audioNext = () => {
    whichTrack = (whichTrack + 1 > titles.length - 1)? 0 : whichTrack + 1;
    
    document.querySelector("#title_text").innerHTML = titles[whichTrack];
  
  
   whichSound = (whichSound + 1 > soundPlay.length - 1) ? 0 : whichSound + 1;
   audioElement.src = soundPlay[whichTrack]; 
  
   document.querySelectorAll("audio")[3].load();
  document.querySelectorAll("audio")[3].play();
  }
  document.querySelector("#next_btn").addEventListener("click", audioNext);

// const audioNext = () => {
//     whichTrack++;
//     if (whichTrack > titles.length -1) whichTrack = 0;
//     document.querySelector("#title_text").innerHTML = titles[whichTrack];

// }
document.querySelector("#next_btn").addEventListener("click", audioNext);

const audioPlay= () => {
    //alert("audioPlay");
    audioElement.play();
}

//Event listener: clicking the button excutes a function
document.querySelector("#play_btn").addEventListener("click", audioPlay);



const audioPause= () => {
    //alert("audioPause");
    audioElement.pause();
}

//Event listener: clicking the button excutes a function
document.querySelector("#pause_btn").addEventListener("click", audioPause);



