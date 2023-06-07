let currentUrl = window.location.href.split('/')
currentUrl = currentUrl[currentUrl.length - 1]
var hamBurger = document.getElementById('hamBurgerClick');
var nav = document.getElementById('navB');

let allGames = [
    { id: '1', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: './assets/row-of-slot-machines.jpg' },
    { id: '2', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city' },
    { id: '3', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '4', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '5', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '6', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '7', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '8', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
    { id: '9', title: 'GTA vice city', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor felis ut leo placerat, non viverra libero euismod. Curabitur dictum ligula mauris, non luctus tortor aliquam id. Mauris facilisis fringilla diam, eget interdum sem faucibus sit amet. Vestibulum vitae fringilla arcu. Nullam mattis risus vitae ligula aliquam, et cursus erat pharetra. Aliquam iaculis malesuada metus vitae laoreet. Suspendisse interdum est nunc, sed facilisis mauris pharetra ac. Phasellus bibendum leo in libero sagittis, sed blandit purus volutpat. Vestibulum sit amet ultricies est, id pharetra velit. Integer malesuada, tellus ac vulputate consectetur, arcu leo consectetur lectus, sed finibus nunc tellus et sem. Nulla facilisi. Sed vulputate sapien turpis, sed feugiat ipsum fringilla at. Fusce at aliquam elit. Curabitur ut sapien neque. Integer viverra justo in metus consectetur, eu iaculis lacus venenatis.  Fusce non ullamcorper velit. Etiam cursus ultricies orci eget placerat. Maecenas eleifend enim non ultricies egestas. Sed rutrum leo ut purus dignissim, in fermentum dui euismod. Morbi volutpat metus id dapibus lacinia. Vestibulum mollis pharetra ex, ut commodo odio efficitur a. Phasellus congue lacus ac tempor rutrum. Ut auctor urna id luctus auctor. Donec egestas malesuada enim a efficitur. Nullam finibus dolor at laoreet ultrices. Suspendisse potenti. Nam dictum sapien et ipsum laoreet posuere. In pharetra felis justo, id aliquam velit pharetra sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque in sapien eget sem cursus tincidunt. Curabitur lacinia purus ut sem consectetur, a tempor lacus pellentesque. Nam finibus ullamcorper dapibus.  Quisque rhoncus nisl eu ligula tincidunt, eu egestas enim efficitur. Aliquam egestas arcu nec metus aliquet, id fringilla nisl tincidunt. Nulla facilisi. Integer et sem ut mauris dapibus tempus non vel libero. Nam eu fringilla risus. Integer in orci nunc. Phasellus non nisl sed sapien ultricies convallis. Sed dapibus leo vitae sagittis porttitor. Curabitur luctus, nibh non aliquet consectetur, diam ante aliquam urna, nec pulvinar tortor turpis vel dolor.", price: 3.14, picture: 'https://source.unsplash.com/320x220/?gta vice city auto theft' },
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

    let wordsLength = 10
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
    paraEllipsis()
} 