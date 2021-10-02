const $video = document.querySelector('#video')
const $play  = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

$backward.addEventListener('click', handleBackward)

function handleBackward(){
    $video.currentTime -= 10
}

$forward.addEventListener('click', handleForward)

function handleForward(){
    $video.currentTime += 10 
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdated)

function handleLoaded(){
    $progress.max = $video.duration  
}

function handleTimeUpdated(){
    $progress.value = $video.currentTime    
}

$progress.addEventListener('input', handledInput)

function handledInput(){
    $video.currentTime = $progress.value
}