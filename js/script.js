let topSec = document.getElementById("topSec")
let internSec = document.getElementById("internSec")
let internSecimg = document.getElementById("internSecimg")
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
  // document.getElementById("wrapper").style.background = "none"
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

// media selector to make mobile ui dissappear
// function viewTop() {
//   topSec.scrollIntoView()
//   document.getElementById("wrapper").style.marginLeft = "0"
// }