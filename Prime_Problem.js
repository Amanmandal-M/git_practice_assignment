function check_prime(num){
    for(let i=1;i<=num;i++){
        if(num%i){
            return true;
        }
        return false;
    }
}
check_prime(17);