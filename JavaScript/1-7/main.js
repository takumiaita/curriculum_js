class Taiyaki {
    constructor(inside){
        this.inside = inside;
    }

    showinside() {
        console.log(`中身は${this.inside}です。`);
    }
}

let anko = new Taiyaki("あんこ");
anko.showinside();
let cream = new Taiyaki("クリーム");
cream.showinside();
let cheeze = new Taiyaki("チーズ");
cheeze.showinside();