
let body = document.getElementsByTagName("body")
let bodyWrapper = document.getElementById("body-wrapper");
let mouseEffect = document.getElementById("mouse-effect");
let contentContainer = document.getElementById('content-container');
let anchors = document.getElementsByTagName("a");
let prevAnchor = document.getElementById("menu-about");
let projImg = document.getElementById("project-img");
let closeModal = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let modalImgs = document.getElementsByClassName("modal-imgs");
let mainContentContainer = document.getElementById("main-content-container");
// let mainContent = document.getElementById("main-content");
let modalImgContainer = document.getElementById("modal-img-container");
let demoVideo = document.getElementById("demo-video");
let toggleModalOnclick = document.getElementById("toggle-modal-onclick");
let imgOverlay = document.getElementById("img-overlay");
let logo = document.getElementById("logo");
let menuIcons = document.getElementById("menu-icons")
let menu = document.getElementById("menu");
let menuClose = document.getElementById("menu-close");
let menuLinks = document.getElementById("menu-links");
let modalTitle = document.getElementById("modal-title");
let modalDesc = document.getElementById("modal-desc");
let modalDescValues = ["Demo Video", "Event List", "Add Event"
                    , "Update Event", "Delete Event", "Selecting Different Days"
                    , "Changing Month", "Changing Year", "Back to Current Date"
                    , "LED day Header", "Responsive Design"];
let projectContainerWrapper = document.getElementById("project-container-wrapper");
let hoverEffect = document.getElementsByClassName("hover-effect");
let width = 820;
let mobileWidth = 468;
let isExpanded = false;
let currImgIdx = 0;

anchorsListener();
addImgListener();
hoverOverElementEffect();
// TODO: if user access the content based on url #id change the active dot
window.addEventListener('hashchange', (e) => {
	// Code here for URL change
  e.preventDefault();
  scrollTo(window.location.hash);
});

window.addEventListener("load", (e) => {
  e.preventDefault();
  if(window.location.hash == "") {
    scrollTo("#about");

  } else {
    scrollTo(window.location.hash);

  }
  if(window.innerWidth < width) {
    if(!isExpanded) {
      resetMenu();
      addMenuListener();
    } else {
      menuIcons.classList.remove("hidden")

    }
    // resetMenu();
    // addMenuListener();
    // menuIcons.classList.remove("hidden")
  } else {
    isExpanded = false;
    resetMaxWidthMenu();

    // menuLinks.classList.remove("hidden")
    // menuIcons.classList.add("hidden")
  }

})

window.addEventListener('resize', (e) => {
  if(window.innerWidth < width) {
    if(!isExpanded) {
      resetMenu();
      addMenuListener();
    } else {
      menuIcons.classList.remove("hidden")

    }
    // menuIcons.classList.remove("hidden")
  } else {
    isExpanded = false;
    resetMaxWidthMenu();
    // menuLinks.classList.remove("hidden")
    // menuIcons.classList.add("hidden")
  }
  scrollTo(window.location.hash);
  // width = window.innerWidth;
});



logo.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo("#about");
})

projImg.addEventListener("click", (e) => {
  if(window.innerWidth <= 468) {
    projectContainerWrapper.classList.add("hidden");
    modal.classList.remove("hidden");
    // modal.style.display = "block";
  } else {
    projectContainerWrapper.classList.add("hidden");
    modal.classList.remove("hidden");
  }
})

// projImg.addEventListener("mouseover", (e) => {
//   imgOverlay.classList.remove("hidden")
// })

// projImg.addEventListener("mouseleave", (e) => {
//   imgOverlay.classList.add("hidden")
// })

closeModal.addEventListener("click", (e) => {
  demoVideo.pause();
  projectContainerWrapper.classList.remove("hidden");

  modal.classList.add("hidden");

})

closeModal.addEventListener("mouseover", (e) => {
  closeModal.src = "../assets/menu-close-hover.png";
})

closeModal.addEventListener("mouseleave", (e) => {
  closeModal.src = "../assets/menu-close.png";
})

function resetMenu() {
  menuIcons.classList.remove("hidden");
  menu.classList.remove("hidden");
  menuLinks.classList.add("hidden");
  menuClose.classList.add("hidden");
}

function resetMaxWidthMenu() {
  menuIcons.classList.add("hidden");
  menuLinks.classList.remove("hidden");
}

function addMenuListener() {
  // menuLinks.classList.add("hidden")
  menu.addEventListener("click", () => {
    isExpanded = true;
    menu.classList.add("hidden");
    menuLinks.classList.remove("hidden");
    menuClose.classList.remove("hidden");
  })
  menuClose.addEventListener("click", () => {
    isExpanded = false;
    menu.classList.remove("hidden")
    menuLinks.classList.add("hidden");
    menuClose.classList.add("hidden");
  })
}
function resetModal() {
  while (modalImgContainer.firstChild) {
      modalImgContainer.removeChild(modalImgContainer.firstChild);
  }
  // while (mainContentContainer.firstChild) {
  //     mainContentContainer.removeChild(mainContentContainer.firstChild);
  // }
}

