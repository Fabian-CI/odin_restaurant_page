import './menu-page-style.css';

function getMenuPage() {
    const container = document.getElementById('content');
    function componentMenu() {
        const menu = document.createElement('div');
        menu.classList.add('wb-menu');

        const menuContainer1 = document.createElement('div');
        menuContainer1.classList.add('menu-container');
        menu.appendChild(menuContainer1);

        const menuCategory1 = document.createElement('h3');
        menuCategory1.innerText = "APPETIZERS";
        menuContainer1.appendChild(menuCategory1);

        const menuWrapper1 = document.createElement('div');
        menuWrapper1.classList.add('menu-wrapper');
        menuContainer1.appendChild(menuWrapper1);
// Appetizers Foods:
        const food1 = document.createElement('div');
        food1.classList.add('menu-food');
        menuWrapper1.appendChild(food1);
        const foodName1 = document.createElement('h4');
        foodName1.innerText = "Salmon Crab Cakes";
        food1.appendChild(foodName1);
        const foodDesc1 = document.createElement('span');
        foodDesc1.innerText = "fresh blue crab and salmon with a sriracha aioli and a curried mango and pineapple chutney";
        food1.appendChild(foodDesc1);
        const foodPrice1 = document.createElement('span');
        foodPrice1.classList.add('food-price');
        foodPrice1.innerText = "$17.95";
        food1.appendChild(foodPrice1);

        const food2 = document.createElement('div');
        food2.classList.add('menu-food');
        menuWrapper1.appendChild(food2);
        const foodName2 = document.createElement('h4');
        foodName2.innerText = "Semolina Crusted Calamari";
        food2.appendChild(foodName2);
        const foodDesc2 = document.createElement('span');
        foodDesc2.innerText = "served with a trio of dips: sweet curried aioli, sweet chili and basil pesto aioli";
        food2.appendChild(foodDesc2);
        const foodPrice2 = document.createElement('span');
        foodPrice2.classList.add('food-price');
        foodPrice2.innerText = "$17.95";
        food2.appendChild(foodPrice2);

        const food3 = document.createElement('div');
        food3.classList.add('menu-food');
        menuWrapper1.appendChild(food3);
        const foodName3 = document.createElement('h4');
        foodName3.innerText = "Hoisin Glazed Meatballs";
        food3.appendChild(foodName3);
        const foodDesc3 = document.createElement('span');
        foodDesc3.innerText = "served with an almond puree, sesamee seeds and fresh scallions";
        food3.appendChild(foodDesc3);
        const foodPrice3 = document.createElement('span');
        foodPrice3.classList.add('food-price');
        foodPrice3.innerText = "$13.95";
        food3.appendChild(foodPrice3);
// ----------------------------------------------------

    const menuContainer2 = document.createElement('div');
    menuContainer2.classList.add('menu-container');
    menu.appendChild(menuContainer2);

    const menuCategory2 = document.createElement('h3');
    menuCategory2.innerText = "ENTRÉE";
    menuContainer2.appendChild(menuCategory2);

    const menuWrapper2 = document.createElement('div');
    menuWrapper2.classList.add('menu-wrapper');
    menuContainer2.appendChild(menuWrapper2);

// Entree Foods:
    const food4 = document.createElement('div');
    food4.classList.add('menu-food');
    menuWrapper2.appendChild(food4);
    const foodName4 = document.createElement('h4');
    foodName4.innerText = "*10oz Grilled NY Striploin";
    food4.appendChild(foodName4);
    const foodDesc4 = document.createElement('span');
    foodDesc4.innerText = "serverd with parmesan roasted baby potatoes, a juniper and rosemary jus and seasonal vegetables";
    food4.appendChild(foodDesc4);
    const foodPrice4 = document.createElement('span');
    foodPrice4.classList.add('food-price');
    foodPrice4.innerText = "$39.95";
    food4.appendChild(foodPrice4);

    const food5 = document.createElement('div');
    food5.classList.add('menu-food');
    menuWrapper2.appendChild(food5);
    const foodName5 = document.createElement('h4');
    foodName5.innerText = "*8oz Filet Mignon";
    food5.appendChild(foodName5);
    const foodDesc5 = document.createElement('span');
    foodDesc5.innerText = "serverd with a creamy mushroom and thyme potato croquette, parsnip puree and black bean jus";
    food5.appendChild(foodDesc5);
    const foodPrice5 = document.createElement('span');
    foodPrice5.classList.add('food-price');
    foodPrice5.innerText = "$43.95";
    food5.appendChild(foodPrice5);

    const food6 = document.createElement('div');
    food6.classList.add('menu-food');
    menuWrapper2.appendChild(food6);
    const foodName6 = document.createElement('h4');
    foodName6.innerText = "Brown Butter Crusted Cod";
    food6.appendChild(foodName6);
    const foodDesc6 = document.createElement('span');
    foodDesc6.innerText = "line caught Fogo Island cod served with Cajun spiced potatoes, asparagus and a lobster cream sauce";
    food6.appendChild(foodDesc6);
    const foodPrice6 = document.createElement('span');
    foodPrice6.classList.add('food-price');
    foodPrice6.innerText = "$37.95";
    food6.appendChild(foodPrice6);

    const food7 = document.createElement('div');
    food7.classList.add('menu-food');
    menuWrapper2.appendChild(food7);
    const foodName7 = document.createElement('h4');
    foodName7.innerText = "Boneless Beef Short Rib";
    food7.appendChild(foodName7);
    const foodDesc7 = document.createElement('span');
    foodDesc7.innerText = "slowly braised with beer, dried cherries and pearl onions, served with a parsnip puree, butter fried spaetzle and seasonal vegetables";
    food7.appendChild(foodDesc7);
    const foodPrice7 = document.createElement('span');
    foodPrice7.classList.add('food-price');
    foodPrice7.innerText = "$32.95";
    food7.appendChild(foodPrice7);

    const food8 = document.createElement('div');
    food8.classList.add('menu-food');
    menuWrapper2.appendChild(food8);
    const foodName8 = document.createElement('h4');
    foodName8.innerText = "Chicken Supreme";
    food8.appendChild(foodName8);
    const foodDesc8 = document.createElement('span');
    foodDesc8.innerText = "served with a wild mushroom and caramelized onion Marsala sauce, garlic whipped potatoes and seasonal vegetables";
    food8.appendChild(foodDesc8);
    const foodPrice8 = document.createElement('span');
    foodPrice8.classList.add('food-price');
    foodPrice8.innerText = "$27.95";
    food8.appendChild(foodPrice8);
// ----------------------------------------------------

        return menu;
    }

    container.appendChild(componentMenu());
}

export default getMenuPage;