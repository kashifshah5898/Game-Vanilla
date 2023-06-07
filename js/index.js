let currentUrl = window.location.href.split('/')
currentUrl = currentUrl[currentUrl.length - 1]
var hamBurger = document.getElementById('hamBurgerClick');
var nav = document.getElementById('navB');


let allGames = [
    {
        id: '1',
        title: 'GTA Vice City',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 3.14,
        picture: './assets/row-of-slot-machines.jpg'
    },
    {
        id: '2',
        title: 'The Witcher 3: Wild Hunt',
        description: 'Embark on a dark and epic fantasy adventure.',
        price: 29.99,
        picture: 'https://source.unsplash.com/320x220/?The Witcher 3: Wild Hunt'
    },
    {
        id: '3',
        title: 'Minecraft',
        description: 'Build, explore, and survive in an open-world block game.',
        price: 19.99,
        picture: 'https://source.unsplash.com/320x220/?Minecraft'
    },
    {
        id: '4',
        title: 'Red Dead Redemption 2',
        description: 'Experience the wild west in this critically acclaimed action-adventure game.',
        price: 59.99,
        picture: 'https://source.unsplash.com/320x220/?Red Dead Redemption 2'
    },
    {
        id: '5',
        title: 'Final Fantasy VII Remake',
        description: 'Relive the classic RPG with stunning visuals and updated gameplay.',
        price: 49.99,
        picture: 'https://source.unsplash.com/320x220/?Final Fantasy VII Remake'
    },
    {
        id: '6',
        title: 'The Legend of Zelda: Breath of the Wild',
        description: 'Embark on an adventure in the vast open world of Hyrule.',
        price: 59.99,
        picture: 'https://source.unsplash.com/320x220/?The Legend of Zelda: Breath of the Wild'
    },
    {
        id: '7',
        title: 'Call of Duty: Warzone',
        description: 'Engage in intense battle royale action with friends and foes.',
        price: 0,
        picture: 'https://source.unsplash.com/320x220/?Call of Duty: Warzone'
    },
    {
        id: '8',
        title: 'Overwatch',
        description: 'Join the team-based multiplayer shooter with diverse heroes.',
        price: 39.99,
        picture: 'https://source.unsplash.com/320x220/?Overwatch'
    },
    {
        id: '9',
        title: 'FIFA 22',
        description: 'Experience the thrill of virtual soccer with updated teams and gameplay.',
        price: 59.99,
        picture: 'https://source.unsplash.com/320x220/?FIFA 22'
    }
];

let isHamClicked = false


