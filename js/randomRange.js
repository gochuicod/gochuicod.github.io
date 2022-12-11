const generateNumber = {
    process: () => {
        if($(".from").val() < $(".to").val()) {
            $(".output").attr("class","output h2 mt-5")
            $(".output").text(Math.ceil((Math.random() * $(".to").val()) + $(".from").val()))
        } else {
            $(".output").attr("class","output h5 mt-5 text-danger")
            $(".output").text("First value must not be greater than second value!")
        } 
    }
}