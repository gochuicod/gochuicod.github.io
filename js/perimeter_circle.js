const perimeterCircle = {
    process: function() {
        let radius = $(".c-radius").val();
        if(!isNaN(radius) || $(".c-radius").val() !== ""){
            if(radius > 0){
                this.hide($(".errorInfo"))
                this.show($(".pc-output"))
                $(".pc-output").text(`${2*Math.PI*radius}`)
            } else {
                this.show($(".pc-output"))
                $(".pc-output").text("?")
                $(".errorInfo").text("Values must be positive!")
                this.show($(".errorInfo"))
            }
        } else {
            this.hide($(".errorInfo"))
            this.hide($(".pc-output"))
        }
    },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(window).on("load", () => perimeterCircle.hide($(".pc-output")))
$(".c-radius").on("keyup", () => perimeterCircle.process())