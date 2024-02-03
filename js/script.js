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
let prevVar = "who"

const coastalQuery = window.matchMedia("(max-width: 1800px)")

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
  document.getElementById("previewSec").style.width = "90vw"
  document.getElementById("previewPrt").style.width = "0"
  document.getElementById("previewPos").style.width = "0"
  document.getElementById("previewIll").style.width = "0"
}
function viewposterPrev() {
  posterPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("previewPrt").style.width = "0"
  document.getElementById("previewPos").style.width = "90vw"
  document.getElementById("previewIll").style.width = "0"
}
function viewprintPrev() {
  printPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("previewPrt").style.width = "90vw"
  document.getElementById("previewPos").style.width = "0"
  document.getElementById("previewIll").style.width = "0"
}
function viewillusPrev() {
  illusPrev.scrollIntoView({behavior: "instant"})
  document.getElementById("previewSec").style.width = "0"
  document.getElementById("previewPrt").style.width = "0"
  document.getElementById("previewPos").style.width = "0"
  document.getElementById("previewIll").style.width = "90vw"
}

//  preview

function preview(x) {
  if (x.matches) {
    console.log("yay!")
  } else {
    console.log("wait what")
  }
  console.log(mobileQuery)
}

// preview selector based off media width

function prevSelect(x) {
  if (x.matches) {
    prevVar = "goo"
    console.log(prevVar)
  } else {
    prevVar = "boo"
    console.log(prevVar)
  }
}

prevSelect(mobileQuery);

mobileQuery.addEventListener("change", function() {
  prevSelect(mobileQuery)
})

function preview(lastClicked) {
  if (prevVar === "goo") {
    document.getElementById("wrapper").style.display = "none"
    var ovr = document.querySelectorAll("#overlay")
    for (var i = 0; i < ovr.length; i++) {
      var currOvr = ovr[i]
      currOvr.style.display = "none"
    }
    switch(lastClicked) {
      case lastClicked = "internSec":
        viewinternPrev()
        document.getElementById("previewSec").style.width = "100%"
        break;
      case lastClicked = "printSec":
        viewprintPrev()
        document.getElementById("previewPrt").style.width = "100%"
        break;
      case lastClicked = "posterSec":
        viewposterPrev()
        document.getElementById("previewPos").style.width = "100%"
        break;
      case lastClicked = "illusSec":
        viewillusPrev()
        document.getElementById("previewIll").style.width = "100%"
        break;
    }
  } else if (prevVar === "boo") {
    document.getElementById("wrapper").style.display = "none"
    document.getElementById("btns1").style.display = "none"
    document.getElementById("btns2").style.display = "flex"
    var naveach = document.querySelectorAll(".navbtn")
    for (var i = 0; i < naveach.length; i++) {
      var currNav = naveach[i]
      currNav.style.backgroundColor = "#111111af"
    }
    var ovr = document.querySelectorAll("#overlay")
    for (var i = 0; i < ovr.length; i++) {
      var currOvr = ovr[i]
      currOvr.style.display = "none"
    }
    switch(lastClicked) {
      case lastClicked = "internSec":
        viewinternPrev()
        break;
      case lastClicked = "printSec":
        viewprintPrev()
        break;
      case lastClicked = "posterSec":
        viewposterPrev()
        break;
      case lastClicked = "illusSec":
        viewillusPrev()
        break;
    }
  } else {
    console.log("thar be somethin afoot")
  }
  linkTab = document.getElementById(lastClicked)
}

function closePreview() {
  if (prevVar === "goo") {
    document.getElementById("previewSec").style.width = "0"
    document.getElementById("previewPrt").style.width = "0"
    document.getElementById("previewPos").style.width = "0"
    document.getElementById("previewIll").style.width = "0"
    document.getElementById("wrapper").style.display = "block"
    internSec.scrollIntoView()
  } else if (prevVar === "boo") {
    var navcls = document.querySelectorAll(".navbtn")
    for (var i = 0; i < navcls.length; i++) {
      var currNavcls = navcls[i]
      currNavcls.style.backgroundColor = "#1111116b"
    }
    var ovr = document.querySelectorAll("#overlay")
    for (var i = 0; i < ovr.length; i++) {
      var currOvr = ovr[i]
      currOvr.style.display = "block"
    }
    document.getElementById("previewSec").style.width = "0"
    document.getElementById("previewPrt").style.width = "0"
    document.getElementById("previewPos").style.width = "0"
    document.getElementById("previewIll").style.width = "0"
    document.getElementById("wrapper").style.display = "block"
    document.getElementById("btns1").style.display = "flex"
    document.getElementById("btns2").style.display = "none"
    linkTab.scrollIntoView()
  } else {
    console.log("something is afoot here")
  }
}

// var ovr = document.querySelectorAll("#overlay")
// for (var i = 0; i < ovr.length; i++) {
//   var currOvr = ovr[i]
//   currOvr.style.display = "block"
// }
// linkTab.scrollIntoView()



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


