let currentUrl = window.location.href.split('/')
currentUrl = currentUrl[currentUrl.length - 1]
var hamBurger = document.getElementById('hamBurgerClick');
var nav = document.getElementById('navB');

let allGames = [
    { id: '1', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: './assets/row-of-slot-machines.jpg' },
    { id: '2', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city' },
    { id: '3', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '4', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '5', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '6', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '7', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '8', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '9', title: 'GTA vice city', description: "lorem ipsum dolor sit allGames", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
]

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
    alert("Game is successfully added to cart")
}

countItems();



const showDataToPage = (gamesLength = allGames.length) => {
    let showingData = document.getElementById("landing-page-card");
    showingData.innerHTML = "";
    let updatedHtmlData = ""

    let tempElement = ""

    for (let index = 0; index < gamesLength; index++) {
        tempElement = `   <div class="card">
        <img src="${allGames[index].picture}" alt="Product Image" />
        <div class="card-content">
          <h2 class="card-title">${allGames[index].title}</h2>
          <p class="card-description">${allGames[index].description}</p>
          <hr />
          <div class="gameCardRow">
            <span class="colorWhite font-size-15"> Price <span id="price">$${allGames[index].price}</span></span>
            <button class="add-to-cart-button" onclick="addToCart('${allGames[index].id}')">Add to Cart</button>
          </div>
        </div>
      </div>`

        updatedHtmlData += tempElement;
        tempElement = ""
    }

    showingData.innerHTML = updatedHtmlData

}


if (currentUrl === '') {
    showDataToPage(3)
} else {
    showDataToPage()
}