class Desserts {
    constructor (type, calories) {
        this.type = type;
        this.calories = calories;
    }
}

class IceCream extends Desserts {
    constructor (type, calories, flavor, scoops) {
        super(type, calories); 
        this.flavor = flavor;
        this.scoops = scoops;
    }
    
    includeSpoon() {
        if(this.scoops === 3) {
            console.log('Here is your spoon!')
        }
    }
}

const vanillaIceCream =  new IceCream('Ice Cream', 340, 'Vanilla', 3); 
        console.log(vanillaIceCream);
        vanillaIceCream.includeSpoon();

const vanillaIceCream.flavor = 'vanilla';

let ourSentence = `I like ${vanillaIceCream.flavor}`;
console.log(ourSentence);
