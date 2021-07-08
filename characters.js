//class link to characters

class Characters {
    constructor(pseudo, category, hp, mana, dmg) {
        this.pseudo = pseudo;
        this.category = category;
        this.hp = hp;
        this.mana = mana;
        this.dmg = dmg;
    }


    checkHealth() {
        if(this.hp <= 0) {
            this.hp == 0;
            console.log(this.pseudo + " has lost !");
        }
    }
}
