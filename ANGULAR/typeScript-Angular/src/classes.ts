// Classes

/*data modifiers
  public
  private
  protect
*/

class Chacacter {
    name: string;
    strength: number;
    skill: number;

    constructor(name: string, strength: number, skill: number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.name} points `)
    }
}

// const p1 = new Chacacter("Ryu", 25, 89);
// console.log(p1.attack());


// SubClass
class Magician extends Chacacter {
    magicPoints:number;
    constructor(name: string, strength: number, skill: number, magicpoints: number) {
        super(name, strength, skill);
        this.magicPoints = magicpoints;
    }
}

const p2 = new Magician ("magician", 10, 98, 78);