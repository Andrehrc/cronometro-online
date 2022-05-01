let demo = document.querySelector('.demo');
let mark = document.querySelector('.marcacoes')
let mark2 = '';
let startButton = document.querySelector('.start')
let stopButton = document.querySelector('.stop')
let d = new Date(0);
let ml = 31;
let show;
function showtime(){
    ml += 31;
    d.setHours(0, 0, 0, ml)
    let h = ('00'+d.getHours()).slice(-2);
    let m = ('00'+d.getMinutes()).slice(-2);
    let s = ('00'+d.getSeconds()).slice(-2);
    let ms = ('00'+d.getMilliseconds()).slice(-3)
    demo.innerHTML = h+':'+m+':'+s+':'+ms
}
function Start(){
    clearInterval(show);
    show = setInterval(showtime, 31);
}
function Stop(){
    clearInterval(show);
}
function Reset(){
    clearInterval(show);
    demo.innerHTML = '00:00:00:000';
    ml = 31;
}
startButton.addEventListener("click", toggleButton1);
function toggleButton1(){
    startButton.style.display = 'none'
    stopButton.style.display = 'block'
}
stopButton.addEventListener("click", toggleButton2);
function toggleButton2(){
    startButton.style.display = 'block'
    stopButton.style.display = 'none'
}
function Marcar(){
    mark2 = mark2 + demo.innerHTML +','+'<br/>'
    mark.innerHTML = mark2
}
function clean(){
    mark2 = ''
    mark.innerHTML = mark2
}