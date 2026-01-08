let todayDate = new Date();
console.log(todayDate.getMonth() + 1)
console.log(todayDate.toTimeString().slice(0,8))

function timer(){
    console.log(new Date().toTimeString().slice(0,8));
}
setInterval(timer, 1000);