confirm("Let's the battle begin!")

specialAttack(characters) {
    characters.hp -= this.dmg
    console.log(this.name + ' attack ' + characters.name + ' by launching an attack of(' + this.dmg + ' damage)' )

    characters.checkHealth();
}

takeDamage(characters){
    this.hp(this.hp() - characters.dmg);
    if(this.hp()<=0){
        this.die();
    }
}

status(characters) {
    if 
}