const sideMenu = document.querySelector('#sideMenu')
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu(){
    sideMenu.style.transform = 'translatex(-16rem)';
}
function colseMenu(){
    sideMenu.style.transform = 'translate(16rem)';
}



window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50','backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');

        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50','dark:bg-transparent');
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50','backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50','dark:bg-transparent');
    }
}) 

// -------------------light mode and dark mode----------------
// -------------------light mode and dark mode----------------

    if (localStorage. theme === 'dark' || (!('theme' in localstorage) && window.
    matchMedia( '(prefers-color-scheme: dark)')-matches)) {
    document.documentElement.classList.add('dark')
    }
    else {
    document.documentElement.classList.remove('dark')
    }


    function toggleTheme(){
        document.documentElement.classList.toggle('dark');
    if(document.documentElement.classList.contains('dark')){
    localStorage. theme = 'dark';
    }else{
    localStorage. theme = 'light';
    }
}


// Tabbed interface logic
function showTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add('active');
    document.getElementById('tab-' + tab).classList.remove('hidden');
}

// Fun Fact Carousel
const funFacts = [
    "I love coding at night!",
    "I enjoy learning new frameworks.",
    "Design is as important as code.",
    "I play chess for fun.",
    "I contribute to open source."
];
let factIndex = 0;
setInterval(() => {
    factIndex = (factIndex + 1) % funFacts.length;
    document.getElementById('funFactText').textContent = funFacts[factIndex];
}, 3000);