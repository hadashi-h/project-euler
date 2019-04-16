//Find the sum of all the multiples of 3 or 5 below 1000.

export class Problem1 {
    constructor(multiplier1, multiplier2, below) {
        this.multiplier1 = multiplier1;
        this.multiplier2 = multiplier2;
        this.below = below;
    };


    isMultipleOf(val) {
        if (val % this.multiplier1 == 0 || val % this.multiplier2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    sumValues() {
        var sum = 0;
        for (var i = 0; i < this.below; i++) {
            if (this.isMultipleOf(i)) {
                sum = sum + i;
            }
        }
        return sum;
    }
} 
