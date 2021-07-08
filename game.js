//launch new game with Game.new
class Game {
    //turnLeft - number of turns in a game
    constructor() {
        this.turnLeft = 10;
        this.players = {};
        this.setPlayers();
        this.createPlayer();
    }

    createPlayer(pseudo, category) {
        let player = new category(pseudo);
        this.playersLeft[player.pseudo] = player;
    };

    setPlayers() {
        pseudo = ["Carl", "Draven", "Grace", "Moana", "Ulder"];
        category = [Assassin, Berzerker, Fighter, Monk, Paladin]

    }

    //remove a turn to 0, at 0 the game is over
    newTurn() {
        
    };
};



