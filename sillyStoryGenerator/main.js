

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const storyText = ("It was 94 fahrenheit outside, so "+ insertx +" went for a walk. When they got to "+inserty+", they stared in horror for a few moments, then "+insertz+". Bob saw the whole thing, but was not surprised — "+insertx+ "weighs 300 pounds, and it was a hot day.");

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
randomValueFromArray(insertX);

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = ["spontaneously combusted", 
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    name = name.replace(customName);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(1/14) + 'stone';
    const temperature =  Math.round((32 - 32) * (5*9)) + 'centigrade';

  }

  story.textContent = story;
  story.style.visibility = 'visible';

  const newStory = storyText;
  insertx = insertx.replace(xItem);
  inserty = insertx.replace(yItem);
  insertz = insertx.replace(zItem);
  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  textContent = newStory;
}