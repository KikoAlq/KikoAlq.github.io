// navigation

let topSec = document.getElementById("topSec")
let internSec = document.getElementById("internSec")
let printSec = document.getElementById("printSec")
let posterSec = document.getElementById("posterSec")
let illusSec = document.getElementById("illusSec")
let internPrev = document.getElementById("internPrev")
let printPrev = document.getElementById("printPrev")
let posterPrev = document.getElementById("posterPrev")
let illusPrev = document.getElementById("illusPrev")

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
  topSec.scrollIntoView({behavior: "smooth"})
}

function viewinternSec() {
  internSec.scrollIntoView({behavior: "smooth"})

}
function viewinternPrev() {
  internPrev.scrollIntoView({behavior: "smooth"})
}

function viewprintSec() {
  printSec.scrollIntoView({behavior: "smooth"})
}
function viewprintPrev() {
  printPrev.scrollIntoView({behavior: "smooth"})
}

function viewposterSec() {
  posterSec.scrollIntoView({behavior: "smooth"})
}
function viewposterPrev() {
  posterPrev.scrollIntoView({behavior: "smooth"})
}

function viewillusSec() {
  illusSec.scrollIntoView({behavior: "smooth"})
}
function viewillusPrev() {
  illusPrev.scrollIntoView({behavior: "smooth"})
}

//  preview

function preview(lastClicked) {
  document.getElementById("previewSec").style.width = "90vw"
  document.getElementById("sidenav").style.width = "10vw"
  document.getElementById("closeBtn").style.opacity = "0"
  document.getElementById("wrapper").style.marginLeft = "10vw"
  document.getElementById("wrapper").style.display = "none"
  document.getElementById("btns1").style.display = "none"
  document.getElementById("btns2").style.display = "flex"
  var ovr = document.querySelectorAll("#overlay")
  for (var i = 0; i < ovr.length; i++) {
    var currOvr = ovr[i]
    currOvr.style.display = "none"
  } 
  console.log(lastClicked)
  switch(lastClicked) {
    case lastClicked = "internSec":
      internPrev.scrollIntoView({behavior: "instant"})
      break;
    case lastClicked = "printSec":
      printPrev.scrollIntoView({behavior: "instant"})
      break;
    case lastClicked = "posterSec":
      posterPrev.scrollIntoView({behavior: "instant"})
      break;
    case lastClicked = "illusSec":
      illusPrev.scrollIntoView({behavior: "instant"})
      break;
  }
  linkTab = document.getElementById(lastClicked)
}

function closePreview() {
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("closeBtn").style.opacity = "100%"
  document.getElementById("wrapper").style.display = "block"
  document.getElementById("btns1").style.display = "flex"
  document.getElementById("btns2").style.display = "none"
  var ovr = document.querySelectorAll("#overlay")
  for (var i = 0; i < ovr.length; i++) {
    var currOvr = ovr[i]
    currOvr.style.display = "block"
  }
  linkTab.scrollIntoView()
}

// books

// coastal

const pageFlip = new St.PageFlip(document.getElementById('coastalBook'), 
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

// wanted

const wantedMag = new St.PageFlip(document.getElementById('wantedBook'), 
    {
        width: 517, // required parameter - base page width
        height: 800,  // required parameter - base page height
        minWidth: 517,
        minHeight: 800,
        maxWidth: 517,
        maxHeight: 800,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

wantedMag.loadFromHTML(document.querySelectorAll('.wanted-page'));

// welcome weekend

const wwPdam = new St.PageFlip(document.getElementById('WW2018'), 
    {
        width: 658, // required parameter - base page width
        height: 800,  // required parameter - base page height
        minWidth: 658,
        minHeight: 800,
        maxWidth: 658,
        maxHeight: 800,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

wwPdam.loadFromHTML(document.querySelectorAll('.welcome-page'));

// vegas night

const vegasStr = new St.PageFlip(document.getElementById('vegasStr'), 
    {
        width: 517, // required parameter - base page width
        height: 800,  // required parameter - base page height
        minWidth: 517,
        minHeight: 800,
        maxWidth: 517,
        maxHeight: 800,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

vegasStr.loadFromHTML(document.querySelectorAll('.vegas-page'));

// Library Banners

const libraryBan = new St.PageFlip(document.getElementById('libraryBan'), 
    {
        width: 517, // required parameter - base page width
        height: 800,  // required parameter - base page height
        minWidth: 517,
        minHeight: 800,
        maxWidth: 517,
        maxHeight: 800,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

libraryBan.loadFromHTML(document.querySelectorAll('.banner-page'));