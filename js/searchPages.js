const pages = [
    {
        pageName: "home",
        pageLink: "../index.html"
    },
    {
        pageName: "portfolio",
        pageLink: "../pages/portfolio.html"
    },
    {
        pageName: "gallery",
        pageLink: "../pages/gallery.html"
    },
    {
        pageName: "typing test",
        pageLink: "../pages/typing_test.html"
    },
    {
        pageName: "release notes",
        pageLink: "../pages/release_notes.html"
    }
];

let createListItem = iteration => {
    // this creates a list and appends everything
    let a = $("<a></a>");
    a.attr("class","dropdown-item py-1 link-primary fw-bold");
    a.attr("href",`${pages[iteration].pageLink}`);
    a.text(`${pages[iteration].pageName.toLowerCase()}`);
    $(".searchItems").append(a);
}

let listItems = () => {
    // this builds the entire dropdown when texts match
    $(".searchItems").empty()
    let tempArray = [], arrayForSBLength = [];
    for(let item of pages) tempArray.push(item.pageName)
    tempArray.forEach((item,index) => arrayForSBLength[index] = tempArray[index].substring(0,$(".searchbox").val().length))
    pages.forEach((item,index) => {
        if($(".searchbox").val().toLowerCase() === arrayForSBLength[index].toLowerCase()) {
            createListItem(index); show($(".searchItems"))
        }
    })
    tempArray.splice(0,tempArray.length);
    arrayForSBLength.splice(0,arrayForSBLength.length);
}

let show = element => $(element).css("display","block")
let hide = element => $(element).css("display","none")

$(".searchbox").on("keydown", e => {
    if(e.key === "Enter") {
        e.preventDefault();
        if($(".searchItems").children().first().attr("href") !== undefined) self.location = `${$(".searchItems").children().first().attr("href")}`
        else $(".pageNotFound").modal("show")
    }
})

$(document).on("click", e => {
    if(!$(".searchbox").is(":focus")) {
        hide($(".searchItems"))
        $(".searchbox").attr("class","searchbox form-control shadow-none border border-1 border-muted")
    } else $(".searchbox").attr("class","searchbox form-control shadow-none border border-1 border-muted rounded-0 rounded-top")
})

$(".searchbox").on("keyup", e => {
    listItems();
    if(e.key === "Escape") {
        hide($(".searchItems"));
        $(".searchbox").trigger("blur")
        $(".searchbox").attr("class","searchbox form-control shadow-none border border-1 border-muted")
    }
})

$(document).on("keyup", e => {
    if(e.ctrlKey && e.key.toLowerCase() === "y") self.location = `${pages[0].pageLink}`
    if(e.key === "?") $("#modalHelp").modal("show")
    if(e.key === "/") {
        e.preventDefault(); $(".searchbox").trigger("focus")
        $(".searchbox").attr("class","searchbox form-control shadow-none border border-1 border-muted rounded-0 rounded-top")
    }
})