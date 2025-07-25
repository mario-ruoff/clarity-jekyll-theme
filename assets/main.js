// smooth scrolling to target div
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

// hide menu when scrolling
// var prevScrollpos = window.pageYOffset;
// var div_height = document.getElementById("nav-bar").offsetHeight;
// var is_white = document.getElementById("project-white");
// if (is_white) {
//   var social_children = document.getElementById('social-white').children;
//   var menu_children = document.getElementById('menu-white').children;
// }

// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
// var $slider = document.getElementById('slider');
// var isOpen = $slider.classList.contains('slide-in');
//   if (currentScrollPos <= 0) {
//     document.getElementById("nav-bar").style.top = 0;
//     document.getElementById("nav-bar").style.backgroundColor = "transparent";
//     if (is_white) {
//       for(var i=0; i<social_children.length; i++) {
//         social_children[i].children[0].style.color = "#f4f3ef";
//       }
//       for(var i=0; i<menu_children.length; i++) {
//         menu_children[i].style.color = "#f4f3ef";
//       }
//     }
//     return
//   }

//   if (currentScrollPos > 0) {
//     document.getElementById("nav-bar").style.backgroundColor = "white";
//     if (is_white) {
//       for(var i=0; i<social_children.length; i++) {
//         social_children[i].children[0].style.color = "#353535";
//       }
//       for(var i=0; i<menu_children.length; i++) {
//         menu_children[i].style.color = "#353535";
//       }
//     }
//   }

//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("nav-bar").style.top = 0;
//   } 
//   else {
//     if (isOpen) {
//       document.getElementById("nav-bar").style.top = -div_height;
//     }
//     else {
//       document.getElementById("nav-bar").style.top = 0;
//     }
//   }
//   prevScrollpos = currentScrollPos;
// };


// toggle menu
function toggle(x) {
  var $slider = document.getElementById('slider');
  var isOpen = $slider.classList.contains('slide-in');
  $slider.setAttribute('class', isOpen ? 'nav-container slide-out' : 'nav-container slide-in');
};

document.querySelectorAll('.menu-default').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
    });
});

// toggle project page
function ToggleProject(clicked_id) {
  $('.project-page').hide();
  $('.project-page.' + clicked_id).show();
  if (clicked_id == 'date') {
    document.getElementById('date').className = 'active';
    document.getElementById('topic').className = 'notactive';
  }
  else if (clicked_id == 'topic') {
    document.getElementById('topic').className = 'active';
    document.getElementById('date').className = 'notactive';
  }
}

// toggle project page
function ToggleScene() {
  var x = document.getElementById("scene");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// slide menu
var contents = document.getElementsByClassName("slide-content");

document.getElementById("slide-menu").addEventListener("click", function(e) {
  const idx = [...this.children]
    .filter(el => el.className.indexOf('dot') > -1)
    .indexOf(e.target);
    
  if (idx >= 0) {
    var prev = document.querySelector(".dot.active");
    if (prev) prev.classList.remove("active");
    e.target.classList.add("active");
    
    for (var i = 0; i < contents.length; i++) {
      if (i == idx) {
        contents[i].style.display = "block";
      } else {
        contents[i].style.display = "none";
      }
    }  
  }
});

// Video controls
function ToggleVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
      if (videos[i].paused) {
          videos[i].play();
      } else {
          videos[i].pause();
      }
  }
};


function SlowVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = videos[i].playbackRate * 0.9;
    videos[i].play();
  }
  
  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; };


function FastVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].playbackRate = videos[i].playbackRate / 0.9;
    videos[i].play();
  }

  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; 
};

function RestartVideo(x) {
  var videos = document.getElementsByClassName(x + '-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
    videos[i].playbackRate = 1.0;
    videos[i].currentTime = 0;
    videos[i].play();
  }
  
  var msg = document.getElementById(x + '-msg');
  msg.innerHTML = 'Speed: ' + '×' + videos[0].playbackRate.toFixed(2);

  msg.classList.add("fade-in-out");
  msg.style.animation = 'none';
  msg.offsetHeight; /* trigger reflow */
  msg.style.animation = null; 
};


// table adding even odd row
$('tr:not(:has(td[rowspan])):even').addClass('oddrow');
