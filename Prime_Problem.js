function check_prime(number){
    let factors=0;
    for(let i=1;i<=number;i++){
        if(number%i===0){
            factors++;
        }
    }
    if(factors===2){
        return true;
    }else{
        return false;
    }
}
let answer = check_prime(17);

if(answer===true){
    console.log("Prime");
}else{
    console.log("Not Prime");
}