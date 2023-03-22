// JavaScript Document


var videoSource = new Array();
videoSource[0] = 'common/videos/video.mp4';
videoSource[1] = 'common/videos/video1.mp4';
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