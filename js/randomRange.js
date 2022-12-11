const generateNumber = {
    process: () => {
        console.log();
        if(parseInt($(".from").val()) < parseInt($(".to").val())) {
            $(".output").attr("class","output h2 mt-5")
            $(".output").text(Math.ceil((Math.random() * $(".to").val()) + $(".from").val()))
        } else {
            $(".output").attr("class","output h5 mt-5 text-danger")
            $(".output").text("First value must not be greater than second value!")
        } 
    }
}