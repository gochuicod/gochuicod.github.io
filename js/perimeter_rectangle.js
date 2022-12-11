const perimeterRectangle = {
    process: function() {
        let length = parseFloat($(".pr-length").val()), width = parseFloat($(".pr-width").val());
        if((!isNaN(length)) && (!isNaN(width))){
            if(length > 0 && width > 0){
                this.hide($(".errorInfo"))
                this.show($(".pr-output"))
                $(".pr-output").text(2*(length+width))
            } else {
                this.show($(".pr-output"))
                $(".pr-output").text("?")
                this.show($(".errorInfo"))
                $(".errorInfo").text("Values must be positive!")
            }
        } else {
            this.hide($(".pr-output"))
            this.hide($(".errorInfo"))
        }
    },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(window).on("load", () => perimeterRectangle.hide($(".pr-output")))
$(".pr-length").on("keyup", () => perimeterRectangle.process())
$(".pr-width").on("keyup", () => perimeterRectangle.process())