// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    };
    attack(){
        return this.strength;
    };
    receiveDamage(damage){
        this.health -=damage;
    };
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
       super(health,strength);
        this.name = name;
    };
    
    receiveDamage(damage){
        this.health -= damage;
        if( this.health > 0){
            return `${this.name} has received ${this.damage} points of damage`
        } else{
            return `${this.name} has died in act of combat`
        };
        
    };

    battleCry(){
        return ("Odin Owns You All!");
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
         if( this.health > 0){
            return `A Saxon has received ${this.damage} points of damage`
        } else{
            return `A Saxon has died in act of combat`
        };
    }
}

// War
class War {

    vikingArmy = [];
    saxonArmy = [];

    addViking(viking){
        //this add vikings
        this.vikingArmy.push(viking);
    };

    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    };
    
    vikingAttack(){
        let viking =  this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxonIndex = Math.floor(Math.random()* this.saxonArmy.length);
        let saxon = this.saxonArmy[saxonIndex]

        // should make a Saxon receiveDamage() equal to the strength of a Viking
        let hitmessage = saxon.receiveDamage(viking.strength);

        if (saxon.health <=0){
            this.saxonArmy.splice(saxonIndex,1)
        }
        
        return hitmessage;

    };
    
    

// A Saxon (chosen at random) has their receiveDamage() method called with the damage equal to the strength of a Viking (also chosen at random). This should only perform a single attack and the Saxon doesn't get to attack back.

// should be a function
// should receive 0 arguments
// should make a Saxon receiveDamage() equal to the strength of a Viking
// should remove dead Saxons from the army
// should return result of calling receiveDamage() of a Saxon with the strength of a Viking
// saxonAttack() method
// The Saxon version of vikingAttack(). A Viking receives damage equal to the strength of a Saxon.

// should be a function
// should receive 0 arguments
// should make a Viking receiveDamage() equal to the strength of a Saxon
// should remove dead Vikings from the army
// should return result of calling receiveDamage() of a Viking with the strength of a Saxon
}
