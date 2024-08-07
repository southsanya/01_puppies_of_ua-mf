import itemDataUA from '../data/page-items-data-ua.json' with { type:'json' }
import itemDataEN from '../data/page-items-data-en.json' with { type:'json' }
import garantDataUA from '../data/page-garant-data-ua.json' with { type:'json' }
import garantDataEN from '../data/page-garant-data-en.json' with { type:'json' }
import feedbackDataUA from '../data/page-feedback-data-ua.json' with { type:'json' }
import feedbackDataEN from '../data/page-feedback-data-en.json' with { type:'json' }

let itemData, garantData, feedbackData = {}
if (window.location.pathname.endsWith('index-ua.html')) {
    itemData = itemDataUA
    garantData = garantDataUA
    feedbackData = feedbackDataUA
} else if (window.location.pathname.endsWith('index-en.html')) {
    itemData = itemDataEN
    garantData = garantDataEN
    feedbackData = feedbackDataEN
}
// SLIDERS

// ITEMPAGE 
    // for items page mobile/tablet versions
        let itemSliderMobilePrew = document.querySelector('#itemspage-prew-mb')
        itemSliderMobilePrew.addEventListener('click', () => {
            let stockElementTitle = document.querySelector('.pi-i-d-title').textContent.trim()
            for (let i=0; i<itemData.length; i++) {
                if (itemData[i].title == stockElementTitle) {
                    let itemCount = 0
                    if (i>0){
                        itemCount = i-1
                    } else {
                        itemCount = itemData.length-1
                    }
                    document.querySelector('.pi-i-d-title').textContent = itemData[itemCount].title
                    document.querySelector('.pi-i-d-subtitle').textContent = itemData[itemCount].description
                    document.querySelector('.pi-i-d-price').textContent = itemData[itemCount].price
                    document.querySelector('.page-items-item').style.background = `url(${itemData[itemCount].image}) no-repeat`
                    document.querySelector('.page-items-item').style.backgroundSize = `100%`

                }
            }
        })
        let itemSliderMobileNext = document.querySelector('#itemspage-next-mb')
        itemSliderMobileNext.addEventListener('click', () => {
            let stockElementTitle = document.querySelector('.pi-i-d-title').textContent.trim()
            for (let i=0; i<itemData.length; i++) {
                if (itemData[i].title == stockElementTitle) {
                    let itemCount = 0
                    if (i<itemData.length-1){
                        itemCount = i+1
                    } else {
                        itemCount = 0
                    }
                    document.querySelector('.pi-i-d-title').textContent = itemData[itemCount].title
                    document.querySelector('.pi-i-d-subtitle').textContent = itemData[itemCount].description
                    document.querySelector('.pi-i-d-price').textContent = itemData[itemCount].price
                    document.querySelector('.page-items-item').style.background = `url(${itemData[itemCount].image}) no-repeat`
                    document.querySelector('.page-items-item').style.backgroundSize = `100%`

                }
            }
        })
    // for items page desktop version
        let itemSliderDesktopPrew = document.querySelector('#itemspage-prew-dt')
        itemSliderDesktopPrew.addEventListener('click', () => {
            let stockElementTitle = document.querySelectorAll('.pi-i-d-title')[0].textContent.trim()
            for ( let i=0; i<itemData.length; i++ ) {
                if (itemData[i].title == stockElementTitle) {
                    let itemCountF = 0
                    let itemCountS = 1
                    if (i == 0) {
                        itemCountF = itemData.length-1
                        itemCountS = 0
                    } else if (i == 1) {
                        itemCountF = 0
                        itemCountS = 1
                    } else {
                        itemCountF = i-1
                        itemCountS = i
                    }                         
                    document.querySelectorAll('.pi-i-d-title')[0].textContent = itemData[itemCountF].title
                    document.querySelectorAll('.pi-i-d-subtitle')[0].textContent = itemData[itemCountF].description
                    document.querySelectorAll('.pi-i-d-price')[0].textContent = itemData[itemCountF].price
                    document.querySelectorAll('.page-items-item')[0].style.background = `url(${itemData[itemCountF].image}) no-repeat`
                    document.querySelectorAll('.page-items-item')[0].style.backgroundSize = `100%`
                    document.querySelectorAll('.pi-i-d-title')[1].textContent = itemData[itemCountS].title
                    document.querySelectorAll('.pi-i-d-subtitle')[1].textContent = itemData[itemCountS].description
                    document.querySelectorAll('.pi-i-d-price')[1].textContent = itemData[itemCountS].price
                    document.querySelector('.item-ms-i').style.background = `url(${itemData[itemCountS].image}) no-repeat`
                    document.querySelector('.item-ms-i').style.backgroundSize = `100%`
    
                }
            }
        })
        let itemSliderDesktopNext = document.querySelector('#itemspage-next-dt')
        itemSliderDesktopNext.addEventListener('click', () => {
            let stockElementTitle = document.querySelectorAll('.pi-i-d-title')[0].textContent.trim()
            for ( let i=0; i<itemData.length; i++ ) {
                if (itemData[i].title == stockElementTitle) {
                    let itemCountF = 0
                    let itemCountS = 1
                    if (i < itemData.length-2) {
                        itemCountF = i+1
                        itemCountS = i+2
                    } else if (i < itemData.length-1) {
                        itemCountF = i+1
                        itemCountS = 0
                    } else {
                        itemCountF = 0
                        itemCountS = 1
                    }              
                    document.querySelectorAll('.pi-i-d-title')[0].textContent = itemData[itemCountF].title
                    document.querySelectorAll('.pi-i-d-subtitle')[0].textContent = itemData[itemCountF].description
                    document.querySelectorAll('.pi-i-d-price')[0].textContent = itemData[itemCountF].price
                    document.querySelectorAll('.page-items-item')[0].style.background = `url(${itemData[itemCountF].image}) no-repeat`
                    document.querySelectorAll('.page-items-item')[0].style.backgroundSize = `100%`
                    document.querySelectorAll('.pi-i-d-title')[1].textContent = itemData[itemCountS].title
                    document.querySelectorAll('.pi-i-d-subtitle')[1].textContent = itemData[itemCountS].description
                    document.querySelectorAll('.pi-i-d-price')[1].textContent = itemData[itemCountS].price
                    document.querySelector('.item-ms-i').style.background = `url(${itemData[itemCountS].image}) no-repeat`
                    document.querySelector('.item-ms-i').style.backgroundSize = `100%`
    
                }
            }
        })

