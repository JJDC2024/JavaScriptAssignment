const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const orderImages = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = ["Big eyeball kid", "Cooled lava", "A group of purple and white flowers", "Ancient Eygptian painting", "Brown butterfly"];

/* Looping through images */
for(let loopImage = 0; loopImage < orderImages.length; loopImage++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', orderImages[loopImage]);
    newImage.setAttribute('alt', altText[loopImage]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () =>
    { 
        displayedImage.setAttribute('src', orderImages[loopImage]);
        displayedImage.setAttribute('alt', altText[loopImage]);
    }
    );
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () =>
{
    const newClass = btn.getAttribute("class");
if (newClass === "dark")
{
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
}

else {
    btn.setAttribute("class" , "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}
);
