actualMode=localStorage.getItem('mode');
if (actualMode == 'dark'){
    document.querySelector('.color-mode-icon').classList.toggle('active');
    document.querySelector('#navbarNav').classList.toggle('fixed-dark');
    document.body.classList.toggle('dark-mode');
}


const changeMode = ()=>{
    let mode = localStorage.getItem('mode');
    if (mode == "dark")localStorage.setItem('mode','light');
    else localStorage.setItem('mode','dark')
}

