import itemDataUA from '../data/page-items-data-ua.json' with { type:'json' }
import itemDataEN from '../data/page-items-data-en.json' with { type:'json' }
import garantDataUA from '../data/page-garant-data-ua.json' with { type:'json' }
import garantDataEN from '../data/page-garant-data-en.json' with { type:'json' }
import feedbackDataUA from '../data/page-feedback-data-ua.json' with { type:'json' }
import feedbackDataEN from '../data/page-feedback-data-en.json' with { type:'json' }
import stockDataUA from '../data/page-stock-data-ua.json' with { type:'json' }
import stockDataEN from '../data/page-stock-data-en.json' with { type:'json' }

let itemData , garantData , feedbackData, stockData = {}
// INIT
itemData = itemDataUA
garantData = garantDataUA
feedbackData = feedbackDataUA
stockData = stockDataUA
let langBtn = document.querySelector('.lang-sw')
let brgLangA = document.querySelector('.brg-switcher-a')
let brgLangI = document.querySelector('.brg-switcher-i')
let brgLangN = document.querySelector('.brg-switcher-n')
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.get('lang') == 'ua') {
    itemData = itemDataUA
    garantData = garantDataUA
    feedbackData = feedbackDataUA
    stockData = stockDataUA
    langBtn.src = "./images/lang_sw_ua.png"
    brgLangA.href = '?lang=en'
    brgLangI.src = stockData.burger.langico
    brgLangN.textContent = stockData.burger.langname
    document.querySelector('.lang-sw-c').href = '?lang=en'

} else if (searchParams.get('lang') == 'en') {
    itemData = itemDataEN
    garantData = garantDataEN
    feedbackData = feedbackDataEN
    stockData = stockDataEN
    brgLangA.href = '?lang=ua'
    brgLangI.src = stockData.burger.langico
    brgLangN.textContent = stockData.burger.langname
    langBtn.src = "./images/lang_sw_en.png"
    langBtn.style.width = '50px'
    document.querySelector('.lang-sw-c').href = '?lang=ua'
}

// MAINPAGE
let mainTitle = document.querySelector('.action-form-title')
mainTitle.textContent = stockData.main.title
let mainButton = document.querySelector('.action-form-button-text')
mainButton.textContent = stockData.main.button
// ITEMSPAGE
let itemsTitle = document.querySelector('.page-items-title')
itemsTitle.textContent = stockData.items.title
let itemsCards = document.querySelectorAll('.modal-item')
for (let i=0; i<itemsCards.length; i++) {
    itemsCards[i].querySelector('.pi-i-d-title').textContent = itemData[i].title
    itemsCards[i].querySelector('.pi-i-d-subtitle').textContent = itemData[i].description
    itemsCards[i].querySelector('.pi-i-d-price').textContent = itemData[i].price
    itemsCards[i].style.background = `url(./data/page-items-data-images/item-${i+1}-data-images/item-${i+1}-1.png)`
    itemsCards[i].style.backgroundSize = `100%`
}
// GARANTPAGE
let garantTitleMid = document.querySelector('.page-garant-title-ms')
garantTitleMid.textContent = stockData.garant.title
let garantTitleSmall = document.querySelector('.page-garant-title')
garantTitleSmall.textContent = stockData.garant.title
let garantCards = document.querySelectorAll('.page-garant-item')
for (let i=0; i<garantCards.length; i++) {
    garantCards[i].querySelector('.page-g-i-image').src = garantData[i].image
    garantCards[i].querySelector('.page-g-i-t-text').textContent = garantData[i].title
    garantCards[i].querySelector('.page-g-i-s-text').textContent = garantData[i].subtitle
}
garantCards = document.querySelectorAll('.page-garant-item-f')
for (let i=0; i<garantCards.length; i++) {
    garantCards[i].querySelector('.page-g-i-image-f').src = garantData[i].image
    garantCards[i].querySelector('.page-g-i-t-text-f').textContent = garantData[i].title
    garantCards[i].querySelector('.page-g-i-s-text-f').textContent = garantData[i].subtitle
}
// FEEDBACKPAGE
let feedbackTitle = document.querySelector('.page-feedback-title')
feedbackTitle.textContent = stockData.feedback.title
let feedCards = document.querySelectorAll('.page-feedback-item')
for (let i=0; i<feedCards.length; i++) {
    feedCards[i].querySelector('.page-f-i-h-image').src = feedbackData[i].logo
    feedCards[i].querySelector('.page-f-i-h-title').textContent = "@"+feedbackData[i].nickname
    feedCards[i].querySelector('.page-f-i-d-text').textContent = feedbackData[i].text
    feedCards[i].style.background = `url(${feedbackData[i].image}) no-repeat`
    feedCards[i].style.backgroundSize = `100%`
}
feedCards = document.querySelectorAll('.ifbs')
for (let i=0; i<feedCards.length; i++) {
    feedCards[i].style.background = `url(${feedbackData[i].image}) no-repeat`
    feedCards[i].style.backgroundSize = `100%`
    feedCards[i].querySelector('.page-f-i-h-image').src = feedbackData[i].logo
    feedCards[i].querySelector('.page-f-i-h-title').textContent = "@"+feedbackData[i].nickname
    feedCards[i].querySelector('.page-f-i-d-text').textContent = feedbackData[i].text
}
// MODALPAGE
let modalAll = document.querySelector('.modal-gallery-section-container')
modalAll.style.display = 'none'
// BURGER
let burgerPage = document.querySelector('.page-header-burger-menu')
burgerPage.style.display = 'none'
let burgerButton = document.querySelector('#burger-header')
burgerButton.addEventListener('click', () => {
    if (burgerPage.style.display == 'none') {
        document.querySelector('.page-header-burger-menu').style.display = 'block'
        document.querySelector('#burg-image').src = './images/burger-menu-close.png'
    } else {
        document.querySelector('.page-header-burger-menu').style.display = 'none'
        document.querySelector('#burg-image').src = './images/burger-menu.png'

    }
})

// FOOTER 
let footerTitleOne = document.querySelector('.page-f-c-b-t-text')
footerTitleOne.textContent = stockData.footer.title
let footerTitleTwo = document.querySelector('.page-f-c-b-t-t')
footerTitleTwo.textContent = stockData.footer.titletwo
let footerSubtitleTwo = document.querySelector('.page-f-c-b-d-text')
footerSubtitleTwo.innerHTML = stockData.footer.subtitletwo
let footerLinks = document.querySelectorAll('.page-f-c-b-c-item')
footerLinks.forEach((item) => {
    item.addEventListener('click', () => {

    })
})
