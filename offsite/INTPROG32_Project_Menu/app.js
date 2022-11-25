const menu = {
    all: document.querySelector(".all"),
    breakfast: document.querySelector(".breakfast"),
    lunch: document.querySelector(".lunch"),
    beverages: document.querySelector(".beverages"),
    dinner: document.querySelector(".dinner"),
    displayMenu: document.querySelector(".displayMenu"),
    itemEnter: document.querySelector(".item-enter"),
    modal: document.querySelector(".modal"),
    items: [],
    arr:['all','breakfast','lunch','beverages','dinner'],
    i: 1,
    menuList: [
        {
            id: 1,
            title: `Longganisa`,
            category: `breakfast`,
            price: `₱181.00`,
            img: `./images/longganisa.png`,
            desc: `2 pieces of mildly seasoned longganisa served with garlic rice and fried egg.`
        },
        {
            id: 2,
            title: `Chicken Sandwich w/ Fries & Drink`,
            category: `lunch`,
            price: `₱211.00`,
            img: `./images/chickenswfriesndrink.png`,
            desc: `Crunchy. Large. Delicious. - 100% Real Chicken in a Sandwich.`
        },
        {
            id: 3,
            title: `Coke Float`,
            category: `beverages`,
            price: `₱52.00`,
            img: `./images/cokefloat.png`,
            desc: `Coke soda topped with creamy vanilla soft serve and rich, indulgent chocolate syrup`
        },
        {
            id: 4,
            title: `1 - pc. Breakfast Chickenjoy`,
            category: `breakfast`,
            price: `₱186.00`,
            img: `./images/bfastchickenjoy.png`,
            desc: `Philippines' best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside with garlic rice and fried egg.`
        },
        {
            id: 5,
            title: `Jolly Spaghetti w/ Burger Steak`,
            category: `lunch`,
            price: `₱144.00`,
            img: `./images/jollyspagwithburgersteak.png`,
            desc: `The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee's signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with our Beefy-Saucy Burger Steak.`
        },
        {
            id: 6,
            title: `Sarsi`,
            category: `beverages`,
            price: `₱53.00`,
            img: `./images/sarsi.png`,
            desc: `Refreshing, ice-cold Sarsi to perfectly match your favorite meal`
        },
        {
            id: 7,
            title: `Bacon, Egg, & Cheese Sandwich`,
            category: `breakfast`,
            price: `₱112.00`,
            img: `./images/baconeggcheesesw.png`,
            desc: `Crispy bacon, cheese, and fried egg sandwiched between two soft buns.`
        },
        {
            id: 8,
            title: `1 - pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal`,
            category: `lunch`,
            price: '₱211.00',
            img: `./images/chickenjoyburgersteakhalfjollyspagsupermeal.png`,
            desc: `Your Jollibee favorites in one Supermeal: 1pc Chickenjoy with Burger Steak and Half Jolly Spaghetti, with rice and drink.`
        },
        {
            id: 9,
            title: `Pineapple Juice`,
            category: `beverages`,
            price: `₱64.00`,
            img: `./images/pineapplejuice.png`,
            desc: `Natural pineapple juice drink for those looking for a healthy alternative`
        },
        {
            id: 10,
            title: `1 - pc. Chickenjoy Solo`,
            category: `dinner`,
            price: `₱109.00`,
            img: `./images/chickenjoysolo.png`,
            desc: `Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.`
        }
    ],
    main: function(value){
        this.items = [];
        this.displayMenu.style.gridTemplateColumns = "";
        this.menuList.forEach(element => {
            if(value == 'all') this.addItem(element)
            if(element.category == value) this.addItem(element);
        });
        this.displayMenu.innerHTML = this.items.join("");
    },
    addItem: function(element){
        this.items.push(`
            <div class="item-enter menu-item rounded shadow" onclick="menu.focusItem(this)">
                <div class="d-flex justify-content-center">
                    <img class="item-enter" src="${element.img}">
                </div>
                <div class="item-description">
                    <header>
                        <span class="item-enter">${element.title}</span>
                        <span class="item-enter text-gold">${element.price}</span>
                    </header>
                    <p class="item-enter item-text">${element.desc}</p>
                </div>
            </div>
        `);
    },
    focusItem: function(data) {
        let clone = data.cloneNode(true)
        clone.classList.add("modal-content")
        clone.style.gridTemplateColumns = "1fr"
        clone.children[1].children[1].style.fontSize = "1.5rem"
        clone.children[1].children[0].children[1].style.fontSize = "1.5rem"
        clone.children[1].children[0].children[0].style.fontSize = "1.5rem"
        clone.children[0].children[0].style.width = "150%"
        clone.children[0].children[0].style.height = "auto"
        clearInterval(loop)
        this.removeAllChildNodes(this.modal)
        this.modal.append(clone)
        this.modal.style.display = "flex"
    },
    removeAllChildNodes: parent => { while(parent.firstChild) parent.removeChild(parent.firstChild) },
    hide: element => element.style.display = "none"
}

menu.all.addEventListener("click", () =>  { menu.main('all'); clearInterval(loop) })
menu.breakfast.addEventListener("click", () => { menu.main('breakfast'); clearInterval(loop) })
menu.lunch.addEventListener("click", () => { menu.main("lunch"); clearInterval(loop) })
menu.beverages.addEventListener("click", () => { menu.main("beverages"); clearInterval(loop)})
menu.dinner.addEventListener("click", () => { menu.main("dinner"); clearInterval(loop)})

menu.all.click(); menu.all.focus();
let loop = setInterval(()=>{
    if(menu.i == menu.arr.length) menu.i = 0
    menu.main(`${menu.arr[menu.i]}`)
    document.querySelector(`.${menu.arr[menu.i]}`).focus()
    menu.i++
},5000);

window.onclick = e => e.target == menu.modal ? menu.hide(menu.modal) : false;