let Attackvalue = 8;
let strongvalue=11;
let vidamaxima=100;
let vidamonstro=100;
let sum = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 2; j++) {
        if (i >= 2) {
            continue;
        }
        sum = sum + i + j;
    }
}
alert(sum);
function mostro(){
    return parseInt(diffi.value);
}

function attack(modo){
    let maxdamage;
switch(modo){
    case 'ATTACK':
        maxdamage=Attackvalue;
        break;
    case 'STRONG':
        maxdamage=strongvalue;
        break;
}
const damage=dealMonsterDamage(maxdamage);
vidamonstro-=damage;
const playerdamage=dealPlayerDamage(mostro());
vidamaxima-=playerdamage;
if(monsterHealthBar.value==0||monsterHealthBar.value<0){
    mensaje(1);
}
else if(playerHealthBar.value==0||playerHealthBar.value<0){
    mensaje(2);
}
else if (playerHealthBar.value==0&&monsterHealthBar.value==0){
    mensaje(3);
}
}
function accionataque(){
    attack('ATTACK');
}
function accionsuper(){
    attack('STRONG');
}
function sanar(){

    increasePlayerHealth(20/mostro());
}
function mensaje(resul){
    switch(resul){
        case 1:
            alert("Ganas");
            break;
        case 2: 
        alert("pierdes");
        break;
        case 3:
            alert("empate")
            break;
    }
}
function reset(){
    monsterHealthBar.value=100;
    playerHealthBar.value=100;
}
attackBtn.addEventListener('click',accionataque);
strongAttackBtn.addEventListener('click',accionsuper);
healBtn.addEventListener('click',sanar);
resetBtn.addEventListener('click',reset);