var typed = new Typed(".typing", {
strings: [" ","Web Developer","YouTuber","Bloger","Web Designer","Graphic Designer"],
typeSpeed:100,
BackSpeed:60,
loop:true
});

const nav = document.querySelector('.nav'),
navList = nav.querySelectorAll('li'),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i < totalNavList; i++) {
const a = navList[i].querySelector('a');
a.addEventListener('click',   function() {
removeBackSection();
for(let j=0; j < totalNavList; j++) {
if(navList[j].querySelector('a').classList.contains("active")) {
    addBackSection(j);
// allSection[j].classList.add("back-section");
}
navList[j].querySelector('a').classList.remove('active');
}
this.classList.add('active')
showSection(this);
if(window.innerHeight < 1200) {
asideSectionTogglerBtn()
}
})
}
function removeBackSection() {
for(let i=0; i < totalSection;i++) {
    allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
allSection[num].classList.add('back-section')
}
function showSection(element) {
    for(let i=0; i < totalSection;i++) {
    allSection[i].classList.remove("active");
    }
const target = element.getAttribute("href").split("#")[1];
document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
for(let i=0; i<totalNavList ;i++) {
navList[i].querySelector('a').classList.remove('active');
const target = element.getAttribute('href').split('#')[1];
if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
navList[i].querySelector('a').classList.add('active');
}
}
}
document.querySelector(".hire-me").addEventListener('click', function () {
const sectionIndex = this.getAttribute('data-section-index'); 
// console.log(sectionIndex);   
showSection(this);
updateNav(this);
removeBackSection();
addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),aside = document.querySelector(".aside");
navTogglerBtn.addEventListener('click', () => {
asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
aside.classList.toggle("open");
navTogglerBtn.classList.toggle("open");
for(let i=0; i < totalSection; i++) {
allSection[i].classList.toggle('open');
}
}

// 
function downland() {
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://www.pexels.com/video/road-mountains-beach-travel-4328786/", true);
xhr.responseType = 'blob'
xhr.onload = function() {
var urlCreator = window.URL || window.webkitURL;
var imageURL = urlCreator.createObjectURL(this.response);
var tag = document.createElement('a');
tag.href = imageURL;
tag.target = '_blank';
tag.downland = 'demo.mp4';
document.body.appendChild(tag);
tag.click();
document.body.removeChild(tag);
}
xhr.operror = err => {
alert('Failed to download picture')
};
xhr.send();
}