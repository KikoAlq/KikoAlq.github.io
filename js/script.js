// navigation
let linkTab = document.getElementById("topSec")

let topSec = document.getElementById("topSec")
let internSec = document.getElementById("internSec")
let printSec = document.getElementById("printSec")
let posterSec = document.getElementById("posterSec")
let illusSec = document.getElementById("illusSec")
let internPrev = document.getElementById("internPrev")
let printPrev = document.getElementById("printPrev")
let posterPrev = document.getElementById("posterPrev")
let illusPrev = document.getElementById("illusPrev")
const mobileQuery = window.matchMedia("(max-width: 1170px)")
const coastalQuery = window.matchMedia("(max-width: 1800px)")

// function openNav() {
//   document.getElementById("sidenav").style.width = "10vw"
//   document.getElementById("wrapper").style.marginLeft = "10vw"
// }

// function closeNav() {
//   document.getElementById("sidenav").style.width = "0"
//   document.getElementById("wrapper").style.marginLeft = "0"
// }

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
function viewprintSec() {
  printSec.scrollIntoView({behavior: "smooth"})
}
function viewposterSec() {
  posterSec.scrollIntoView({behavior: "smooth"})
}
function viewillusSec() {
  illusSec.scrollIntoView({behavior: "smooth"})
}


function viewinternPrev() {
  internPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "100%"
  document.getElementById("previewPrt").style.width = "0"
  document.getElementById("previewPos").style.width = "0"
  document.getElementById("previewIll").style.width = "0"
}
function viewposterPrev() {
  posterPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("previewPrt").style.width = "0"
  document.getElementById("previewPos").style.width = "100%"
  document.getElementById("previewIll").style.width = "0"
}
function viewprintPrev() {
  printPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("previewPrt").style.width = "100%"
  document.getElementById("previewPos").style.width = "0"
  document.getElementById("previewIll").style.width = "0"
}
function viewillusPrev() {
  illusPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("previewPrt").style.width = "0"
  document.getElementById("previewPos").style.width = "0"
  document.getElementById("previewIll").style.width = "100%"
}

//  preview

function preview(lastClicked) {
  // document.getElementById("wrapper").style.marginLeft = "10vw"
  document.getElementById("wrapper").style.display = "none"
  // document.getElementById("btns1").style.display = "none"
  // document.getElementById("btns2").style.display = "flex"
  // document.getElementById("sidenav").style.backgroundColor = "rgb(69,69,69)"
  var ovr = document.querySelectorAll("#overlay")
  for (var i = 0; i < ovr.length; i++) {
    var currOvr = ovr[i]
    currOvr.style.display = "none"
  }
  switch(lastClicked) {
    case lastClicked = "internSec":
      // document.getElementById("previewSec").style.width = "90vw"
      viewinternPrev()
      break;
    case lastClicked = "printSec":
      // document.getElementById("previewPrt").style.width = "90vw"
      viewprintPrev()
      break;
    case lastClicked = "posterSec":
      // document.getElementById("previewPos").style.width = "90vw"
      viewposterPrev()
      break;
    case lastClicked = "illusSec":
      // document.getElementById("previewIll").style.width = "90vw"
      viewillusPrev()
      break;
  }
  linkTab = document.getElementById(lastClicked)
}



function closePreview(x) {
  if (x.matches) {
    document.getElementById("previewSec").style.width = "0"
    document.getElementById("previewPrt").style.width = "0"
    document.getElementById("previewPos").style.width = "0"
    document.getElementById("previewIll").style.width = "0"
    document.getElementById("wrapper").style.display = "block"
    internSec.scrollIntoView()
  } else {
    document.getElementById("previewSec").style.width = "0"
    document.getElementById("previewPrt").style.width = "0"
    document.getElementById("previewPos").style.width = "0"
    document.getElementById("previewIll").style.width = "0"
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
}

closePreview(mobileQuery);

mobileQuery.addEventListener("change", function() {
  closePreview(mobileQuery)
})



// books

// coastal

function coastalMedia(x) {
  if (x.matches) {
    pageFlip = new St.PageFlip(document.getElementById('coastalBook'), 
      {
          width: 750, // required parameter - base page width
          height: 581,  // required parameter - base page height
          minWidth: 750,
          minHeight: 581,
          maxWidth: 750,
          maxHeight: 581,
          showCover: true,
          size:("stretch"),
          usePortrait: true
      }
    )
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
  } else {
    pageFlip = new St.PageFlip(document.getElementById('coastalBook'), 
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
    )
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
  }
}

coastalMedia(coastalQuery);

coastalQuery.addEventListener("change", function() {
  coastalMedia(coastalQuery)
})



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

function welcomeMedia(x) {
  if (x.matches) {
    wwPdam = new St.PageFlip(document.getElementById('WW2018'), 
      {
          width: 659, // required parameter - base page width
          height: 800,  // required parameter - base page height
          minWidth: 659,
          minHeight: 800,
          maxWidth: 659,
          maxHeight: 800,
          showCover: true,
          size:("stretch"),
          usePortrait: true
      }
    )
    wwPdam.loadFromHTML(document.querySelectorAll('.welcome-page'));
  } else {
    wwPdam = new St.PageFlip(document.getElementById('WW2018'), 
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
    )
    wwPdam.loadFromHTML(document.querySelectorAll('.welcome-page'));
  }
}

welcomeMedia(mobileQuery);
mobileQuery.addEventListener("change", function() {
  welcomeMedia(mobileQuery)
})

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

function bannerMedia(x) {
  if (x.matches) {
    libraryBan = new St.PageFlip(document.getElementById('libraryBan'), 
        {
            width: 428, // required parameter - base page width
            height: 1200,  // required parameter - base page height
            minWidth: 428,
            minHeight: 1200,
            showCover: true,
            size:("stretch"),
            usePortrait: true
        }
    );
    libraryBan.loadFromHTML(document.querySelectorAll('.banner-page'));
  } else {
    libraryBan = new St.PageFlip(document.getElementById('libraryBan'), 
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
  }
}

bannerMedia(mobileQuery);
mobileQuery.addEventListener("change", function() {
  bannerMedia(mobileQuery)
})

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


