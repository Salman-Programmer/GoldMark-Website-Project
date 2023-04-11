function toggleDisplay() {
  var element = document.getElementById("signup-form");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

const li1 = document.getElementById('1');
const li2 = document.getElementById('2');
const li3 = document.getElementById('3');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

li1.addEventListener('click', () => {
  section1.style.display = 'block';
  section2.style.display = 'none';
  section3.style.display = 'none';
  document.getElementById('s1').style.color = "##175c7c";
  document.getElementById('s1').style.backgroundColor = "white";
  document.getElementById('s2').style.color = "white";
  document.getElementById('s2').style.backgroundColor = "#175c7c";
  document.getElementById('s3').style.color = "white";
  document.getElementById('s3').style.backgroundColor = "#175c7c";

});

li2.addEventListener('click', () => {
  section1.style.display = 'none';
  section3.style.display = 'none';
  section2.style.display = 'block';
  document.getElementById('s2').style.color = "#175c7c";
  document.getElementById('s2').style.backgroundColor = "white";
  document.getElementById('s3').style.color = "white";
  document.getElementById('s3').style.backgroundColor = "#175c7c";
  document.getElementById('s1').style.color = "white";
  document.getElementById('s1').style.backgroundColor = "#175c7c";
});

li3.addEventListener('click', () => {
  section1.style.display = 'none';
  section2.style.display = 'none';
  section3.style.display = 'block';
  document.getElementById('s3').style.color = "#175c7c";
  document.getElementById('s3').style.backgroundColor = "white";
  document.getElementById('s2').style.color = "white";
  document.getElementById('s2').style.backgroundColor = "#175c7c";
  document.getElementById('s1').style.color = "white";
  document.getElementById('s1').style.backgroundColor = "#175c7c";
});







