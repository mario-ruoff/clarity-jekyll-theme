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
