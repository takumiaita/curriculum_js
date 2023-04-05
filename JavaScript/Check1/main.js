let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
    console.log(num + 'は偶数です');
}
//問1
for (i = 0; i <numbers.length; i++) {
    num = numbers[i];
    if (numbers[i]%2 === 0) {    
        isEven();
    } else {
        continue;
    }
}
//問2
class car {
    constructor(gass,num){
        this.gass = gass;
        this.num = num ;
    }

    getNumGass(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
    }
}
//確認
let car1 = new car(50.2,2345);
car1.getNumGass();