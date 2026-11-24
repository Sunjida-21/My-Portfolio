const nav=document.querySelector(".site-nav");
const backToTop=document.getElementById("backToTop");
const navLinks=[...document.querySelectorAll(".nav-link")];
function updateScrollUI(){const y=window.scrollY;nav?.classList.toggle("scrolled",y>35);backToTop?.classList.toggle("show",y>500);}
window.addEventListener("scroll",updateScrollUI,{passive:true});updateScrollUI();
backToTop?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
document.querySelectorAll(".year").forEach(el=>el.textContent=new Date().getFullYear());
navLinks.forEach(link=>link.addEventListener("click",()=>{const menu=document.getElementById("mainNav");if(menu?.classList.contains("show"))bootstrap.Collapse.getOrCreateInstance(menu).hide();}));

// Remember the selected appearance across every page.
const themeToggle=document.getElementById("themeToggle");
const savedTheme=localStorage.getItem("sinthy-portfolio-theme")||"dark";
document.body.dataset.theme=savedTheme;
function paintThemeButton(){if(!themeToggle)return;const light=document.body.dataset.theme==="light";themeToggle.innerHTML=light?'<i class="bi bi-moon-stars"></i>':'<i class="bi bi-sun"></i>';themeToggle.setAttribute("aria-label",light?"Switch to dark mode":"Switch to light mode");themeToggle.title=light?"Switch to dark mode":"Switch to light mode";}
paintThemeButton();
themeToggle?.addEventListener("click",()=>{document.body.dataset.theme=document.body.dataset.theme==="light"?"dark":"light";localStorage.setItem("sinthy-portfolio-theme",document.body.dataset.theme);paintThemeButton();});

// Contact form prepares an email. Replace this value once the professional email is provided.
const contactForm=document.getElementById("contactForm");
if(contactForm){contactForm.addEventListener("submit",event=>{event.preventDefault();const data=new FormData(contactForm);const recipient="sunjidamahamud2002@gmail.com";if(!recipient){const note=document.getElementById("formNote");if(note)note.textContent="Your email app could not be opened. Please email sunjidamahamud2002@gmail.com directly.";return;}const subject=data.get("subject")||"Portfolio enquiry";const body=`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});}
