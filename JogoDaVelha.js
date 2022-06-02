var vetor = ['lightcoral','lightblue']
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
] 
var ids = ['card0','card1','card2','card3','card4','card5','card6','card7','card8']
var reset
let x = 0


function colorChange(num) {
    if(x > 1 ) {
        x = 0
    }
    let y = ids[num-1]
    document.getElementById(y).style.backgroundColor = vetor[x]
    x++
}

function reset() {
    ids.forEach(function(item){
        document.getElementById(item).style.backgroundColor = 'whitesmoke'
    })
}


