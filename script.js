var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

     //--------------------
     // GET USER MEDIA CODE
     //--------------------
	 navigator.getUserMedia = ( navigator.getUserMedia ||
		navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia ||
		navigator.msGetUserMedia);

var video;
var webcamStream;

function startWebcam() {
if (navigator.getUserMedia) {
navigator.getUserMedia (

// constraints
{
video: true,
audio: false
},

// successCallback
function(localMediaStream) {
video = document.querySelector('video');
video.srcObject=localMediaStream;
webcamStream = localMediaStream;
},

// errorCallback
function(err) {
console.log("The following error occured: " + err);
}
);
} else {
console.log("getUserMedia not supported");
}  
}

function stopWebcam() {
webcamStream.stop();
}
//---------------------
// TAKE A SNAPSHOT CODE
//---------------------
var canvas, ctx;

function init() {
// Get the canvas and obtain a context for
// drawing in it
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
}

function snapshot() {
// Draws current image from the video element into the canvas
ctx.drawImage(video, 0,0, canvas.width, canvas.height);
}

function change_text(){
    document.getElementById("demo").textContent = "Clicked";
}

window.console = window.console || function(t) {};



function myFunction1() {
var mydiv1 = document.getElementById("myDIV_1");
var mydiv2 = document.getElementById("myDIV_2");
if (mydiv1.style.display === "none") {
	mydiv1.style.display = "flex";
	mydiv2.style.display = "none";
} else {
	mydiv1.style.display = "none";
	mydiv2.style.display = "flex";
}
  }

function openWebcam() {
	var mydiv1 = document.getElementById("myDIV_1");
	var mydiv2 = document.getElementById("myDIV_2");
	var openwebcam = document.getElementById("openwebcam");
	var openupload = document.getElementById("openupload");
	openwebcam.style.display = "none";
	openupload.style.display = "block";
	mydiv1.style.display = "none";
	mydiv2.style.display = "flex";
}

function openUpload() {
	var mydiv1 = document.getElementById("myDIV_1");
	var mydiv2 = document.getElementById("myDIV_2");
	var openwebcam = document.getElementById("openwebcam");
	var openupload= document.getElementById("openupload");
	openwebcam.style.display = "block";
	openupload.style.display = "none";
	mydiv1.style.display = "flex";
	mydiv2.style.display = "none";
}


