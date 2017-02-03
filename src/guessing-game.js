class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        let range = [];
        for (let i=min; i<=max; i++){
            range.push(i);
        }
        this.range = range;
    }

    guess() {
        let midIndex = Math.floor((this.range.length)/2);
        let assumption = this.range[midIndex];
        this.midIndex = midIndex;
        return assumption;
    }


    greater() {
        this.range = this.range.slice(this.midIndex);
    }

    lower() {
        this.range = this.range.slice(0, this.midIndex + 1);
    }
}

module.exports = GuessingGame;
