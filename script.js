 function showMessage(){
  alert("Hello 👋 Welcome!");
}

// scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 100){
      sec.classList.add("show");
    }
  });
});

// progress bar + top button
window.onscroll = function(){
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;

  document.getElementById("progress").style.width = scrolled + "%";

  let btn = document.getElementById("topBtn");
  btn.style.display = winScroll > 200 ? "block" : "none";
};

function topFunction(){
  window.scrollTo({top:0, behavior:"smooth"});
}

// typing effect
let text = "Content Creator | Student | Web Learner";
let i = 0;

function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();                             