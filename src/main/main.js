'use strict';

function fizbuzzwhizz(a, b, c){
    if((n.toString().indexOf(a.toString()))>-1){
        return 'Fizz';
    }else if(n%a==0&&n%b==0&&n%c==0){
        return 'FizzBuzzWhizz'
    }else if(n%a==0&&n%b==0){
        return 'FizzBuzz';
    }else if(n%a==0&&n%c==0){
        return 'FizzWhizz'
    }else if(n%b==0&&n%c==0){
        return 'BuzzWhizz'
    }else if (n%a==0){
        return 'Fizz';
    }else if(n%b==0){
        return 'Buzz';
    }else if(n%c==0){
        return 'Whizz';
    }else
        return n;
}
