const rockPaperScissors = {
    choices: ["Rock","Paper","Scissors"],
    rock: function() {
        $(".player").text("Rock")
        $(".computer").text(this.choices[Math.floor(Math.random()*3)])
    },
    paper: function() {
        $(".player").text("Paper")
        $(".computer").text(this.choices[Math.floor(Math.random()*3)]);
    },
    scissors: function() {
        $(".player").text("Scissors");
        $(".computer").text(this.choices[Math.floor(Math.random()*3)]);
    }
}