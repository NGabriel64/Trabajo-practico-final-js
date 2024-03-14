const $body = document.querySelector(`body`)
const $header = document.querySelector(`header`)
const $main = document.querySelector(`main`)
const $footer = document.querySelector(`footer`)

//Button

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

//Cards

const $container = document.querySelector(`.container`)

const arrProducts = [
    {
        name: `Ajedrez en madera`,
        img:`https://i.etsystatic.com/41438092/r/il/8d260f/4679160342/il_570xN.4679160342_p07n.jpg`,
        price: 50000,
        id : 1,
    },

    {
        name:`Ajedrez en aluminio`,
        img:`https://www.gavia.com.ar/wp-content/uploads/2021/06/Screenshot_20210616-161125_Instagram-100x100.jpg`,
        price: 145000,
        id:2
    },

    {
        name:`Ajedrez en cristal`,
        img:`https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71a-p0QCDtL._AC_UF894,1000_QL80_.jpg`,
        price: 160000,
        id:3
    },
];

const createCards = (arr)=>{
    return arr.map(prod=>{
        return`
        <div class="card" id"${prod.id}">
                <p class="card-tittle">${prod.name}</p>
                <img src="${prod.img}" alt="${prod.name}">
                <div>
                    <b>$${prod.price}</b>
                    <button class="buy-btn">Comprar</button>
                </div>
            </div>
`
    })
};

const renderCards =()=>{
    $container.innerHTML = (createCards(arrProducts)).join(``);
};

const init = ()=>{
    renderCards()
};

init()