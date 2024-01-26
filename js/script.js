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
// media selector to make mobile ui overlay not push

function preview() {
  // document.getElementById("wrapper").style.backgroundColor = "rgba(0, 0, 0, .7)"
  document.getElementById("previewSec").style.width = "90vw"
  document.getElementById("sidenav").style.width = "10vw"
  document.getElementById("closeBtn").style.opacity = "0"
  document.getElementById("wrapper").style.marginLeft = "10vw"
}

function closePreview() {
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("closeBtn").style.opacity = "100%"
  
}

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


const pageFlip = new St.PageFlip(document.getElementById('book'), 
    {
        width: 1100, // required parameter - base page width
        height: 600,  // required parameter - base page height
        showCover: true,
        size:("stretch"),
        minWidth: 600,
        maxWidth: 1100,
        minHeight: 300,
        maxHeight: 800,
        usePortrait: false

    }
);

pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

const pageFlips = new St.PageFlip(document.getElementById('book2'), 
    {
        width: 1100, // required parameter - base page width
        height: 600,  // required parameter - base page height
        showCover: true,
        size:("stretch"),
        minWidth: 600,
        maxWidth: 1100,
        minHeight: 300,
        maxHeight: 800,
        usePortrait: false

    }
);

pageFlips.loadFromHTML(document.querySelectorAll('.my-pages'));
// media selector to make mobile ui dissappear
// function viewTop() {
//   topSec.scrollIntoView()
//   document.getElementById("wrapper").style.marginLeft = "0"
// }