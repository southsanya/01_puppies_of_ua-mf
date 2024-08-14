import itemDataUA from '../data/page-items-data-ua.json' with { type:'json' }
import itemDataEN from '../data/page-items-data-en.json' with { type:'json' }
import garantDataUA from '../data/page-garant-data-ua.json' with { type:'json' }
import garantDataEN from '../data/page-garant-data-en.json' with { type:'json' }
import feedbackDataUA from '../data/page-feedback-data-ua.json' with { type:'json' }
import feedbackDataEN from '../data/page-feedback-data-en.json' with { type:'json' }

let itemData, garantData, feedbackData = {}
    itemData = itemDataUA
    garantData = garantDataUA
    feedbackData = feedbackDataUA
if (window.location.pathname.endsWith('lang=ua')) {
    itemData = itemDataUA
    garantData = garantDataUA
    feedbackData = feedbackDataUA
} else if (window.location.pathname.endsWith('lang=en')) {
    itemData = itemDataEN
    garantData = garantDataEN
    feedbackData = feedbackDataEN
}
let fItemModal = document.querySelectorAll('.modal-item')[0]
let sItemModal = document.querySelectorAll('.modal-item')[1]
let modalCloseBtn = document.querySelector('.modal-gallery-close-btn')
let modalImageCounter = 0
let itemModalImages = []

modalCloseBtn.addEventListener('click', () => {
    document.querySelector('.modal-gallery-section-container').style.display = 'none'

})

fItemModal.addEventListener('click', () => {
    let itemModalId = ''
    let itemModalSource = ''
    itemModalImages = []
    let itemModalTitle = ''
    let itemModalDescription = ''
    let itemModalPrice = ''
    for (let i=0; i<itemData.length; i++) {
        if (fItemModal.querySelector('.pi-i-d-title').textContent.trim() == itemData[i].title) {
            itemModalId = i+1
            itemModalSource = `.\\page-items-data-images\\item-${itemModalId}-data-images\\`
            itemModalImages = [
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-1.png`,
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-2.png`,
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-3.png`,
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-4.png`,
            ]
            itemModalTitle = itemData[i].title
            itemModalDescription = itemData[i].description
            itemModalPrice = itemData[i].price
        }
    document.querySelector('.modal-gallery-section-container').style.display = 'block'
    document.querySelector('.modal-gallery-title-container').textContent = itemModalTitle
    document.querySelector('.modal-gallery-window-mid').innerHTML = `
    <img src="${itemModalImages[0]}" class="page-modal-image"/>
    `
    }
    modalImageCounter = 0

})
sItemModal.addEventListener('click', () => {
    let itemModalId = ''
    let itemModalSource = ''
    itemModalImages = []
    let itemModalTitle = ''
    let itemModalDescription = ''
    let itemModalPrice = ''
    for (let i=0; i<itemData.length; i++) {
        if (sItemModal.querySelector('.pi-i-d-title').textContent.trim() == itemData[i].title) {
            itemModalId = i+1
            itemModalSource = `.\\page-items-data-images\\item-${itemModalId}-data-images\\`
            itemModalImages = [
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-1.png`,
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-2.png`,
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-3.png`,
                `.\\data\\page-items-data-images\\item-${itemModalId}-data-images\\item-${itemModalId}-4.png`,
            ]
            itemModalTitle = itemData[i].title
            itemModalDescription = itemData[i].description
            itemModalPrice = itemData[i].price
        }
    document.querySelector('.modal-gallery-section-container').style.display = 'block'
    document.querySelector('.modal-gallery-title-container').textContent = itemModalTitle
    document.querySelector('.modal-gallery-window-mid').innerHTML = `
    <img src="${itemModalImages[0]}" class="page-modal-image"/>
    `
    }
    modalImageCounter = 0

})

// MODALPAGE
    // for modal page mobile
    let modalSliderMobilePrew = document.querySelector('#modalpage-prew-mb')
    modalSliderMobilePrew.addEventListener('click', () => {
        modalImageCounter--
        if (modalImageCounter < 0) {
            modalImageCounter = itemModalImages.length-1
        }
        document.querySelector('.modal-gallery-window-mid').innerHTML = `
        <img src="${itemModalImages[modalImageCounter]}" class="page-modal-image"/>
        `
    })
    let modalSliderMobileNetx = document.querySelector('#modalpage-next-mb')
    modalSliderMobileNetx.addEventListener('click', () => {
        modalImageCounter++
        if (modalImageCounter > itemModalImages.length-1) {
            modalImageCounter = 0
        }
        document.querySelector('.modal-gallery-window-mid').innerHTML = `
        <img src="${itemModalImages[modalImageCounter]}" class="page-modal-image"/>
        `
    })
    // for modal page desktop
    let desktopSliderMobilePrew = document.querySelector('#modalpage-prew-dt')
    desktopSliderMobilePrew.addEventListener('click', () => {
        modalImageCounter--
        if (modalImageCounter < 0) {
            modalImageCounter = itemModalImages.length-1
        }
        document.querySelector('.modal-gallery-window-mid').innerHTML = `
        <img src="${itemModalImages[modalImageCounter]}" class="page-modal-image"/>
        `
    })
    let desktopSliderMobileNetx = document.querySelector('#modalpage-next-dt')
    desktopSliderMobileNetx.addEventListener('click', () => {
        modalImageCounter++
        if (modalImageCounter > itemModalImages.length-1) {
            modalImageCounter = 0
        }
        document.querySelector('.modal-gallery-window-mid').innerHTML = `
        <img src="${itemModalImages[modalImageCounter]}" class="page-modal-image"/>
        `
    })





