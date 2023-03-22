// JavaScript Document


var videoSource = new Array();
videoSource[0] = 'https://drive.google.com/uc?export=download&id=1QYBVdaqRZ4tMruBD4EauDS-UezJLiLYf';
videoSource[1] = 'https://drive.google.com/uc?export=download&id=1a1nYXj-HiZFtPeW99p183NJUoxdxj9Dt';
//videoSource[2] = 'common/videos/cotto.mp4';
var i = 0; // define i
var videoCount = videoSource.length;

function videoPlay(videoNum) {
    document.getElementById("vid").setAttribute("src", videoSource[videoNum]);
    document.getElementById("vid").load();
    document.getElementById("vid").play();
}
document.getElementById('vid').addEventListener('ended', myHandler, false);


function myHandler() {
    i++;
    if (i == (videoCount)) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}