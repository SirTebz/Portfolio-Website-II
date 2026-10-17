
        /* ----- THEME TOGGLE ----- */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

        /* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT (UPDATED for IT Support & Infrastructure Focus) ----- */
 let typingEffect = new Typed(".typedText",{
    strings : ["Software Dev.", "IT Support Specialist", "Systems & Infrastructure", "Technical Operations"],
    loop : true,
    typeSpeed : 90, 
    backSpeed : 80,
    backDelay : 200
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- EXPERIENCE BOX -- */
sr.reveal('.exp-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

/* ----- POP-UP OVERLAY FOR CONTACT FORM SUCCESS (Bug Fix: Removed duplicate functions) ----- */

const contactForm = document.getElementById('contactForm');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');

// Function to show the pop-up
function showPopup(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalOverlay.style.display = 'flex';
  setTimeout(() => {
    modalContent.classList.add('show');
  }, 10);
}

// Function to hide the pop-up
function hidePopup() {
  modalContent.classList.remove('show');
  setTimeout(() => {
    modalOverlay.style.display = 'none';
  }, 300);
}

// Listen for the form submission (Only enabled if the form is uncommented in index.html)
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get form data (optional, but good practice)
    const name = document.getElementById('name').value;
    
    // Display a success message in the pop-up
    showPopup('Success!', 'Thank you for your message, ' + name + '! We will get back to you shortly.');

    // Clear the form fields after submission
    contactForm.reset();
  });
}


// Hide the pop-up if the user clicks the dark background
// Bug Fix: The final closing brace } was wrapping this listener and causing syntax errors.
if (modalOverlay) {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      hidePopup();
    }
  });
}

/* ----- SERVICES POP-UPS ----- */
(function () {
  var services = {
    software: {
      title: 'Software Development',
      text: 'Design, development, and maintenance of scalable web applications using modern technologies like ASP.NET Core, JavaScript and SQL. From requirements gathering to deployment and support, I ensure reliable and user-friendly solutions.'
    },
    support: {
      title: 'Technical Support & System Administration',
      text: 'Provide Level 1 & 2 technical support, diagnosing hardware and software issues, and performing system maintenance, ensuring optimal day-to-day IT operations.'
    },
    business: {
      title: 'Business Process Automation & Solutions',
      text: 'Leveraging the Microsoft Power Platform and SharePoint to create automated workflows, build business tools, and manage digital content. I help implement new technologies to improve organizational efficiency and workflows.'
    }
  };

  var overlay = document.getElementById('serviceModalOverlay');
  var box = document.getElementById('serviceModal');
  var titleEl = document.getElementById('serviceModalTitle');
  var textEl = document.getElementById('serviceModalText');
  var closeBtn = document.getElementById('serviceModalClose');
  var lastFocus = null;
  var hideTimer = null;

  function openService(key) {
    var s = services[key];
    if (!s) return;
    clearTimeout(hideTimer);
    lastFocus = document.activeElement;
    titleEl.textContent = s.title;
    textEl.textContent = s.text;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { box.classList.add('show'); }, 10);
    closeBtn.focus();
  }

  function closeService() {
    box.classList.remove('show');
    document.body.style.overflow = '';
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      overlay.classList.remove('open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }, 300);
  }

  document.querySelectorAll('[data-service]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openService(btn.getAttribute('data-service'));
    });
  });
  closeBtn.addEventListener('click', closeService);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeService();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeService();
  });
})();

/* ----- SCROLL REVEAL (SERVICES) ----- */
if (typeof sr !== 'undefined') {
  sr.reveal('.service-box', {interval: 200});
}
