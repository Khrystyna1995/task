//Single Element in a Sorted Array

let array = [3,3,7,7,10,11,11];

const singleNonDuplicate = (nums) => {

    let left = 0;
    let right = nums.length;
    let mid;

    while (left <= right) {
         mid = Math.floor((left + right) / 2);

        if (nums[mid] === nums[mid + 1]) {
            if (mid % 2 === 0) left = mid + 1;
            else right = mid;
        } else
            if (nums[mid] === nums[mid - 1]) {

                if (mid % 2 === 0) right = mid;

                else
                    left = mid + 1;
        }
        else return nums[mid];
    }
}

console.log(singleNonDuplicate(array));

//Roman to Integer

let romanToInt = function(s) {
    let arr = ['I','V','X','L','C','D','M'];

    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let sum = 0;
    let prevIndex = 0;

    for(let i = s.length - 1; i >= 0; i--){

        if(arr.indexOf(s[i]) >= prevIndex){
            sum = sum + values[s[i]];
        } else{
            sum = sum - values[s[i]];
        }
        prevIndex = arr.indexOf(s[i]);
    }

    return sum;
};

console.log(romanToInt('MVII'))


//Longest Valid Parentheses

let longestValidParentheses = function(s) {

    let open = 0;
    let close = 0;
    let maxLength = 0;

        for (let i = 0; i<s.length; i++){
             if(s[i] === '('){
               open++
    }
            if(s[i] === ')'){
               close++
    }
    if(open === close){
        maxLength = Math.max(maxLength, open + close)
    } else
        if(close > open){
            open = 0;
            close = 0;
        }
}
    open = 0;
    close = 0;

    for(let i = s.length - 1; i>=0; i--){
        if(s[i] === '('){
        open++;
    }
        if(s[i] === ')'){
        close++;
    }
        if(open === close){
        maxLength = Math.max(maxLength, open + close);
    } else
        if(open > close){
            open = 0;
            close = 0;
        }
}
    return maxLength;
};

console.log(longestValidParentheses(''));
