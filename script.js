const name = "Zara Darkbane";
const characterClass = "Hechicera";
let level = 7;
let health = 100;
let mana = 120;
let attack = 45;
let defense = 30;
const spellCost = 30;
let isStunned = false;

function calculateDamage(attack, defense){
    const damage = attack - defense;
    return damage > 0 ? damage : 0;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
}

function getPresentation(name, characterClass, level){
    return `${name} – ${characterClass} (Nivel ${level})`;
}

console.log(calculateDamage(attack, defense));
console.log(isAlive(health));
console.log(canCastSpell(mana, spellCost, isStunned));
console.log(getPresentation(name, characterClass, level));