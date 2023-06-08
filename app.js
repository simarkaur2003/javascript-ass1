// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
//var textToSpeak = 'This is the text string that you will generate with your script';
//var speakButton = document.querySelector('button');
//five arrays with items
var button1=['rat','is','running','behind','the cat','for racing'];
var button2=['ate','danced','doing','sang','cut','did'];
var button3=['good','bad','beautiful','awesome','nice'];
var button4=['mop','top','dog','taj','iraq','red'];
var button5=['Delhi','Brampton','Hotel','Toronto','trip'];
//buttons 
var sentence_button=document.getElementById('button1');
var verb_button=document.getElementById('button2');
var adjective_button=document.getElementById('button3');
var noun_button=document.getElementById('button4');
var places_button=document.getElementById('button5');
var random_button=document.getElementById('random');
var reset_button=document.getElementById('reset');

var text=document.getElementById('text');


/* Functions
-------------------------------------------------- */

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

sentence_button.onclick=function(){
	var about= button1[Math.floor(Math.random() * button1.length)];
  speakNow(about);
  text.textContent=about;
}
verb_button.onclick=function(){
	var about= button2[Math.floor(Math.random() * button2.length)];
  speakNow(about);
  text.textContent=about;
}
adjective_button.onclick=function(){
	var about= button3[Math.floor(Math.random() * button3.length)];
  speakNow(about);
  text.textContent=about;
}
noun_button.onclick=function(){
	var about= button4[Math.floor(Math.random() * button4.length)];
  speakNow(about);
  text.textContent=about;
}
places_button.onclick=function(){
	var about= button5[Math.floor(Math.random() * button5.length)];
  speakNow(about);
  text.textContent=about;
}


random_button.onclick=function(){
	var sen=[button1[Math.floor(Math.random() * button1.length)],button2[Math.floor(Math.random() * 
		button2.length)],button3[Math.floor(Math.random() * button3.length)],button4[Math.floor(Math.random() * 
			button4.length)],button5[Math.floor(Math.random() * button5.length)]];

speakNow(sen);
text.text=sen.join(' ');

reset_button.onclick=function(){
	speakNow(sen);
}
		}