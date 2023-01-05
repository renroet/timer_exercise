function countdown (num) { 
    let count = num;
    let timer = setInterval(function (num) {
        count --;
        if(count === 0) {
            console.log('DONE!');
            clearInterval(timer);
        }
        else{ 
            console.log(count);
        }
    }, 1000)};


function randomGame () {
    let counter = 0;
    let timer = setInterval(function() {
        if(Math.random() > 0.75) {
            clearInterval(timer);
            counter++;
            // I understand that in the solution provided there was no count added for the last try, but technically the winning "throw" was still another try to reach the goal, which is why I am adding another count
            console.log(counter);
        }
        else{
            counter++;
        }
    }, 1000);
};
