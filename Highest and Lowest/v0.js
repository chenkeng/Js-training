function highAndLow(str){
    var nums = str.split(' ');
    var max = nums[0];
    var min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(max < nums[i]){
            max=nums[i];
        }else{
            min=nums[i];
        }
    }
    return max + ' ' + min;
}
console.log(highAndLow('-8 -9 0 1 2 3 6 9 7'));
console.log(highAndLow("1 1"));