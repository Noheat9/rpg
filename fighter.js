class Fighter extends Characters {
    constructor(pseudo) {
        super(pseudo, "fighter", 12, 40, 4);
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