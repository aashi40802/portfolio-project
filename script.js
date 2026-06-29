// week 3 - adding interactivity

document.addEventListener('DOMContentLoaded', function() {

    // dark mode
    var themeToggle = document.querySelector('#themeToggle');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        var isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });


    // mobile nav
    var menuBtn = document.querySelector('#menuBtn');
    var navLinks = document.querySelector('#navLinks');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // close menu when clicking a link
    var links = document.querySelectorAll('#navLinks a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            menuBtn.classList.remove('open');
            navLinks.classList.remove('open');
        });
    }


    // skills toggle
    var skillsToggle = document.querySelector('#skillsToggle');
    var skillsGrid = document.querySelector('#skillsGrid');
    var toggleText = document.querySelector('#toggleText');

    skillsToggle.addEventListener('click', function() {
        var hidden = skillsGrid.classList.toggle('collapsed');
        skillsToggle.classList.toggle('collapsed', hidden);
        toggleText.textContent = hidden ? 'Show' : 'Hide';
    });

    // animate skill bars when scrolled into view
    var animated = false;
    function checkSkills() {
        if (animated) return;
        var rect = document.querySelector('#skills').getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            animated = true;
            var cards = document.querySelectorAll('.skill-card');
            for (var i = 0; i < cards.length; i++) {
                var lvl = cards[i].getAttribute('data-level');
                cards[i].querySelector('.skill-fill').style.width = lvl + '%';
            }
        }
    }
    window.addEventListener('scroll', checkSkills);
    checkSkills();


    // image slider
    var track = document.querySelector('#galleryTrack');
    var slides = document.querySelectorAll('.slide');
    var dotsEl = document.querySelector('#dots');
    var current = 0;

    // make the dots
    for (var i = 0; i < slides.length; i++) {
        var d = document.createElement('button');
        d.className = 'dot' + (i === 0 ? ' active' : '');
        d.setAttribute('data-i', i);
        d.addEventListener('click', function() {
            goTo(parseInt(this.getAttribute('data-i')));
        });
        dotsEl.appendChild(d);
    }

    var allDots = document.querySelectorAll('.dot');

    function goTo(n) {
        allDots[current].classList.remove('active');
        current = n;
        allDots[current].classList.add('active');
        track.style.transform = 'translateX(-' + (current * 100) + '%)';
    }

    document.querySelector('#prevBtn').addEventListener('click', function() {
        goTo(current === 0 ? slides.length - 1 : current - 1);
    });
    document.querySelector('#nextBtn').addEventListener('click', function() {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    });

    // auto slide
    var timer = setInterval(function() {
        goTo(current === slides.length - 1 ? 0 : current + 1);
    }, 6000);

    document.querySelector('#gallery').addEventListener('mouseenter', function() {
        clearInterval(timer);
    });
    document.querySelector('#gallery').addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            goTo(current === slides.length - 1 ? 0 : current + 1);
        }, 6000);
    });


    // form validation
    var nameIn = document.querySelector('#name');
    var emailIn = document.querySelector('#email');
    var msgIn = document.querySelector('#msg');
    var nameErr = document.querySelector('#nameErr');
    var emailErr = document.querySelector('#emailErr');
    var msgErr = document.querySelector('#msgErr');

    function checkName() {
        var v = nameIn.value.trim();
        if (v.length < 2) {
            nameErr.textContent = v.length === 0 ? 'Name is required.' : 'At least 2 characters.';
            nameIn.className = 'bad';
            return false;
        }
        nameErr.textContent = '';
        nameIn.className = 'good';
        return true;
    }

    function checkEmail() {
        var v = emailIn.value.trim();
        if (v.length === 0) {
            emailErr.textContent = 'Email is required.';
            emailIn.className = 'bad';
            return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
            emailErr.textContent = 'Enter a valid email.';
            emailIn.className = 'bad';
            return false;
        }
        emailErr.textContent = '';
        emailIn.className = 'good';
        return true;
    }

    function checkMsg() {
        var v = msgIn.value.trim();
        if (v.length < 10) {
            msgErr.textContent = v.length === 0 ? 'Message is required.' : 'At least 10 characters.';
            msgIn.className = 'bad';
            return false;
        }
        msgErr.textContent = '';
        msgIn.className = 'good';
        return true;
    }

    nameIn.addEventListener('input', checkName);
    emailIn.addEventListener('input', checkEmail);
    msgIn.addEventListener('input', checkMsg);

    document.querySelector('#sendBtn').addEventListener('click', function() {
        var ok = checkName() & checkEmail() & checkMsg();
        if (ok) {
            document.querySelector('#formCard').classList.add('sent');
        }
    });

    document.querySelector('#againBtn').addEventListener('click', function() {
        var card = document.querySelector('#formCard');
        card.classList.remove('sent');
        nameIn.value = '';
        emailIn.value = '';
        msgIn.value = '';
        nameIn.className = '';
        emailIn.className = '';
        msgIn.className = '';
        nameErr.textContent = '';
        emailErr.textContent = '';
        msgErr.textContent = '';
    });


    // back to top
    var toTop = document.querySelector('#toTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            toTop.classList.add('show');
        } else {
            toTop.classList.remove('show');
        }
    });

    toTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});