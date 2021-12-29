let contenderContainer = document.getElementById('contenderContainer')

const Contenders = [{
    name: 'Benjamin',
    img: 'benjamin.jpg',
    link: {
        youtube: 'https://www.youtube.com/c/BenjaminVerrecchia',
        instagram: 'https://www.instagram.com/benjaminverrecchia/',
    },
    statut: false,
},{
    name: 'Lucas Studio',
    img: 'lucasstudio.jpg',
    link: {
        youtube: 'https://www.youtube.com/channel/UCfMw_NLtTEur_Gz7kpwvQGA',
        instagram: 'https://www.instagram.com/lucas_studioyt/',
    },
    statut: false,
},{
    name: 'Alaïa',
    img: 'alaia.jpg',
    link: {
        youtube: 'https://www.youtube.com/c/Ala%C3%AFaJeanneau',
        instagram: 'https://www.instagram.com/alaiajeanneau/',
        tiktok: 'https://www.tiktok.com/@alaiajeanneau',
    },
    statut: false,
},{
    name: 'Anthony Lastella',
    img: 'anthonylastella.jpg',
    link: {
        youtube: 'https://www.youtube.com/c/AnthonyLastella',
        instagram: 'https://www.instagram.com/anthonylastella/',
        tiktok: 'https://www.tiktok.com/@anthonylastella',
    },
    statut: true,
},{
    name: 'Ninoul',
    img: 'ninoul.jpg',
    link: {
        youtube: 'https://www.youtube.com/c/Ninoul',
        instagram: 'https://www.instagram.com/ninnoul/',
    },
    statut: true,
},{
    name: 'LauCarré',
    img: 'laucarre.jpg',
    link: {
        youtube: 'https://www.youtube.com/user/BlackLOfficiel',
        instagram: 'https://www.instagram.com/l.au.carre/',
        tiktok: 'https://www.tiktok.com/@l.au.carre_officiel',
    },
    statut: false,
},{
    name: 'Luane',
    img: 'luane.jpg',
    link: {
        tiktok: 'https://www.tiktok.com/@lajsuisdanslespaceee',
    },
    statut: false,
},{
    name: 'Fred',
    img: 'fred.jpg',
    link: {
        youtube: 'https://www.youtube.com/user/fredvanlong',
        instagram: 'https://www.instagram.com/fredvanlong/',
    },
    statut: true,
},{
    name: 'Raven',
    img: 'raven.jpg',
    link: {
        youtube: 'https://www.youtube.com/channel/UCxU8qpzG9COIWpurBVF8a2w/',
        instagram: 'https://www.instagram.com/raven_video/',
    },
    statut: true,
},{
    name: 'Alex',
    img: 'alex.jpg',
    link: {
        youtube: 'https://www.youtube.com/c/Souby',
        instagram: 'https://www.instagram.com/alexandresbd_/',
    },
    statut: true,
}]

let spoilCheck = document.getElementById('spoilCheck')

let createContenderCard = function() {
    contenderContainer.innerHTML = ''
    Contenders.forEach( el => {
        var divElem = document.createElement('div');
        divElem.className = 'contenderCard';
        if(el.statut || !spoilCheck.checked) {
            divElem.innerHTML = '<div class="imgContainer"><img src="./img/contender/' + el.img + '"></div><p class="nameContender">' + el.name + '</p><div class="sociallinkContender" id="social' + el.name.toLocaleLowerCase().replace(/\s+/g, '_') + '"></div>'
        } else {
            divElem.innerHTML = '<div class="imgContainer"><img src="./img/contender/' + el.img + '"><svg class="eliminateSymbol" viewBox="0 0 480 480"><rect class="st0" width="480" height="480"/><polygon points="372.02,131.42 347.98,107.37 239.5,215.85 131.02,107.37 106.98,131.42 215.56,240 106.98,348.59 131.02,372.63 239.5,264.15 347.98,372.63 372.02,348.59 263.44,240 "/></svg></div><p class="nameContender">' + el.name + '</p><div class="sociallinkContender" id="social' + el.name.toLocaleLowerCase().replace(/\s+/g, '_') + '"></div>'
        }

        contenderContainer.appendChild(divElem); 

        let socialContainer = document.getElementById('social' + el.name.toLocaleLowerCase().replace(/\s+/g, '_'))
        let allLinks = ''
        if(el.link.youtube) {
            allLinks = '<a href="' + el.link.youtube + '" target="_blank" rel="noopener noreferrer"><svg fill="#000000" viewBox="0 0 50 50"><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/></svg></a>'
        }
        if(el.link.instagram) {
            allLinks += '<a href="' + el.link.instagram + '" target="_blank" rel="noopener noreferrer"><svg fill="#000000" viewBox="0 0 30 30"><path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg></a>'
        }
        if(el.link.tiktok) {
            allLinks += '<a href="' + el.link.tiktok + '" target="_blank" rel="noopener noreferrer"><svg fill="#000000" viewBox="0 0 30 30"><path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z"/></svg></a>'
        }
        socialContainer.innerHTML = allLinks
    })
}

createContenderCard()

let videocardContainer = document.getElementById('videoCardContainer')
let videoCards = document.querySelectorAll('iframe.JS-iframeSize')

function sizeVideoFrame() {
    let widthParent = videocardContainer.offsetWidth
    if(widthParent < (1080 - 224)){
        if(widthParent < (870 - 88)){
            nbCard = 1
        } else {
            nbCard = 2
        }
    } else {
        nbCard = 3
    }
    let widthIframe = widthParent/nbCard - widthParent*0.05
    let heightIframe = widthIframe*0.5625
    videoCards.forEach(el => {
        el.style="width:"+widthIframe+"px; height:"+heightIframe+"px;"
    })
}
sizeVideoFrame()

let chars = ['㋿','㌀','㌁','㌂','㌃','㌄','㌅','㌆','㌇','㌈','㌉','㌊','㌋','㌌','㌍','㌎','㌏','㌐','㌑','㌒','㌓','㌔','㌕','㌖','㌗','㌘','㌙','㌚','㌛','㌜','㌝','㌞','㌟','㌠','㌡','㌢','㌣','㌤','㌥','㌦','㌧','㌨','㌩','㌪','㌫','㌬','㌭','㌮','㌯','㌰','㌱','㌲','㌳','㌴','㌵','㌶','㌷','㌸','㌹','㌺','㌻','㌼','㌽','㌾','㌿','㍀','㍁','㍂','㍃','㍄','㍅','㍆','㍇','㍈','㍉','㍊','㍋','㍌','㍍','㍎','㍏','㍐','㍑','㍒','㍓','㍔','㍕','㍖','㍗']

let randomDeadGuys = document.querySelectorAll('.videoDiedname>span.randomName')
let nameDeadGuys = document.querySelectorAll('.videoDiedname>span.nameDead')
let changeRandomName = function () {
    if(!spoilCheck.checked){
        nameDeadGuys.forEach(el => {
            el.style.visibility = 'hidden'
        })
        randomDeadGuys.forEach(el => {
            el.style.display = 'initial'
        })
        randomName = setInterval(function () {
            randomDeadGuys.forEach(el => {
                el.innerHTML = chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)] + chars[Math.floor(Math.random() * chars.length)]
            })
        },70)
    } else if(spoilCheck.checked) {
        clearInterval(randomName)
        nameDeadGuys.forEach(el => {
            el.style.visibility = 'visible'
        })
        randomDeadGuys.forEach(el => {
            el.style.display = 'none'
        })
    }
}

changeRandomName()