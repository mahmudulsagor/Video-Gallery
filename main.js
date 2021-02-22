

var video_player =document.getElementById("video_player");

var my_video =document.getElementById("my_video");

function stop_video(){

  video_player.style.display ="none";
}

function play_video(file){
  my_video.src = file;
  video_player.style.display ="block";
}