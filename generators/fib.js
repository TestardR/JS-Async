const fibonnaci = function *(lens, nums = [0, 1]) {
    let num1 = nums[0],
        num2 = nums[1],
        next,
        cnt = 2;

    while (cnt < lens) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        nums.push(next);
        cnt++
        yield nums;
    }

    return nums;
}

const fib = fibonnaci(10)

console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())
console.log(fib.next())