const sec = document.getElementById('sec');
const min = document.getElementById('min');
let cnt = 0;
let m = 0;
let keyCnt = 0;
let key = document.getElementById('key')

let btn = document.getElementById('button')



function Timer() {
    setInterval(()=>{
        if(cnt == 60) {
            m += 1;
            cnt = 0;
        }
        if(m == 1) {
            console.log(getCount());
            
        }
        cnt += 1;
        min.innerText = m < 10 ? `0${m}`:m;
        sec.innerText = cnt < 10 ? `0${cnt}`:cnt;
    },1000)
}

Timer()

btn.addEventListener('click', ()=>{
    

})

function getCount() {
    let text = key.value.split(' ');

    let space = text.length;
    let res = space % 2 ==0 ? space/2:(space/2)+1;

    text.forEach(element => {
        keyCnt += element.length;
    });

    return Number(keyCnt)+ Number(res);
}

