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
  internPrev.scrollIntoView({behavior: "instant"})
}

function viewprintSec() {
  printSec.scrollIntoView({behavior: "smooth"})
}
function viewprintPrev() {
  printPrev.scrollIntoView({behavior: "instant"})
}

function viewposterSec() {
  posterSec.scrollIntoView({behavior: "smooth"})
}
function viewposterPrev() {
  posterPrev.scrollIntoView({behavior: "instant"})
}

function viewillusSec() {
  illusSec.scrollIntoView({behavior: "smooth"})
}
function viewillusPrev() {
  illusPrev.scrollIntoView({behavior: "instant"})
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
  document.getElementById("sidenav").style.backgroundColor = "rgb(69,69,69)"
  var ovr = document.querySelectorAll("#overlay")
  for (var i = 0; i < ovr.length; i++) {
    var currOvr = ovr[i]
    currOvr.style.display = "none"
  } 
  console.log(lastClicked)
  switch(lastClicked) {
    case lastClicked = "internSec":
      viewinternPrev()
      break;
    case lastClicked = "printSec":
      viewprintPrev()
      break;
    case lastClicked = "posterSec":
      posterPrev.scrollIntoView()
      break;
    case lastClicked = "illusSec":
      illusPrev.scrollIntoView()
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
  document.getElementById("sidenav").style.backgroundColor = "#111"
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
        width: 388, // required parameter - base page width
        height: 600,  // required parameter - base page height
        minWidth: 388,
        minHeight: 600,
        maxWidth: 388,
        maxHeight: 600,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

wantedMag.loadFromHTML(document.querySelectorAll('.wanted-page'));

// welcome weekend

const wwPdam = new St.PageFlip(document.getElementById('WW2018'), 
    {
        width: 494, // required parameter - base page width
        height: 600,  // required parameter - base page height
        minWidth: 494,
        minHeight: 600,
        maxWidth: 494,
        maxHeight: 600,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

wwPdam.loadFromHTML(document.querySelectorAll('.welcome-page'));

// vegas night

const vegasStr = new St.PageFlip(document.getElementById('vegasStr'), 
    {
      width: 388, // required parameter - base page width
      height: 600,  // required parameter - base page height
      minWidth: 388,
      minHeight: 600,
      maxWidth: 388,
      maxHeight: 600,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

vegasStr.loadFromHTML(document.querySelectorAll('.vegas-page'));

// Library Banners

const libraryBan = new St.PageFlip(document.getElementById('libraryBan'), 
    {
        width: 214, // required parameter - base page width
        height: 600,  // required parameter - base page height
        minWidth: 214,
        minHeight: 600,
        maxWidth: 214,
        maxHeight: 600,
        showCover: true,
        size:("stretch"),
        usePortrait: false
    }
);

libraryBan.loadFromHTML(document.querySelectorAll('.banner-page'));

// LOKO Snapchat Filters

const lokoFilter = new St.PageFlip(document.getElementById('lokoFilter'), 
    {
        width: 400, // required parameter - base page width
        height: 800,  // required parameter - base page height
        minWidth: 400,
        minHeight: 800,
        maxWidth: 400,
        maxHeight: 800,
        showCover: true,
        size:("stretch"),
        usePortrait: false,
        drawShadow: false,
        autoSize: false
    }
);

lokoFilter.loadFromHTML(document.querySelectorAll('.filter-page'));