// GARANTPAGE
    // for garant page mobile
        let garantSliderMobilePrew = document.querySelector('#garantpage-prew-mb')
        garantSliderMobilePrew.addEventListener('click', () => {
            let stockElementTitle = document.querySelector('.page-g-i-t-text').textContent.trim()
            for (let i=0; i<garantData.length; i++) {
                if (garantData[i].title == stockElementTitle) {
                    let itemCount = 0
                    if (i>0){
                        itemCount = i-1
                    } else {
                        itemCount = garantData.length-1
                    }
                    document.querySelector('.page-g-i-t-text').textContent = garantData[itemCount].title
                    document.querySelector('.page-g-i-s-text').textContent = garantData[itemCount].subtitle
                    document.querySelector('.page-g-i-image').src = garantData[itemCount].image

                }
            }
        })
        let garantSliderMobileNext = document.querySelector('#garantpage-next-mb')
        garantSliderMobileNext.addEventListener('click', () => {
            let stockElementTitle = document.querySelector('.page-g-i-t-text').textContent.trim()
            for (let i=0; i<garantData.length; i++) {
                if (garantData[i].title == stockElementTitle) {
                    let itemCount = 0
                    if (i<garantData.length-1){
                        itemCount = i+1
                    } else {
                        itemCount = 0
                    }
                    document.querySelector('.page-g-i-t-text').textContent = garantData[itemCount].title
                    document.querySelector('.page-g-i-s-text').textContent = garantData[itemCount].subtitle
                    document.querySelector('.page-g-i-image').src = garantData[itemCount].image

                }
            }
        })

