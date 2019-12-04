function hideDiv(){
    document.getElementById('about-container').style.display = "none";
}

function showPhoto(pic){
    document.getElementById('about-container').style.display = "flex";

    picSrc = document.getElementById(pic).src;
    picText = document.getElementById(pic).alt;

    document.getElementById('about-image').src = picSrc;
    document.getElementById('about-text').innerHTML = picText;

    window.scroll(0,400);
}