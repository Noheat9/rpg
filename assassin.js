class Assassin extends Characters {
    constructor(pseudo) {
        super(pseudo, "assassin", 6, 20, 6, status);
    }


    dealDamage(characters) {
        characters.hp -= this.dmg
        console.log(this.pseudo + ' attack ' + characters.pseudo + ' by launching an attack of(' + this.dmg + ' damage)' )
    
        characters.checkHealth();
    }

    takeDamage(characters){
        this.hp(this.hp() - characters.dmg);
        if(this.hp()<=0){
            this.die();
        }
    }

}