hamBurger.onclick = function () {

    if (!isHamClicked) {
        isHamClicked = !isHamClicked
        nav.className = 'navbar paddingBottom';
        var navbar = document.getElementById('navbar');

        var homeItem = createNavbarItem('Home', '../index.html');
        var gamesItem = createNavbarItem('Games', '../allGames.html');
        var contactItem = createNavbarItem('Contact Us', '../Contact-Us.html');
        var aboutItem = createNavbarItem('About Us', '../About-us.html');
        var signInItem = createNavbarItem('Sign In', '../login.html');
        var signUpItem = createNavbarItem('Sign Up', '../sign-up.html');

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
    link.href = href;
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

const routeToGameDetail = (id) => {
    window.location.href = `../Game-Detail.html?id=${id}`;
}



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
          <p  class="card-description long-paragraph">${allGames[index].description}</p>
          <div class="flex-end">
          <button class="add-to-cart-button" onclick="routeToGameDetail('${allGames[index].id}')" >View Detail</button>
          </div>
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

const paraEllipsis = () => {

    let wordsLength = 5
    var paragraph = document.getElementsByClassName("long-paragraph");
    for (let index = 0; index < paragraph.length; index++) {

        var words = paragraph[index].textContent.trim().split(" ");
        var wordCount = words.length;
        var truncatedText = "";

        for (var i = wordsLength; i < wordCount; i += wordsLength) {
            truncatedText += words[i] + " ";
        }

        paragraph[index].textContent = truncatedText + "... ".trim();
        paragraph[index].classList.add("ellipsis");
    }

}

const specificGame = () => {
    let gameId = currentUrl.split("=")[1]
    let myGame = allGames.filter((item) => { return item.id == gameId })
    myGame = myGame[0]

    let specificGameAll = document.getElementById('specificGameAll');
    specificGameAll.innerHTML = `   <img id="specificGamePicture" src="${myGame.picture}" alt="image-not-found" />
<h4>Game Title: <span id="specificGameTitle">${myGame.title}</span></h4>
<h4>Game Description:</h4>
<p id="specificGameDescription">${myGame.description}</p>
<h4>
  Price:
  <span id="specificGamePrice">${myGame.price}</span>
</h4>
<div class="center">
  <button
    id="specificGameAddTocart"
    class="add-to-cart-button"
    onclick="addToCart('${myGame.id}')"
  >
    Add to Cart
  </button>
</div>`

}

const submitForm = (event) => {

    event.preventDefault()
    let contactName = document.getElementById('contact-name').value
    let contactEmail = document.getElementById('contact-email').value
    let contactText = document.getElementById('contact-textarea').value

    alert(`Thanks ${contactName} for contacting us. We will get back to you soon`)
    document.getElementById('contact-name').value = ""
    document.getElementById('contact-email').value = ""
    document.getElementById('contact-textarea').value = ""
}

const inputForm = (event) => {

    event.preventDefault()
    let contactName = document.getElementById('username').value

    alert(`${contactName} logging you in...`)
    window.location.href = '/';

}

const signUpForm = (event) => {
    event.preventDefault()
    let contactName = document.getElementById('username').value
    alert(`${contactName}, Your Profile is created successfully`)
    window.location.href = './login.html';

}

const countOccurrences = (arr, item) => {

    return arr.reduce(function (count, element) {
        if (element === item) {
            return count + 1;
        }
        return count;
    }, 0);
}

const showItemsInCart = () => {
    let showingData = document.getElementById("cartItemsClass");
    let totalBalance = document.getElementById("totalBalance");
    totalBalance.innerHTML = 0;
    showingData.innerHTML = "";
    let updatedHtmlData = ""


    let tempElement = ""
    let checkOutBalance = 0


    let itemFromCart = getItemsInCart()

    itemFromCart = JSON.parse(itemFromCart);

    for (let item = 0; item < allGames.length; item++) {
        if (itemFromCart.includes(allGames[item].id)) {
            tempElement = `   <div class="card">
                <img src="${allGames[item].picture}" alt="Product Image" />
                <div class="card-content">
                  <h2 class="card-title">${allGames[item].title}</h2>
                  <p  class="card-description long-paragraph">${allGames[item].description}</p>
                  <div class="flex-end">
                  <button class="add-to-cart-button" onclick="routeToGameDetail('${allGames[item].id}')" >View Detail</button>
                  </div>
                  <hr />
                  <div class="gameCardRow">
                    <span class="colorWhite font-size-15"> Price <span id="price">$${allGames[item].price}</span></span>
                    <span class="colorWhite font-size-15">${countOccurrences(itemFromCart, allGames[item].id)} items</span>
                   </div>
                </div>
              </div>`
            checkOutBalance += parseFloat(allGames[item].price) * parseFloat(countOccurrences(itemFromCart, allGames[item].id))
            updatedHtmlData += tempElement;
            tempElement = ""
        }
    }

    totalBalance.innerHTML = checkOutBalance

    showingData.innerHTML = updatedHtmlData ? updatedHtmlData : `<h1 class="center colorYellow">No Item Found </h1>`
}

const clearLocalStorage = () => {

    localStorage.clear()
    window.location.reload();

}


if (currentUrl === '' || currentUrl === 'index.html') {
    showDataToPage(3)
} else if (currentUrl === "allGames.html") {
    showDataToPage()
} else if (currentUrl.split("?")[0] == 'Game-Detail.html') {
    specificGame()
} else if (currentUrl === "Check-Out.html") {
    showItemsInCart()
}


if (currentUrl !== 'Game-Detail.html') {
    // paraEllipsis()
}





// Function to search the array of objects
const searchGames = () => {

    // Convert the query to lowercase for case-insensitive search
    let query = document.getElementById('searchId').value;
    const searchTerm = query.toLowerCase();
    // Perform the search
    const searchResults = allGames.filter(game =>
        game.title.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    if (searchResults.length) {
        let showingData = document.getElementById("landing-page-card");
        showingData.innerHTML = "";
        let updatedHtmlData = ""

        let tempElement = ""

        for (let index = 0; index < searchResults.length; index++) {
            tempElement = `   <div class="card">
        <img src="${searchResults[index].picture}" alt="Product Image" />
        <div class="card-content">
          <h2 class="card-title">${searchResults[index].title}</h2>
          <p  class="card-description long-paragraph">${searchResults[index].description}</p>
          <div class="flex-end">
          <button class="add-to-cart-button" onclick="routeToGameDetail('${searchResults[index].id}')" >View Detail</button>
          </div>
          <hr />
          <div class="gameCardRow">
            <span class="colorWhite font-size-15"> Price <span id="price">$${searchResults[index].price}</span></span>
            <button class="add-to-cart-button" onclick="addToCart('${searchResults[index].id}')">Add to Cart</button>
          </div>
        </div>
      </div>`

            updatedHtmlData += tempElement;
            tempElement = ""
        }

        showingData.innerHTML = updatedHtmlData
    } else {
        let showingData = document.getElementById("landing-page-card");
        showingData.innerHTML = "";
        showingData.innerHTML = `<h1 class="center colorYellow">No Item Found </h1>`
    }
}

