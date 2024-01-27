let topSec = document.getElementById("topSec")
let internSec = document.getElementById("internSec")
let printSec = document.getElementById("printSec")
let posterSec = document.getElementById("posterSec")
let illusSec = document.getElementById("illusSec")

function openNav() {
  document.getElementById("sidenav").style.width = "10vw"
  document.getElementById("wrapper").style.marginLeft = "10vw"
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0"
  document.getElementById("wrapper").style.marginLeft = "0"
}

// ~500px media selector overlay navbar not push margins
// media selector to make mobile navbar overlay dissappear
// function viewTop() {
//   topSec.scrollIntoView()
//   document.getElementById("wrapper").style.marginLeft = "0"
// }

function viewTop() {
  topSec.scrollIntoView()
}
function viewinternSec() {
  internSec.scrollIntoView()
}
function viewprintSec() {
  printSec.scrollIntoView()
}
function viewposterSec() {
  posterSec.scrollIntoView()
}
function viewillusSec() {
  illusSec.scrollIntoView()
}

//  preview sec

function preview() {
  // document.getElementById("wrapper").style.backgroundColor = "rgba(0, 0, 0, .7)"
  document.getElementById("previewSec").style.width = "90vw"
  document.getElementById("sidenav").style.width = "10vw"
  document.getElementById("closeBtn").style.opacity = "0"
  document.getElementById("wrapper").style.marginLeft = "10vw"
  var ovr = document.querySelectorAll("#overlay")
  for (var i = 0; i < ovr.length; i++) {
    var currOvr = ovr[i]
    currOvr.style.display = "none"
  }

}

function closePreview() {
  var lastLink = document.getElementById
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("closeBtn").style.opacity = "100%"
  document.getElementById("overlay").style.display = "block"
  var ovr = document.querySelectorAll("#overlay")
  for (var i = 0; i < ovr.length; i++) {
    var currOvr = ovr[i]
    currOvr.style.display = "block"
  }
}

// book section

const pageFlip = new St.PageFlip(document.getElementById('coastalbook'), 
    {
        width: 645, // required parameter - base page width
        height: 500,  // required parameter - base page height
        minWidth: 645,
        minHeight: 500,
        maxWidth: 645,
        maxHeight: 500,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

