function check(n:any){
    if(Array.isArray(n)){
        console.log("array")
    } else{
        console.log(typeof(n))
    }
}
check([1,2,3]);
check({a:5})
check(7)