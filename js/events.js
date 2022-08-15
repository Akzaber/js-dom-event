// 1st System......
// <button onclick="console.log(15)">Click Me</button>
// 2nd System......IMPORTANT(We will use it some-Time)
function redColor(){
  document.body.style.backgroundColor = 'red';
}
// 3rd System.......
const violetColor = document.getElementById('violet-color');
violetColor.onclick = makeViolet;

function makeViolet(){
  document.body.style.backgroundColor = 'violet';
}
// Recap 3rd System.......
const colorChange = document.getElementById('click-pink')
colorChange.onclick = makePink;

function makePink(){
  document.body.style.backgroundColor = 'pink';
}
//Another 3rd System 
const clickLightblue = document.getElementById('click-lightblue');
clickLightblue.onclick = function makeLightblue(){
  document.body.style.backgroundColor = 'lightblue'
}

// 4th System .......
const clickSeagreen = document.getElementById('click-seagreen');
   clickSeagreen.addEventListener('click',makeSeagreen)

   function makeSeagreen(){
    document.body.style.backgroundColor = 'seagreen';
   }

  // 4th System Another ........
  const clickSkyblue = document.getElementById('click-skyblue');
   clickSkyblue.addEventListener('click', function makeSkyblue(){
    document.body.style.backgroundColor = 'skyblue'
   })

  //  4th Final System.......IMPORTANT(We will use this many Time)
  document.getElementById('click-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
   })


  
  