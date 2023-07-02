window.onload = () => {
    console.log("BYE BYE TWITTER!")

    document.querySelector('body').innerHTML = "";
    document.title = "Grass Touching!"
    document.body.style.overflow = 'none';

    let MainText = document.createElement("div");
    document.querySelector('body').appendChild(MainText);
    MainText.innerHTML = "Time To Start Touching Grass Man!";
    MainText.style = "z-index: 225; width: 100%; height: 100%; margin: 0; padding: 0; color: White; font-size: 5rem; vertical-align: middle; display: inline-block; text-align: center; text-decoration: underline";

    document.querySelector('body').style = "background-image: url(https://media.tenor.com/VK1mwO4rTIQAAAAC/touch-grass.gif); background-size: contain; background-repeat: round; background-size: 100rem auto;"
}