// FEEDBACKPAGE
    // for feedback page mobile
        let feedbackSliderMobilePrew = document.querySelector('#feedbackpage-prew-mb')
        feedbackSliderMobilePrew.addEventListener('click', () => {
            let stockElementTitle = document.querySelector('.page-f-i-h-title').textContent.trim()
            for (let i=0; i<feedbackData.length; i++) {
                if ('@'+feedbackData[i].nickname == stockElementTitle) {
                    let itemCount = 0
                    if (i>0){
                        itemCount = i-1
                    } else {
                        itemCount = feedbackData.length-1
                    }
                    document.querySelector('.page-f-i-h-title').textContent = '@'+feedbackData[itemCount].nickname
                    document.querySelector('.page-f-i-h-image').src = feedbackData[itemCount].logo
                    document.querySelector('.page-f-i-d-text').textContent = '"'+feedbackData[itemCount].text+'"'
                    document.querySelector('.page-feedback-item').style.background = `url(${feedbackData[itemCount].image}) no-repeat`
                    document.querySelector('.page-feedback-item').style.backgroundSize = `100%`
                }
            }
        })
        let feedbackSliderMobileNext = document.querySelector('#feedbackpage-next-mb')
        feedbackSliderMobileNext.addEventListener('click', () => {
            let stockElementTitle = document.querySelector('.page-f-i-h-title').textContent.trim()
            for (let i=0; i<feedbackData.length; i++) {
                if ('@'+feedbackData[i].nickname == stockElementTitle) {
                    let itemCount = 0
                    if (i<feedbackData.length-1){
                        itemCount = i+1
                    } else {
                        itemCount = 0
                    }
                    document.querySelector('.page-f-i-h-title').textContent = '@'+feedbackData[itemCount].nickname
                    document.querySelector('.page-f-i-d-text').textContent = '"'+feedbackData[itemCount].text+'"'
                    document.querySelector('.page-f-i-h-image').src = feedbackData[itemCount].logo
                    document.querySelector('.page-feedback-item').style.background = `url(${feedbackData[itemCount].image}) no-repeat`
                    document.querySelector('.page-feedback-item').style.backgroundSize = `100%`
                }
            }
        })
    // for feedback page tablet
        let feedbackSliderTabletPrew = document.querySelector('#feedbackpage-prew-tb')
        feedbackSliderTabletPrew.addEventListener('click', () => {
            let stockElementTitle = document.querySelectorAll('.tfbs')[0].textContent.trim()
            for ( let i=0; i<feedbackData.length; i++ ) {
                if ("@"+feedbackData[i].nickname == stockElementTitle) {
                    let itemCountF = 0
                    let itemCountS = 1
                    let itemCountT = 2
                    let itemCountV = 3
                    if (i == 0) {
                        itemCountF = feedbackData.length-4
                        itemCountS = feedbackData.length-3
                        itemCountT = feedbackData.length-2
                        itemCountV = feedbackData.length-1
                    } else {
                        itemCountF = i-4
                        itemCountS = i-3
                        itemCountT = i-2
                        itemCountV = i-1
                    }
                    document.querySelectorAll('.tfbs')[0].textContent = "@"+feedbackData[itemCountF].nickname
                    document.querySelectorAll('.sfbs')[0].textContent = feedbackData[itemCountF].text
                    document.querySelectorAll('.ifbs')[0].style.background = `url(${feedbackData[itemCountF].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[0].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[0].src = feedbackData[itemCountF].logo
                    document.querySelectorAll('.tfbs')[1].textContent = "@"+feedbackData[itemCountS].nickname
                    document.querySelectorAll('.sfbs')[1].textContent = feedbackData[itemCountS].text
                    document.querySelectorAll('.ifbs')[1].style.background = `url(${feedbackData[itemCountS].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[1].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[1].src = feedbackData[itemCountS].logo
                    document.querySelectorAll('.tfbs')[2].textContent = "@"+feedbackData[itemCountT].nickname
                    document.querySelectorAll('.sfbs')[2].textContent = feedbackData[itemCountT].text
                    document.querySelectorAll('.ifbs')[2].style.background = `url(${feedbackData[itemCountT].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[2].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[2].src = feedbackData[itemCountT].logo
                    document.querySelectorAll('.tfbs')[3].textContent = "@"+feedbackData[itemCountV].nickname
                    document.querySelectorAll('.sfbs')[3].textContent = feedbackData[itemCountV].text
                    document.querySelectorAll('.ifbs')[3].style.background = `url(${feedbackData[itemCountV].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[3].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[3].src = feedbackData[itemCountV].logo
                }

            }
        })
        let feedbackSliderTabletNext = document.querySelector('#feedbackpage-next-tb')
        feedbackSliderTabletNext.addEventListener('click', () => {
            let stockElementTitle = document.querySelectorAll('.tfbs')[0].textContent.trim()
            for ( let i=0; i<feedbackData.length; i++ ) {
                if ("@"+feedbackData[i].nickname == stockElementTitle) {
                    let itemCountF = i+4
                    let itemCountS = i+5
                    let itemCountT = i+6
                    let itemCountV = i+7
                    if (itemCountF>feedbackData.length-1) {
                        itemCountF = 0
                        itemCountS = 1
                        itemCountT = 2
                        itemCountV = 4
                    }
                    document.querySelectorAll('.tfbs')[0].textContent = "@"+feedbackData[itemCountF].nickname
                    document.querySelectorAll('.sfbs')[0].textContent = feedbackData[itemCountF].text
                    document.querySelectorAll('.ifbs')[0].style.background = `url(${feedbackData[itemCountF].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[0].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[0].src = feedbackData[itemCountF].logo
                    document.querySelectorAll('.tfbs')[1].textContent = "@"+feedbackData[itemCountS].nickname
                    document.querySelectorAll('.sfbs')[1].textContent = feedbackData[itemCountS].text
                    document.querySelectorAll('.ifbs')[1].style.background = `url(${feedbackData[itemCountS].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[1].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[1].src = feedbackData[itemCountS].logo
                    document.querySelectorAll('.tfbs')[2].textContent = "@"+feedbackData[itemCountT].nickname
                    document.querySelectorAll('.sfbs')[2].textContent = feedbackData[itemCountT].text
                    document.querySelectorAll('.ifbs')[2].style.background = `url(${feedbackData[itemCountT].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[2].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[2].src = feedbackData[itemCountV].logo
                    document.querySelectorAll('.tfbs')[3].textContent = "@"+feedbackData[itemCountV].nickname
                    document.querySelectorAll('.sfbs')[3].textContent = feedbackData[itemCountV].text
                    document.querySelectorAll('.ifbs')[3].style.background = `url(${feedbackData[itemCountV].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[3].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[3].src = feedbackData[itemCountV].logo

                }

            }

        })
    // for feedback page desktop
        let feedbackSliderDesktopPrew = document.querySelector('#feedbackpage-prew-dt')
        feedbackSliderDesktopPrew.addEventListener('click', () => {
            let stockElementTitle = document.querySelectorAll('.tfbs')[0].textContent.trim()
            for ( let i=0; i<feedbackData.length; i++ ) {
                if ("@"+feedbackData[i].nickname == stockElementTitle) {
                    let itemCountF = 0
                    let itemCountS = 1
                    let itemCountT = 2
                    if (i == 0) {
                        itemCountF = feedbackData.length-3
                        itemCountS = feedbackData.length-2
                        itemCountT = feedbackData.length-1
                    } else {
                        itemCountF = i-3
                        itemCountS = i-2
                        itemCountT = i-1
                    }
                    document.querySelectorAll('.tfbs')[0].textContent = "@"+feedbackData[itemCountF].nickname
                    document.querySelectorAll('.sfbs')[0].textContent = feedbackData[itemCountF].text
                    document.querySelectorAll('.ifbs')[0].style.background = `url(${feedbackData[itemCountF].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[0].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[0].src = feedbackData[itemCountF].logo
                    document.querySelectorAll('.tfbs')[1].textContent = "@"+feedbackData[itemCountS].nickname
                    document.querySelectorAll('.sfbs')[1].textContent = feedbackData[itemCountS].text
                    document.querySelectorAll('.ifbs')[1].style.background = `url(${feedbackData[itemCountS].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[1].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[1].src = feedbackData[itemCountS].logo
                    document.querySelectorAll('.tfbs')[2].textContent = "@"+feedbackData[itemCountT].nickname
                    document.querySelectorAll('.sfbs')[2].textContent = feedbackData[itemCountT].text
                    document.querySelectorAll('.ifbs')[2].style.background = `url(${feedbackData[itemCountT].image}) no-repeat`
                    document.querySelectorAll('.ifbs')[2].style.backgroundSize = `100%`
                    document.querySelectorAll('.page-f-i-h-image')[2].src = feedbackData[itemCountT].logo
                }
            }        
        })
        let feedbackSliderDesktopNext = document.querySelector('#feedbackpage-next-dt')
        feedbackSliderDesktopNext.addEventListener('click', () => {
                let stockElementTitle = document.querySelectorAll('.tfbs')[0].textContent.trim()
                for ( let i=0; i<feedbackData.length; i++ ) {
                    if ("@"+feedbackData[i].nickname == stockElementTitle) {
                        let itemCountF = i+3
                        let itemCountS = i+4
                        let itemCountT = i+5
                        if (itemCountF>feedbackData.length-1) {
                            itemCountF = 0
                            itemCountS = 1
                            itemCountT = 2
                        }
                        document.querySelectorAll('.tfbs')[0].textContent = "@"+feedbackData[itemCountF].nickname
                        document.querySelectorAll('.sfbs')[0].textContent = feedbackData[itemCountF].text
                        document.querySelectorAll('.ifbs')[0].style.background = `url(${feedbackData[itemCountF].image}) no-repeat`
                        document.querySelectorAll('.ifbs')[0].style.backgroundSize = `100%`
                        document.querySelectorAll('.page-f-i-h-image')[0].src = feedbackData[itemCountF].logo
                        document.querySelectorAll('.tfbs')[1].textContent = "@"+feedbackData[itemCountS].nickname
                        document.querySelectorAll('.sfbs')[1].textContent = feedbackData[itemCountS].text
                        document.querySelectorAll('.ifbs')[1].style.background = `url(${feedbackData[itemCountS].image}) no-repeat`
                        document.querySelectorAll('.ifbs')[1].style.backgroundSize = `100%`
                        document.querySelectorAll('.page-f-i-h-image')[1].src = feedbackData[itemCountS].logo
                        document.querySelectorAll('.tfbs')[2].textContent = "@"+feedbackData[itemCountT].nickname
                        document.querySelectorAll('.sfbs')[2].textContent = feedbackData[itemCountT].text
                        document.querySelectorAll('.ifbs')[2].style.background = `url(${feedbackData[itemCountT].image}) no-repeat`
                        document.querySelectorAll('.ifbs')[2].style.backgroundSize = `100%`
                        document.querySelectorAll('.page-f-i-h-image')[2].src = feedbackData[itemCountT].logo

        
                    }
                }
        })
