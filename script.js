const slideshow = ["images/0.jpg","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg"];
var slideshowIndex = 0;
var source;

function view(image) {
    source = image.src;
    document.getElementById("bigpic").src = source;
    slideshowIndex = source.charAt(source.length-5);
    document.getElementById("bigpic").style.display = "block";
    document.getElementById("next").style.display = "block";
    document.getElementById("previous").style.display = "block";
    document.getElementById("x").style.display = "block";
}

function next() {
    if (slideshowIndex>10) {
        slideshowIndex = 0;
    }
    else {
        slideshowIndex++;
    }
    document.getElementById("bigpic").src = slideshow[slideshowIndex];
} 

function previous() {
    if (slideshowIndex>0) {
        slideshowIndex--;
    }
    else {
        slideshowIndex = 11;
    }
    document.getElementById("bigpic").src = slideshow[slideshowIndex];
}

function x() {
    document.getElementById("bigpic").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("previous").style.display = "none";
    document.getElementById("x").style.display = "none";
}