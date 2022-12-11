const perimeterTriangle = {
    process: function() {
        let sideA = parseFloat($(".sidea").val()), sideB = parseFloat($(".sideb").val()), base = parseFloat($(".base").val());
            if(sideA.toFixed(2) < 0 || sideB.toFixed(2) < 0 || base.toFixed(2) < 0){
                $(".pt-output").text("?")
                this.show($(".errorInfo"))
                $(".errorInfo").text("Values must be positive!")
            } else {
                if((sideA + base) > sideB && (base + sideB) > sideA && (sideA + sideB) > base){
                    this.hide($(".errorInfo"))
                    this.show($(".pt-output"))
                    $(".pt-output").text(sideA+base+sideB)
                } else {
                    this.show($(".pt-output"))
                    $(".pt-output").text("?")
                    if((sideA + base) <= sideB){
                        this.show($(".errorInfo"))
                        $(".errorInfo").text("Side A plus Base must be greater than Side B");
                    }
                    if((base + sideB) <= sideA){
                        this.show($(".errorInfo"))
                        $(".errorInfo").text("Base plus Side B must be greater than Side A");
                    }
                    if((sideA + sideB) <= base){
                        this.show($(".errorInfo"))
                        $(".errorInfo").text("Side A plus Side B must be greater than Base");
                    }
                }
            }
    },
    show: element => $(element).css("display","block"),
    hide: element => $(element).css("display","none")
}

$(window).on("load", () => perimeterTriangle.hide($(".pt-output")))
$(".sidea").on("keyup", () => perimeterTriangle.process())
$(".sideb").on("keyup", () => perimeterTriangle.process())
$(".base").on("keyup", () => perimeterTriangle.process())