let imgbox=document.querySelector('.imagebox')
let img=document.getElementById('imgid')
// document.querySelector('#fullimg').style.display='flex'
// document.style.back


function openfullimg(src){
    imgbox.style.display='flex';
    img.src=src;    


}
let cross=document.getElementById('cross')
function closeimg(){
    imgbox.style.display='none';
}
// openfullimg();
function top1() {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scrolling
    });
}