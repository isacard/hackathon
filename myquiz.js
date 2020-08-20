
//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var spongebobScore = 0;
var patrickScore = 0;
var planktonScore = 0;
var garyScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a4.addEventListener("click", spongebob);
q2a4.addEventListener("click", spongebob);
q3a1.addEventListener("click", spongebob);
q4a2.addEventListener("click", spongebob);

q1a2.addEventListener("click", patrick);
q2a1.addEventListener("click", patrick);
q3a3.addEventListener("click", patrick);
q4a1.addEventListener("click", patrick);

q1a3.addEventListener("click", plankton);
q2a3.addEventListener("click", plankton);
q3a4.addEventListener("click", plankton);
q4a3.addEventListener("click", plankton);

q1a1.addEventListener("click", gary);
q2a2.addEventListener("click", gary);
q3a2.addEventListener("click", gary);
q4a4.addEventListener("click", gary);

//#TODO: Define quiz functions here
function spongebob() {
  spongebobScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function patrick() {
  patrickScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function plankton() {
  planktonScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function gary() {
  garyScore += 1;
  questionCount += 1;
  if (questionCount >= 4) {
    updateResult();
  }
}

function updateResult() {
  if (spongebobScore >= 3) {
    result.innerHTML = "Spongebob";
    result.appendChild(document.createElement('img')).src = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/200px-SpongeBob_SquarePants_character.svg.png';
    result.appendChild(document.createElement('p')).innerHTML = "The main protagonist of the SpongeBob SquarePants series. He has a knack for getting into trouble, and he is known for his optimistic and child-like behavior. He’s a very outgoing and friendly sponge, always willing to lend a helping hand to everybody and anybody. However, SpongeBob is rather clueless when it comes to danger, and though he is quite heroic, he is a bit too naive for his own good. He trusts others very easily and he is a purely innocent fellow. SpongeBob has several awesome qualities to him, such as his loyalty, positivity, dedication, and more. It’s great to be similar to this particular yellow sponge.";
  } else if (patrickScore >= 3) {
    result.innerHTML = "Patrick";
    result.appendChild(document.createElement('img')).src = "data:image/png;base64,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";
    result.appendChild(document.createElement('p')).innerHTML = "Ahhh, we all know Patrick Star. The airhead, hungry starfish of the show, the dumb and funny one, the character who loves eating. Patrick is known for being quite dimwitted and slow. But don’t get him wrong - Patrick may lack common sense, but he is smart in his own ways at times, even if he isn’t being clever intentionally. If you are similar to Patrick, then that means you might be reckless and dense sometimes, but you are intelligent in your own unique ways.";
  }else if (planktonScore >= 3) {
    result.innerHTML = "Plankton";
    result.appendChild(document.createElement('img')).src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3ZRjd5PWQfL731hT9Y4HYTOPjzZiIaCBxsD8p7laHlE4MEUg%3Ahttps%3A%2F%2Fvignette.wikia.nocookie.net%2Fheroes-and-villians%2Fimages%2F2%2F29%2FFlat%252C1000x1000%252C075%252Cf.u5.jpg%2Frevision%2Flatest%2Ftop-crop%2Fwidth%2F360%2Fheight%2F450%3Fcb%3D20180319193703&usqp=CAU';
    result.appendChild(document.createElement('p')).innerHTML = "Plankton is known for being the evil and power-hungry character of the SpongeBob SquarePants series. Plankton only has one goal and life objective in mind: Obtaining the Krabby Patty secret formula which causes Mr. Krabs out of business. He is constantly attempting to steal the Krabby Patty secret formula, and he repeatedly fails each time. Plankton also expresses his deep hate towards Mr. Krabs, a cliche case of frenemies (first friends, then enemies). Plankton is extremely goal-oriented, and he sorts out his priorities to make sure nothing stands in his way. Although his schemes never manage to work successfully, they are well-thought-out and designed rather thoroughly, even if there are always some aspects he seems to miss. If you are similar to Plankton, it may not be because you are a villain but because you are remarkably passionate about your goals and will not give up even when you are knocked down repeatedly.";
    style.height = '100px'
    style.width = '100px'
  } else if (garyScore >= 3) {
    result.innerHTML = "Gary";
    result.appendChild(document.createElement('img')).src = 'data:image/jpeg;base64,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';
    result.appendChild(document.createElement('p')).innerHTML = "Gary is not your typical underwater house pet. He is quite an intellectual, spending most of his time reading and entertaining himself. Gary is rather mature and is known to love books and more educational stuff. He’s a major introvert, but Gary is also ridiculously stubborn. Once his mind is set on something, it is very difficult to persuade him otherwise. Just like how he refuses to bathe until he is forced into it. Even then, Gary will put a heck of a fight. If you are similar to Gary, then you may be a very stubborn but intelligent person.";
    style.height = '100px'
    style.width = '100px'
  } else {
    result.innerHTML = "Hmm.. Try Again.";
  }
}

//var spongebobImg = document.getElementById('spongebobImgId');
//if(songebobImg && spongebobImg.style) {
    //spongebobImg.style.height = '100px';
    //spongebobImg.style.width = '200px';
//

