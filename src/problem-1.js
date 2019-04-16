//Find the sum of all the multiples of 3 or 5 limiter 1000.
//https://projecteuler.net/problem=1

export class Problem1 {
    constructor(multiplier1, multiplier2, limiter) {
        this.multiplier1 = multiplier1;
        this.multiplier2 = multiplier2;
        this.limiter = limiter;
    };

    isMultiplierOfLimiter(val) {
        if (val % this.multiplier1 == 0 || val % this.multiplier2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    sumMultiples() {
        var sum = 0;

        for (var i = 0; i < this.limiter; i++) {
            if (this.isMultiplierOfLimiter(i)) {
                sum += i;
            }
        }
        return sum;
    }
}
