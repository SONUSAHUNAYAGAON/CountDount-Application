const endDate ="30 December 2023 11:39 AM";
document.getElementById('end-date').innerHTML=endDate;
const inputs=document.querySelectorAll('input');

function clock(){
    const end =new Date(endDate);
    const now = new Date()
    const diff = (end-now) / 1000;
    if(diff < 0) return;
   
    inputs[0].value=(Math.floor(diff/3600/24));
    inputs[1].value=(Math.floor(diff / 3600) % 24);
    inputs[2].value=(Math.floor(diff / 60) % 60);
    inputs[3].value=(Math.floor(diff) % 60);


    //convert indo days
    //1 days = 24hr
    //1 hrs = 60 s



}
clock()
setInterval(
    ()=>{
        clock()
    }, 
    1000
)