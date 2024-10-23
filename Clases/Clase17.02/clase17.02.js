

/*
5!=5*4*3*2*1
5! = 5*4!
5! = 5*4*3!*/

function fact(n){
    if(n == 1){
        return 1;
    }else{
        return n * fact(n-1);
    }
}

const numero = 5;
fact(numero);

/*
1 1 2 3 5 8 13...

fibo(8) -> fibo(7)+fibo(6) -> 
fibo(7) -> fibo(6)+fibo(5) ->

*/ 

function fibo(pos){
    if(pos == 1 || pos == 2){
        return 1;
    }else{
        return fibo(pos-1) + fibo(pos-2);
    }
}

function maxnrarray (arr, pos, max){
	if(pos==arr.lenght)
		return max
}
var A=[3, 6, 4, 8]