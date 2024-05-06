const text =
" Every passing day without you feels like a piece of me is missing. Your smile, your warmth, your presence—these are the things I find myself longing for more than ever. Life seems a little less vibrant without you by my side. There's a void in my heart that only your love can fill. Since the day we met, you've brought so much joy into my life. From our first conversations to the moments we spend together, each memory is treasured in my heart. Every laugh shared and every glance exchanged has only deepened my affection for you. Though our time together has been relatively short, it feels like I've known you forever. There's a connection between us that's undeniable, a feeling of being completely at ease in your presence. Let's promise to nurture this bond we share and cherish every moment together. I eagerly anticipate the days ahead when we can create new memories, whether it's exploring new places or simply enjoying each other's company. Until then, I'll hold onto the moments we've shared and keep you close in my thoughts. With each passing day, my love for you grows stronger. I can't wait to see where this journey takes us and to continue building our relationship together. Until we meet again, know that you are deeply missed and loved beyond measure. Forever yours.";


const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
