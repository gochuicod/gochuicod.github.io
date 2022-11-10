const menu = {
    all: document.querySelector(".all"),
    breakfast: document.querySelector(".breakfast"),
    lunch: document.querySelector(".lunch"),
    beverages: document.querySelector(".beverages"),
    dinner: document.querySelector(".dinner"),
    displayMenu: document.querySelector(".displayMenu"),
    items: [],
    arr:['all','breakfast','lunch','beverages','dinner'],
    i: 0,
    menuList: [
        {
            id: 1,
            title: `Longganisa`,
            category: `breakfast`,
            price: `₱181.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/b303a189-6093-4fb8-9e02-848da4b28beb.png`,
            desc: `2 pieces of mildly seasoned longganisa served with garlic rice and fried egg.`
        },
        {
            id: 2,
            title: `Chicken Sandwich w/ Fries & Drink`,
            category: `lunch`,
            price: `₱211.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/34667c53-e5fa-492a-ab6d-85574329ba35.png`,
            desc: `Crunchy. Large. Delicious. - 100% Real Chicken in a Sandwich.`
        },
        {
            id: 3,
            title: `Coke Float`,
            category: `beverages`,
            price: `₱52.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/8d6c4226-3ff6-41aa-8402-1ac0fa642a13.png`,
            desc: `Coke soda topped with creamy vanilla soft serve and rich, indulgent chocolate syrup`
        },
        {
            id: 4,
            title: `1 - pc. Breakfast Chickenjoy`,
            category: `breakfast`,
            price: `₱186.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/614362fb-11f5-4c35-a47b-99a99a10bb4b.png`,
            desc: `Philippines' best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside with garlic rice and fried egg.`
        },
        {
            id: 5,
            title: `Jolly Spaghetti w/ Burger Steak`,
            category: `lunch`,
            price: `₱144.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/fb883e2a-d994-4470-9277-2172ff8d5b02.png`,
            desc: `The meatiest, cheesiest and sweet-sarap spaghetti! Freshly prepared noodles topped with Jollibee's signature meaty spaghetti sauce, hotdog chunks and creamy grated cheese, paired with our Beefy-Saucy Burger Steak.`
        },
        {
            id: 6,
            title: `Sarsi`,
            category: `beverages`,
            price: `₱53.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/88cca511-30bd-4359-a878-15b26a76a427.png`,
            desc: `Refreshing, ice-cold Sarsi to perfectly match your favorite meal`
        },
        {
            id: 7,
            title: `Bacon, Egg, & Cheese Sandwich`,
            category: `breakfast`,
            price: `₱112.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/9db3a1fc-c5ac-44e2-aac8-13b01eaec02e.png`,
            desc: `Crispy bacon, cheese, and fried egg sandwiched between two soft buns.`
        },
        {
            id: 8,
            title: `1 - pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal`,
            category: `lunch`,
            price: '₱211.00',
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/20900c60-45db-4e5b-b430-4528e0245b77.png`,
            desc: `Your Jollibee favorites in one Supermeal: 1pc Chickenjoy with Burger Steak and Half Jolly Spaghetti, with rice and drink.`
        },
        {
            id: 9,
            title: `Pineapple Juice`,
            category: `beverages`,
            price: `₱64.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/deac9ade-a160-44e9-8ecd-77b4aedd02af.png`,
            desc: `Natural pineapple juice drink for those looking for a healthy alternative`
        },
        {
            id: 10,
            title: `1 - pc. Chickenjoy Solo`,
            category: `dinner`,
            price: `₱109.00`,
            img: `https://jb-ph-cdn.tillster.com/menu-images/prod/1af8b6ba-35f9-49ab-bb6f-dc0e57ebc2de.png`,
            desc: `Philippines’ best-tasting crispylicious, juicylicious Chickenjoy that is crispy on the outside, tender and juicy on the inside.`
        }
    ],
    main: function(value){
        this.items = [];
        this.menuList.forEach(element => {
            if(value == 'all') this.addItem(element)
            if(element.category == value) this.addItem(element);
        });
        this.displayMenu.innerHTML = this.items.join("");
    },
    addItem: function(element){
        this.items.push(`
            <div class="item-enter menu-item rounded shadow">
                <img class="item-enter" src="${element.img}">
                <div class="item-description">
                    <header>
                        <span class="item-enter">${element.title}</span>
                        <span class="item-enter text-gold">${element.price}</span>
                    </header>
                    <p class="item-enter item-text">${element.desc}</p>
                </div>
            </div>
        `);
    }
}

menu.all.addEventListener("click", () =>  { menu.main('all'); clearInterval(loop) })
menu.breakfast.addEventListener("click", () => { menu.main('breakfast'); clearInterval(loop) })
menu.lunch.addEventListener("click", () => { menu.main("lunch"); clearInterval(loop) })
menu.beverages.addEventListener("click", () => { menu.main("beverages"); clearInterval(loop)})
menu.dinner.addEventListener("click", () => { menu.main("dinner"); clearInterval(loop)})


let loop = setInterval(()=>{
    if(menu.i == menu.arr.length) menu.i = 0;
    menu.main(`${menu.arr[menu.i]}`)
    menu.i++;
},5000);