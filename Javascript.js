const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissors');
let result = document.getElementById('res');
let user = document.getElementById('user');
let comp = document.getElementById('comp');


rock.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];

    user.textContent = 'You have chosen Rock!';
    if(computer === 's'){
        comp.textContent = 'Computer have chosen Scissors!';
    }else if(computer === 'p'){
    comp.textContent = 'Computer have chosen Paper!';
    }else{
    comp.textContent = 'Computer have chosen Rock!';
    }
    
    if(computer === choices[0]){
        result.textContent = 'Draw!';
    }else if(computer === choices[1]){
        result.textContent = 'You Lost! Better Luck Next Time';
    }else{
        result.textContent = 'Congratulations, You Win!';
    }
    console.log(computer);
}, false);


paper.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    
    user.textContent = 'You have chosen Paper!';
    if(computer === 's'){
        comp.textContent = 'Computer have chosen Scissors!';
    }else if(computer === 'p'){
    comp.textContent = 'Computer have chosen Paper!';
    }else{
    comp.textContent = 'Computer have chosen Rock!';
    }
    
    if(computer === choices[1]){
        result.textContent = 'Draw!';
    }else if(computer === choices[2]){
        result.textContent = 'You Lost! Better Luck Next Time';
    }else{
        result.textContent = 'Congratulations, You Win!';
    }
    console.log(computer);
}, false);


scissor.addEventListener('click', function(){
    const choices = ['r','p','s'];
    let computer = choices[Math.floor(choices.length * Math.random())];
    
    user.textContent = 'You have chosen Scissors!';
    if(computer === 's'){
        comp.textContent = 'Computer have chosen Scissors!';
    }else if(computer === 'p'){
    comp.textContent = 'Computer have chosen Paper!';
    }else{
    comp.textContent = 'Computer have chosen Rock!';
    }
    
    if(computer === choices[2]){
        result.textContent = 'Draw!';
    }else if(computer === choices[0]){
        result.textContent = 'You Lost! Better Luck Next Time';
    }else{
        result.textContent = 'Congratulations, You Win!';
    }
    console.log(computer);
}, false);


function reset() {
    user.textContent = '';
    comp.textContent = '';
    result.textContent = 'RESULTS:';
}