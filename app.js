window.onload=()=>{
main();
}

function main(){
    const root=document.getElementById('root');
    const btn=document.getElementById('change-btn');
    btn.addEventListener('click',function(){
        const bgcolor=rgbcolor();
        root.style.backgroundColor=bgcolor;

    })

}

function rgbcolor(){
    const red=Math.floor(Math.random()*255);
    const green= Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`
}