// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(theDamage) {
    this.health = this.health - theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    // console.log(super.getDomage());
    if (this.health > 0) {
      return `${this.name} has received ${theDamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(theDamage) {
    super.receiveDamage(theDamage);
    if (this.health > 0) {
      return `A Saxon has received ${theDamage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    // let randomSaxon = //rand;
    // let aSaxon = saxonArmy[randomSaxon];
    let ramdomSaxonIndex = Math.floor[Math.floor(Math.random() * this.saxonArmy.length)];
    let ramdomVikingIndex = Math.floor[Math.floor(Math.random() * this.vickingArmy.length)]; 

    let randomSaxon = Math.floor[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomviking = Math.floor[Math.floor(Math.random() * this.vikingArmy.length)];

    if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(ramdomSaxonIndex,1);
    }
    return attackResultViking;

    //saxon.receiveDamage(viking.strength);

    //this.saxonArmy.pop(saxon)
  }
  //   saxonAttack(){}
  //   showStatus(){}
}
