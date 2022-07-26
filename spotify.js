let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
// Variable Initiallize
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))

let songs= [
    {songName:'Hara Hara Shambhu', filePath:'songs/1.mp3', coverPath:'covers/shambhu.jpg'},

    {songName:'Cheap Thrills', filePath:'songs/2.mp3', coverPath:'covers/cheapthrills.jpg'},

    {songName:'Kesariya', filePath:'songs/3.mp3', coverPath:'covers/kesariya.jpg'},

    {songName:'Let Me Love You', filePath:'4.mp3', coverPath:'covers/let me love.jpg'},

    {songName:'Mast Nazaron Se', filePath:'songs/5.mp3', coverPath:'covers/nazarose.jpg'},

    {songName:'Mehbooba Main Teri Mehbooba', filePath:'songs/6.mp3', coverPath:'covers/mehbooba.jpg'},

    {songName:'O Baby Tere Nain Sharabi', filePath:'songs/7.mp3', coverPath:'covers/o baby.jpg'},

    {songName:'Rabba Khaireya', filePath:'songs/8.mp3', coverPath:'covers/rabba.jpg'},

    {songName:'The Devils Fury - Gumma Banda Gumma', filePath:'songs/9.mp3', coverPath:'covers/Devils Fury.jpg'}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
})
// audioElement.play()

// Handle playe/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime)/(audioElement.duration) * 100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value) *( audioElement.duration/100))
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target)
        makeAllPlays()
        songIndex  = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `songs/${songIndex +1}.mp3`
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0
        audioElement.play()
        gif.style.opacity = 1
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1
    }
    audioElement.src = `songs/${songIndex +1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `songs/${songIndex +1}.mp3`
    masterSongName.innerText = songs[songIndex].songName
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle')
    masterPlay.classList.add('fa-pause-circle')

})