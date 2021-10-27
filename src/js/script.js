//Show the Nav Modal
document.querySelector('.nav-head-menu').addEventListener('click', function() {
    document.querySelector('.header-head').classList.add('open');
})

function closeModal() {
    document.querySelector('.header-head').classList.remove('open');
    document.querySelector('.header-head').classList.add('close');
    setTimeout(() => {
        document.querySelector('.header-head').classList.remove('close'); 
    }, 750);
}

document.querySelector('.nav-menu-close').addEventListener('click', function() {
    closeModal();
});

$('.nav-head-menu').hover(function(){
  $(this).addClass('magnetic');
}, function(){
  $(this).removeClass('magnetic');
})

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.intro-splash').style.top = '-100vh';
    }, 500)
    setTimeout(() => {
        document.querySelectorAll('.head-span').forEach((span,idx) => {
                span.classList.add('active');
                (idx + 1) * 400;
        });
    }, 1000)
});


const faders = document.querySelectorAll('.element');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });


  (function() {
    const links = document.querySelectorAll('.hover-me');
    const cursor = document.querySelector('.cursor');

    const animateMe = function(e) {
      const span = this.querySelector('span');
      span.style.display="block";
      cursor.style.display = 'none';
      const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this;
      
      move = 20;
      xMove = x / width * (move * 2) - move;
      yMove = y / height * (move * 2) - move;
      
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
 
      if (e.type === 'mouseleave') {
        span.style.transform = '';
        span.style.display = 'none';
        cursor.style.display = 'block';
      }}
    
    links.forEach(link => link.addEventListener('mousemove', animateMe));
    links.forEach(link => link.addEventListener('mouseleave', animateMe));
  })();

  $(document).on('mousemove', function(e) {
    var xPos = e.pageX;
    var yPos = e.pageY;
    $('.cursor').css({
      'top': yPos,
      'left': xPos
    });
  });

  var target = document.querySelector('.project');
  const height = window.innerHeight;
  var vhPixels = height * 1;
  vhPixels = Math.abs(vhPixels) * -1;
  var vhPixels2 = height * 2;
  vhPixels2 = Math.abs(vhPixels2) * -1;
  console.log(vhPixels);
  console.log(vhPixels2);
  var pixels = 100;
  var screenWidth = window.screen.width;
  var percentage = ( screenWidth - pixels ) / screenWidth ; // 0.92%
  console.log(percentage)
  document.querySelector('main').addEventListener('scroll', () => {
    if (window.scrollY >= target.getBoundingClientRect().top) {
      console.log(target.getBoundingClientRect().top)
      if (target.getBoundingClientRect().top < vhPixels && target.getBoundingClientRect().top > vhPixels2) {
        console.log("scrolled 100vh")
      }
      else if (target.getBoundingClientRect().top < vhPixels2) {
        console.log("scrolled 200vh")
      }
    }
  })