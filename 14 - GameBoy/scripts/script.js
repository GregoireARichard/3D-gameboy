const cube = document.querySelector('.cube')
const cubePivot = cube.querySelector('.pivot')
const pageContent = document.querySelector('.pageContent')
const loader = document.querySelector('.loader')
const body = document.querySelector('body')
const backgroundSound = new Audio('audios/background.mp3')
const screenIntroTitle = document.querySelector('.titleAnim')
const paragraphI = document.querySelector('.paragraphI')
const paragraphI2 = document.querySelector('.paragraphI-2')
const paragraphI3 = document.querySelector('.paragraphI-3')
const menuParagraph = document.querySelector('.menuParagraph')
const language = document.querySelector('.language')
const norwegian = document.querySelector('.no')
const english = document.querySelector('.en')
const shutDownText = document.querySelector('.shutDown')
const toShutDown = document.querySelector('.toShutDown')
const systemShutDown = new Audio('audios/systemShutDown.mp3')


window.setTimeout(()=>{
    loader.style.display = 'none'
    pageContent.style.display = 'block'
},2100)

window.addEventListener('mousemove',()=>{ //3D effect motion
    const normalizedX = event.clientX / window.innerWidth 
    const normalizedY = event.clientX / window.innerHeight 
    
    const rotateY = normalizedY *40
    const rotateX = normalizedY *10
        
    cubePivot.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
    })
window.addEventListener('keydown', (event)=>{
    if(event.code === 'KeyI'){
        screenIntroTitle.style.display = 'none'
        paragraphI.style.display = 'block'
        paragraphI2.style.display = 'block'
        paragraphI3.style.display = 'block'
    }
    window.addEventListener('keydown',(event)=>{
        if(event.code === 'ArrowDown'){
           paragraphI2.style.background = 'var(--gameBoy)'
           paragraphI2.style.border = '1px solid #000000'
           paragraphI2.style.color = '#000000'
        }
        window.addEventListener('keydown',(event)=>{
            if(event.code === 'ArrowDown'){
               paragraphI2.style.background = '#000000'
               paragraphI2.style.border = '1px solid (--gameBoy)'
               paragraphI2.style.color = '#ffffff'
               paragraphI3.style.background = 'var(--gameBoy)'
               paragraphI3.style.border = '1px solid #000000'
               paragraphI3.style.color = '#000000'
            }
        })
    })
})
window.addEventListener('keydown', (event)=>{
    if(event.code === 'KeyF'){
        backgroundSound.play()
    }
    else if(event.code === 'KeyG'){
        backgroundSound.pause()
    }
})
window.addEventListener('keydown', (event)=>{
    if(event.code === "KeyS"){
        screenIntroTitle.style.display = 'none'
        paragraphI.style.display = 'none'
        paragraphI2.style.display = 'none'
        paragraphI3.style.display = 'none'
        menuParagraph.style.display = 'block'
        language.style.display = 'block'
        norwegian.style.display = 'block'
        english.style.display = 'block'
        toShutDown.style.display ='block'
    }
    window.addEventListener('keydown', (event)=>{
        if(event.code === 'KeyI'){
            menuParagraph.style.display = 'none'
            language.style.display = 'none'
            toShutDown.style.display = 'none'
        }
    })
})
window.addEventListener('keydown', (event)=>{
    if(event.code === 'KeyX'){
        shutDownText.style.display = 'block'
        screenIntroTitle.style.display = 'none'
        paragraphI.style.display = 'none'
        paragraphI2.style.display = 'none'
        paragraphI3.style.display = 'none'
        menuParagraph.style.display = 'none'
        language.style.display = 'none'
        norwegian.style.display = 'none'
        english.style.display = 'none'
        toShutDown.style.display ='none'
        window.setInterval(()=>{
            shutDownText.style.display = 'none'
        },3000)
        backgroundSound.pause()
        systemShutDown.play()
    }

})
// TRANSLATION SECTION
const translation ={
    eng: {
        gameBoyBoot:'Game boy booting... Press i to start',
        hi:'Hi Sudo, Glad to see you back buddy',
        toMainMenu: 'Press S to go to the main menu',
        switchMusic: 'Or press F/G to switch on/off the music',
        wToTheMenu: 'Welcome to the menu',
        languagesAvailable:'Two languages available:',

    },
    nor:{
        gameBoyBoot:'Game boy oppstart... trykk i å starte',
        hi: 'Hei Sudo, glad for å seg tilbake buddy',
        toMainMenu:'Trykk S for å gå til hovedmenyen',
        switchMusic:'Eller trykk F/G for å switch mellom på og av musikken',
        wToTheMenu:'Velkommen til menyen',
        languagesAvailable:'To språk tilgjengelig'
        
    }
}
norwegian.addEventListener('click', ()=>{
    gameBoyBoot.textContent = translation.nor.gameBoyBoot
    hi.textContent = translation.nor.hi
    toMainMenu.textContent = translation.nor.toMainMenu
    switchMusic.textContent = translation.nor.switchMusic
    wToTheMenu.textContent = translation.nor.wToTheMenu
    languagesAvailable.textContent = translation.nor.languagesAvailable
})
english.addEventListener('click', ()=>{
    gameBoyBoot.textContent = translation.eng.gameBoyBoot
    hi.textContent = translation.eng.hi
    toMainMenu.textContent = translation.eng.toMainMenu
    switchMusic.textContent = translation.eng.switchMusic
    wToTheMenu.textContent = translation.eng.wToTheMenu
    languagesAvailable.textContent = translation.eng.languagesAvailable
})