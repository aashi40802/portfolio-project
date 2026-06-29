# Portfolio Project — Week 3: JavaScript Interactivity

## Overview

Personal portfolio built during The Developers Arena internship (June 2026 batch). This week I added JavaScript to make the site interactive — form validation, dark mode, an image slider, and a few other things.

The design is inspired by Apple's website — clean type, lots of whitespace, frosted glass nav bar, and smooth transitions.

## What I Added This Week

- **Dark/Light mode toggle** — iOS style switch, saves your choice in localStorage so it sticks on reload
- **Skills show/hide** — collapses/expands the skills section, button icon changes between minus and plus
- **Project slider** — slides between my weekly projects with arrows and dot navigation, auto-advances every 6 seconds, pauses when you hover
- **Contact form validation** — checks name, email, and message in real time as you type, shows specific error messages, switches to a success screen when everything's valid
- **Back to top button** — fades in after scrolling down, smooth scrolls back up
- **Mobile hamburger menu** — animates into an X, shows frosted glass dropdown

## How to Run

1. Clone the repo
2. Open `index.html` in your browser, or use Live Server in VS Code
3. No npm, no build tools, just HTML/CSS/JS

## File Structure

```
portfolio-project/
├── index.html        
├── style.css         
├── script.js         
├── README.md         
├── images/           
│   ├── profile.jpg
│   ├── project-week1.png
│   ├── project-week2.png
│   └── project-week3.png
└── screenshots/      
```

## JS Concepts I Used

- querySelector and querySelectorAll for selecting elements
- addEventListener for click, input, scroll events
- classList (add, remove, toggle) for showing/hiding things
- createElement for building gallery dots dynamically
- localStorage for saving the dark mode preference
- setInterval and clearInterval for auto-sliding the gallery
- CSS transform manipulation through JS for the slider
- Regex for email validation
- getBoundingClientRect to detect when skills section is visible

## Testing

- Tested in Chrome and Firefox
- Checked responsive layout at 375px, 768px, and 1440px using DevTools
- Validated all form error states (empty, too short, invalid email, valid)
- Dark mode persists after refresh
- Slider arrows, dots, auto-advance, and pause-on-hover all work

## Author

Aashi Gupta  
The Developers Arena — June 2026 Batch
