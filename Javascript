let bg = document.querySelector('.bg')

let text= document.querySelector('.text')

let count=0

let time=setInterval(speed, 30)

function speed()

count++

if(count==100)

{

clearInterval(time)

}

console.log(count)

text.innerText="${count}%

text.style.opacity=(scale(count,0,100,1,0))

bg.style.filter="blur(${scale(count, 0, 100,30,0)}px)

const scale=(num,in_min,in_max,out_min,out_max)=>{

return (numin_min) * (out_max out_min) / (in_max-in_min) + out_ain;

}
