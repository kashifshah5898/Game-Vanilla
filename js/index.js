var hamBurger = document.getElementById('hamBurgerClick');
var nav = document.getElementById('navB');

let isHamClicked = false

hamBurger.onclick = function () {

    if (!isHamClicked) {
        isHamClicked = !isHamClicked
        nav.className = 'navbar paddingBottom';
        var navbar = document.getElementById('navbar');

        var homeItem = createNavbarItem('Home', '#');
        var gamesItem = createNavbarItem('Games', '#');
        var contactItem = createNavbarItem('Contact Us', '#');
        var aboutItem = createNavbarItem('About Us', '#');
        var signInItem = createNavbarItem('Sign In', '#');
        var signUpItem = createNavbarItem('Sign Up', '#');

        navbar.appendChild(homeItem);
        navbar.appendChild(gamesItem);
        navbar.appendChild(contactItem);
        navbar.appendChild(aboutItem);
        navbar.appendChild(signInItem);
        navbar.appendChild(signUpItem);
    } else {
        isHamClicked = !isHamClicked
        var navbar = document.getElementById('navbar');
        while (navbar.firstChild) {
            navbar.removeChild(navbar.firstChild);
        }
        nav.className = 'navbar';


    }

}

function createNavbarItem(text, href) {
    var listItem = document.createElement('li');
    listItem.className = 'navbar-item';

    if (text === "Donate") {
        listItem.className = 'navbar-item navDonate';

    }

    var link = document.createElement('a');
    link.className = 'navLinks';
    link.href = '#' + href;
    link.textContent = text;

    listItem.appendChild(link);

    return listItem;
}

let currentUrl = window.location.href.split('/')
currentUrl = currentUrl[currentUrl.length - 1]
const getItemsInCart = () => {
    return localStorage.getItem("itemInCart")
}

const countItems = () => {
    let itemInCart = getItemsInCart()

    if (itemInCart) {
        const itemLength = JSON.parse(itemInCart).length
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = itemLength;
    } else {
        localStorage.setItem("itemInCart", '[]')
        var itemCountElement = document.getElementById("itemCount");
        itemCountElement.textContent = 0;
    }
}


const addToCart = (id) => {
    let tempArr = getItemsInCart()
    tempArr = tempArr && JSON.parse(tempArr)
    tempArr.push(id);
    var itemCountElement = document.getElementById("itemCount");
    itemCountElement.textContent = tempArr.length;
    localStorage.setItem("itemInCart", JSON.stringify(tempArr))
    alert("Item is successfully added to cart")
}

countItems();
