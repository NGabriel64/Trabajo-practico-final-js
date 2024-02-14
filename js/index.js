const $body = document.querySelector(`body`)
const $header = document.querySelector(`header`)
const $main = document.querySelector(`main`)
const $footer = document.querySelector(`footer`)


const htmlButton = document.querySelector(`.header-button`);
const handlecolor = ()=>{
    if($body.classList.contains(`dark-mode`)){
        $body.classList.remove(`dark-mode`);
    }
    else{
        $body.classList.add(`dark-mode`);
    }
}

htmlButton.addEventListener(`click`, handlecolor);