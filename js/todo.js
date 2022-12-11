const todo = {
    allStorage: () => {
        let values = [], keys = Object.keys(localStorage), i = keys.length;
        while (i--) values.push(localStorage.getItem(keys[i])); // pushes key strings into values array
        for(let j = 0; j < values.length; todo.addLocalItem(values[j]), j++); // remembers and restores data unremoved
    },
    
    addLocalItem: value => {
        let outer_div = $("<div></div>"), toDo = $("<span></span>"), button_exit = $("<button></button>");
    
        outer_div.attr('class',`${value} d-flex flex-row justify-content-between p-1 bg-white text-dark rounded-custom mb-2 border border-2 border-muted fs-small`);
        
        toDo.attr('class','m-2');
        button_exit.attr('class','btn fw-light fs-small me-2 text-dark');
        button_exit.attr('onclick',`$(".${value}").remove(); localStorage.removeItem("${value}")`);
        
        toDo.text(value);
        button_exit.text('x');
        
        outer_div.append(toDo);
        outer_div.append(button_exit);
            
        $(".notes").append(outer_div);
    },

    addItem: () => {
        if($(".title").val() != ""){
            let outer_div = $("<div></div>"), toDo = $("<span></span>"), button_exit = $("<button></button>");
    
            // Setting outer div attributes
            outer_div.attr('class',`${$(".title").val()} d-flex flex-row justify-content-between p-1 bg-white text-dark rounded-custom mb-2 border border-2 border-muted fs-small`)
    
            // Setting outer div children attributes
            toDo.attr('class','m-2')
            button_exit.attr('class','btn fw-light fs-small me-2 text-dark')
            button_exit.attr('onclick',`$(".${$(".title").val()}").remove(); localStorage.removeItem("${$(".title").val()}")`)
    
            // Setting values
            toDo.text($(".title").val())
            button_exit.text('x')
    
            // Appending elements to div
            outer_div.append(toDo)
            outer_div.append(button_exit)
            
            localStorage.setItem($(".title").val(),$(".title").val())
    
            // Appending everything
            $(".notes").append(outer_div)
    
            // Resetting form values
            $(".title").val("")
        }
    },

    // This section clears the current list
    clearList: function() { $(".notes").empty(); localStorage.clear() }
}

$(window).on("load", () => todo.allStorage());
$("#title").on('keyup', e => {
    if(e.key === 'Enter') todo.addItem();
    if(e.key === "Escape") $("#title").trigger("blur");
});