var main=document.querySelector('.main')
var crsr=document.querySelector('.cursor')

main.addEventListener('mousemove',(dts)=>{
    crsr.style.left=dts.x+'px'
    crsr.style.top=dts.y+'px'
})