function hideAndPauseVideo() {
  demoVideo.pause();
  demoVideo.classList.add("hidden");
}

function addImgListener() {
  for(let i=0; i<modalImgs.length; i++) {
    modalImgs[i].addEventListener("click", (e) => {
      modalDesc.textContent = modalDescValues[i];
      // modalDescValues
      if(i == 0) {
        resetModal();

        modalTitle.textContent = "Video"
        demoVideo.classList.remove("hidden");
        // let vid = document.createElement("video");
        // vid.src = "./assets/demo_video.mp4";
        // vid.controls = true;
        // mainContentContainer.appendChild(vid);
        modalImgs[currImgIdx].classList.remove("selected");
        modalImgs[i].classList.add("selected");
        currImgIdx = i;
      } else {
        if(currImgIdx != i) {
          resetModal();

          hideAndPauseVideo()
          modalTitle.textContent = "Features"

          let mainContent = document.createElement("img");
          mainContent.src = modalImgs[i].src;
          modalImgContainer.appendChild(mainContent);
          modalImgs[currImgIdx].classList.remove("selected");
          modalImgs[i].classList.add("selected");
          currImgIdx = i;
        } 
      }
      
    })
  }
}

function scrollTo(url) {
  let urlArr = url.split("#");
  let target = urlArr[1];
  let str = "#" + target;
  let page = document.getElementById(target);
  let anchor = document.getElementById("menu-" + target);
  prevAnchor.classList.remove("underline");
  prevAnchor = anchor;
  prevAnchor.classList.add("underline");
  // page.scrollIntoView({behavior: 'smooth'});
  page.scrollIntoView({ behavior: "smooth", block: "end" });//, inline: "center"
  window.history.replaceState({}, document.title, str);
}
function anchorsListener() {
  for(let i = 0; i<anchors.length; i++) {
    anchors[i].addEventListener("click", (e) => {
      if((anchors[i].classList.contains("links") || anchors[i].classList.contains("no-deco")) 
          && window.innerWidth < width) {//860
        isExpanded = false;
        resetMenu()
        // menuLinks.classList.add("hidden");
      }
      if(!anchors[i].classList.contains("contact-link") && window.innerWidth > mobileWidth){
        e.preventDefault();
        scrollTo(e.target.href);
      }
      
    })
  }
}

function hoverOverElementEffect() {
  let defbox = document.getElementById("def-box");
  for(let i = 0; i < hoverEffect.length; i++) {
    hoverEffect[i].addEventListener("mouseover", (e) => {
      defbox.style.border = "3px solid white";
    })
    hoverEffect[i].addEventListener("mouseleave", (e) => {
      defbox.style.border = "3px solid #6277c6";
    })
  }
}

let mouseEffects = (e) => {
  let testingWrapper = document.getElementById("testing-wrapper");
  let defbox = document.getElementById("def-box");
  let pX = 0;
  let pY = 0;
  var to_append = document.getElementsByClassName('loader-container')[0];
	var all = document.getElementsByClassName('loader-container');

	var parent_div = document.createElement('div');
	parent_div.className = "loader-container";
	var inner_div = document.createElement('div');
	inner_div.className = "loader";
	parent_div.appendChild(inner_div)
	var d = testingWrapper.appendChild(parent_div);

  parent_div.style.left = (e.clientX - 10)+'px';
	parent_div.style.top = (e.clientY -10)+'px';
  defbox.style.left = (e.clientX - 10)+'px';
	defbox.style.top = (e.clientY -10)+'px';
  // if(pX < e.clientX) {
  //     defbox.style.setProperty("--w", (e.clientX - pX)+ "px");
  //     pX = e.clientX;
  // }
  // when mouse is moving set the hollow circle be the mouse
  inner_div.onanimationend = () => {
    testingWrapper.removeChild(parent_div)
  }
	if(document.getElementsByClassName('loader-container').length > 20) {
    testingWrapper.removeChild(to_append)
	}
}

let toggleDefbox = (val) => {
  let defbox = document.getElementById("def-box");
  if(val) {
    defbox.style.backgroundColor = "#6277c6";
  } else {
    defbox.style.background = "transparent"
  }
}

// window.addEventListener('scroll', (e) => {
// })

bodyWrapper.addEventListener("mousedown", (e) => {
  toggleDefbox(true);
  mouseEffects(e);
})

bodyWrapper.addEventListener("mouseup", (e) => {
  toggleDefbox(false);
})


bodyWrapper.addEventListener("mousemove", (e) => {
  toggleDefbox(false)
  mouseEffects(e);
})

