var plusOne = function(digits) {
    let str = digits.join("")
    const num = BigInt(str) + 1n
    return String(num).split('').map(Number)
    
};