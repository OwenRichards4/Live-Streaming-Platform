// USER DETAILS
let userAccName;

let accounts;
let userdata;
let games;

// ######################## ON WINDOW LOAD ######################## \\
if (window.location.pathname != '/search.html') {
    window.onload = function() {
        let headerButtons = document.getElementById('header-buttons');
        if (localStorage.getItem('user') != "" && localStorage.getItem('user') != null && headerButtons) {
            headerButtons.removeChild(headerButtons.lastElementChild)

            let img = document.createElement('img');
            
            img.src = localStorage.getItem('userLogo');
            img.className = "channel-logo";

            headerButtons.appendChild(img);
        }

        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') == "light") {
                localStorage.setItem('theme', "dark");
            } else {
                localStorage.setItem('theme', "light");
            }
            themeToggle();
        } else {
            getTheme();
        }
    }
}





// ######################## SETTING THE THEME ######################## \\
function getTheme() { 
    localStorage.setItem('theme', "light");
}

function lightHover() {
    this.style.boxShadow = "5px 5px 8px 0 rgba(43, 39, 39, var(--shadow-hover))";
    this.style.backgroundColor = "var(--off-white)";    
}

function lightNormal() {
    this.style.boxShadow = " 4px 4px 8px 0 rgba(43, 39, 39, var(--shadow))";
    this.style.backgroundColor = "var(--off-white)";
}

function darkHover() {
    this.style.backgroundColor = "var(--light-gray)";
}

function darkNormal() {
    this.style.backgroundColor = "var(--dark-gray)";
}

function themeToggle() {
    if (localStorage.getItem('theme') == "light") {
        // ############ SUN ############ \\
        document.getElementById('theme').name = "sunny-outline";
        localStorage.setItem('theme', "dark");

        // MAIN - SEARCH
        if (document.getElementById('search-main')) {
            document.getElementById('search-main').style.background = "linear-gradient(0deg, var(--light-mode-1) 0%, var(--light-mode-2) 100%)";
        }
        // MAIN - BODY
        if (document.getElementById('main-body')) {
            document.getElementById('main-body').style.background = "linear-gradient(0deg, var(--light-mode-1) 0%, var(--light-mode-2) 100%)";
        }
        
        // LIVE CHANNEL DISPLAY
        if (document.getElementById('live-channel-display-1')) {
            document.querySelectorAll('.live-channel-display').forEach(element => {
                element.style.backgroundColor = "var(--off-white)";
                element.style.color = "var(--dark-gray)";

                element.style.border = "2px solid var(--off-white)";
                element.style.boxShadow = " 4px 4px 8px 0 rgba(43, 39, 39, var(--shadow))";

                element.removeEventListener('mouseover', darkHover);
                element.removeEventListener('mouseout', darkNormal);

                element.addEventListener('mouseover', lightHover);
                element.addEventListener('mouseout', lightNormal);
            });
            document.querySelectorAll('.video-element').forEach(element => {
                element.style.backgroundColor = "var(--skyblue)";
            });
        }
        // GAME CARDS
        if (document.getElementById('game-card-1')) {
            document.querySelectorAll('.game-card').forEach(element => {
                element.style.backgroundColor = "var(--off-white)";
                element.style.border = "2px solid var(--off-white)";

                element.style.boxShadow = "4px 4px 8px 0 rgba(70, 70, 70, var(--shadow))";
                
                element.addEventListener('mouseover', lightHover);
                element.addEventListener('mouseout', lightNormal);
            });
            document.querySelectorAll('.game-title').forEach(element => {
                element.style.color = "var(--dark-gray)";
            });
            document.querySelectorAll('.game-count').forEach(element => {
                element.style.color = "var(--dark-gray)";
            });
        }

        // FEATURED VIDEO
        if (document.getElementById('featured-video-section')) {
            document.getElementById('featured-video-section').style.boxShadow = "5px 5px 8px 0 rgba(43, 39, 39, var(--shadow-hover))";
            document.getElementById('featured-video-section').style.backgroundColor = "var(--skyblue)";
        }

        // SIGN IN AND SIGN UP
        if (document.getElementById('sign-up-container')) {
            document.getElementById('sign-up-container').style.background = "linear-gradient(0deg, var(--light-mode-1) 0%, var(--light-mode-2) 100%)";
        
            document.getElementById('sign-up').style.backgroundColor = "var(--off-white)";
            document.getElementById('sign-up').style.color = "var(--dark-gray)";
            document.getElementById('sign-up').style.boxShadow = "4px 4px 8px 0 rgba(43, 39, 39, var(--shadow)";
            document.querySelectorAll('.sign-up-input').forEach(element => {
                element.style.color = "var(--dark-gray)";
                element.style.borderBottom = "2px solid var(--middle-gray)";
            });

            document.getElementById('sign-in-hr').style.backgroundColor = "var(--dark-gray)";
        }

        // SEARCH
        if (document.getElementById('streamer-card-1')) {
            document.querySelectorAll('.streamer-card').forEach(element => {
                element.style.backgroundColor = "var(--off-white)";
                element.style.boxShadow  = "4px 4px 8px 0 rgba(43, 39, 39, var(--shadow))";

                element.removeEventListener('mouseover', darkHover);
                element.removeEventListener('mouseout', darkNormal);

                element.addEventListener('mouseover', lightHover);
                element.addEventListener('mouseout', lightNormal);
            });
            document.querySelectorAll('.streamer-card-name').forEach(element => {
                element.style.color = "var(--dark-gray)";
            });
        }

    } else {
        // ############ MOON ############ \\
        document.getElementById('theme').name = "moon-outline";
        localStorage.setItem('theme', "light");

        // MAIN - SEARCH
        if (document.getElementById('search-main')) {
            document.getElementById('search-main').style.background = "linear-gradient(0deg, var(--dark-mode-1) 0%, var(--dark-mode-2) 100%)";
        }
        // MAIN - BODY
        if (document.getElementById('main-body')) {
            document.getElementById('main-body').style.background = "linear-gradient(0deg, var(--dark-mode-1) 0%, var(--dark-mode-2) 100%)";
        }

        // LIVE CHANNEL DISPLAY
        if (document.getElementById('live-channel-display-1')) {
            document.querySelectorAll('.live-channel-display').forEach(element => {
                element.style.backgroundColor = "var(--dark-gray)";
                element.style.color = "var(--off-white)";

                element.style.border = "2px solid var(--dark-gray)";
                element.style.boxShadow = "none";
                
                element.removeEventListener('mouseover', lightHover);
                element.removeEventListener('mouseout', lightNormal);

                element.addEventListener('mouseover', darkHover);
                element.addEventListener('mouseout', darkNormal);
            });
            document.querySelectorAll('.video-element').forEach(element => {
                element.style.backgroundColor = "var(--middle-gray)";
            });
        }

        // GAME CARDS
        if (document.getElementById('game-card-1')) {
            document.querySelectorAll('.game-card').forEach(element => {
                element.style.backgroundColor = "var(--dark-gray)";
                element.style.border = "2px solid var(--dark-gray)";
                element.style.boxShadow = "none";

                element.removeEventListener('mouseover', lightHover);
                element.removeEventListener('mouseout', lightNormal);
                
                element.addEventListener('mouseover', darkHover);
                element.addEventListener('mouseout', darkNormal);
            });
            document.querySelectorAll('.game-title').forEach(element => {
                element.style.color = "var(--off-white)";
            });
            document.querySelectorAll('.game-count').forEach(element => {
                element.style.color = "var(--off-white)";
            });
        }

        // FEATURED VIDEO
        if (document.getElementById('featured-video-section')) {
            document.getElementById('featured-video-section').style.boxShadow = "none";
            document.getElementById('featured-video-section').style.backgroundColor = "var(--dark-gray)";
        }

        // SIGN IN AND SIGN UP
        if (document.getElementById('sign-up-container')) {
            document.getElementById('sign-up-container').style.background = "linear-gradient(0deg, var(--dark-mode-1) 0%, var(--dark-mode-2) 100%)";
            
            document.getElementById('sign-up').style.backgroundColor = "var(--dark-gray)";
            document.getElementById('sign-up').style.color = "var(--off-white)";
            document.getElementById('sign-up').style.boxShadow = "none";
            document.querySelectorAll('.sign-up-input').forEach(element => {
                element.style.color = "var(--off-white)";
                element.style.borderBottom = "2px solid var(--off-white)";
            });

            document.getElementById('sign-in-hr').style.backgroundColor = "var(--off-white)";
        }

        // SEARCH
        if (document.getElementById('streamer-card-1')) {
            document.querySelectorAll('.streamer-card').forEach(element => {
                element.style.backgroundColor = "var(--dark-gray)";
                element.style.boxShadow  = "none";

                element.removeEventListener('mouseover', lightHover);
                element.removeEventListener('mouseout', lightNormal);
                
                element.addEventListener('mouseover', darkHover);
                element.addEventListener('mouseout', darkNormal);
            });
            document.querySelectorAll('.streamer-card-name').forEach(element => {
                element.style.color = "var(--off-white)";
            });
        }
    }
}




// ######################## FETCHING DATA ######################## \\
async function fetchUserData() {
    // if (localStorage.getItem('user') != "") {
    try {
        const response = await fetch('data/userdata.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        let arr = []
        document.getElementById('followed-toggle-header').innerHTML = "Followed Channels";
        for (let i = 0; i < jsonData.following.length; i++) {
            if (jsonData.following[i].live) {
                document.getElementById('followed-channels-toggle').appendChild(fillUserDataToggle(jsonData.following[i]));
            }
            arr.push(jsonData.following[i].username)
        }
    

        const sorted = jsonData.following.sort((a, b) => b.watchTime - a.watchTime).slice(0,1);
        
        if (document.getElementById('featured-video-section')) {
            fillFeaturedData(sorted[0]);
        }

        localStorage.setItem('followedChannels', arr)
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
    // } else {
    //     document.getElementById('followed-toggle-header').innerHTML = "";
    // }
}

async function fetchAccountsData() {
    try {
        const response = await fetch('data/accounts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        accounts = await response.json();
        fillRecommendedData(accounts);
        if (window.location.pathname == "/index.html") {
            countViewersPerGame(accounts);
        }
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

async function fetchGamesData() {
    try {
        const response = await fetch('data/games.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        games = await response.json();
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}






// ######################## FEATURED DATA ######################## \\
function fillFeaturedData(displayedData) {
    let featTitle = document.getElementById('featured-video-title');
    let featName = document.getElementById('featured-video-channel');
    let featCat = document.getElementById('featured-video-game');
    // let featDes = document.getElementById('featured-video-description');
    
    featTitle.innerHTML = displayedData.title;
    featName.innerHTML = displayedData.username;
    featCat.innerHTML = displayedData.category;
}





// ######################## VIDEO CARD CREATION ######################## \\
async function fetchUserFollowerData() {
    try {
        const response = await fetch('data/userdata.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        followedArr = jsonData;
        userdata = jsonData;

        if (Array.isArray(jsonData.following)) {
            let followedChannels = document.getElementById('followed-channels');

            const sorted = jsonData.following.sort((a, b) => b.liveCount - a.liveCount);
            let vidDisplays = document.querySelectorAll('.live-channel-display');
            for (let i = 1; i <= (vidDisplays.length / 2); i++) {
                document.getElementById('live-channel-display-'+i).style.display = "grid";
                createFollowedVideoDisplay(sorted[i], i);
            }
            checkSizeofChannels(".followed-channels");
        } else {
            console.error("Fetched data is not an array:", jsonData);
        }
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

async function fetchGameDisplayData() {
    try {
        const response = await fetch('data/games.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        games = jsonData;

        if (Array.isArray(jsonData)) {
            const sorted = jsonData.sort((a, b) => b.liveCount - a.liveCount);

            let cards = document.querySelectorAll('.game-card');
            for (let i = 1; i <= cards.length; i++) {
                document.getElementById('game-card-'+i).style.display = "flex";
                fillCards(sorted[i-1], i);
            }
            checkSizeofGames();
        } else {
            console.error("Fetched data is not an array:", jsonData);
        }

    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

async function fetchUserRecommendationData() {
    try {
        const response = await fetch('data/accounts.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();

        const sorted = jsonData.sort((a, b) => b.viewers - a.viewers);
        let vidDisplays = document.querySelectorAll('.live-channel-display');

        for (let i = 1; i <= (vidDisplays.length / 2); i++) {
            document.getElementById('live-channel-display-'+(i+5)).style.display = "grid";
            if (!followedArr.following.includes(jsonData[i].username)) {
                createFollowedVideoDisplay(sorted[(i+5)], i+5);
            } else {
                document.getElementById('live-channel-display-'+(i+5)).style.display = "none";
            }
        }
        checkSizeofChannels(".recommended-channels");
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function liveChannelDisplayAddEvent() {
    let videosDisplayed = document.querySelectorAll('.live-channel-display');
    videosDisplayed.forEach(element => {
        element.addEventListener('click', function() {
            localStorage.setItem('viewingName', this.querySelector(".channel-name").innerHTML)
            localStorage.setItem('viewingCategory', this.querySelector(".channel-game").innerHTML)
            localStorage.setItem('following', true);

            fetchAccountsData();
            
            getChannelIcon(this.querySelector(".channel-name").innerHTML);
            getChannelTitle(this.querySelector(".channel-name").innerHTML);
            getViewerCount(this.querySelector(".channel-name").innerHTML)

            window.location.href = "channelPage.html";
        });
    });
}
liveChannelDisplayAddEvent();



// ######################## VIEWERS COUNT ######################## \\
async function countViewersPerGame(jsonData) {
    if (!games) {
        await fetchGameDisplayData();
    }
    let gamesData = games;
    for (let i = 0; i < jsonData.length; i++) {

        jsonData[i].category
    }
}





// ######################## RESIZE ######################## \\
let currToggle = true;
window.addEventListener('resize', () => {
    let sidebarState = window.innerWidth;

    if (window.location.pathname == "/index.html") {
        checkSizeofChannels(".followed-channels");
        checkSizeofChannels(".recommended-channels");
        checkSizeofGames();
    }

    if (window.location.pathname == "/search.html") {
        checkSizeofGames();
    }
    
    // TOGGLE SIDEBAR BASED OFF WIDTH
    if (window.location.pathname != "/signup.html" &&  window.location.pathname != "/signin.html") {
        if (sidebarState < 1600 && currToggle) {
            toggleSidebar();
            currToggle = !currToggle
        } else if (sidebarState >= 1600 && !currToggle) {
            toggleSidebar();
            currToggle = !currToggle
        }
    }
});

function checkSizeofChannels(element) {
    let container = document.querySelector(element);
    let items = container.querySelectorAll('.live-channel-display');
    
    // Each card's approximate width + gap
    const itemWidth = 256 + 20; 
    const availableWidth = container.offsetWidth;

    // How many items can fit
    const maxVisible = Math.min(5, Math.floor(availableWidth / itemWidth));

    items.forEach((item, i) => {
        if (i < maxVisible) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function checkSizeofGames() {
    let container = document.querySelector(".game-cards");
    let items = container.querySelectorAll('.game-card');
    
    const itemWidth = 100 + 40; 
    const availableWidth = container.offsetWidth;

    const maxVisible = Math.min(8, Math.floor(availableWidth / itemWidth));

    items.forEach((item, i) => {
        if (i < maxVisible) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}





// ############################## LOGIN ############################## \\
async function loginWithData() {
    if (!accounts) {
        await fetchAccountsData();
    }
    jsonData = accounts;
    if (Array.isArray(jsonData)) {
        for (let i = 0; i < jsonData.length; i++) {
            if (jsonData[i].username == username.value && jsonData[i].password == password.value) {
                loginError.style.display = "none";

                localStorage.setItem('user', username.value);
                localStorage.setItem('userLogo', jsonData[i].icon + ".png")

                window.location.href = "../index.html";
                return
            }
        }
        loginError.innerHTML = "Username and password not on file";
        loginError.style.display = "block";
    } 
} 





// ############################## WINDOW LOCATOIN ############################## \\
// SIGN IN OR SIGN UP
function login() {
    window.location.href = "signin.html";
}
// Explore
function explore(type) {
    if (type != "category") {
        localStorage.setItem('searchedGame', "all");
    }
    window.location.href = "explore.html";
}





// ############################## NAVIGATION ############################## \\
async function getChannelIcon(accountName) {
    if (!accounts) {
        await fetchAccountsData();
    }
    accounts.forEach(element => {
        if (element.username == accountName) {
            localStorage.setItem('viewingIcon', element.icon);
        }
    })
}

async function getChannelTitle(accountName) {
    if (!accounts) {
        await fetchAccountsData();
    }
    accounts.forEach(element => {
        if (element.username == accountName) {
            localStorage.setItem('viewingTitle', element.title);
            localStorage.setItem('alert', element.alerts);
            return
        }
    });
}

async function getViewerCount(accountName) {
    if (!accounts) {
        await fetchAccountsData();
    }
    accounts.forEach(element => {
        if (element.username == accountName) {
            localStorage.setItem('viewerCount', element.viewers);
            return
        }
    });
}





// ############################## SEARCHBAR ############################## \\
let searchBar = document.getElementById('search-input');
searchBar.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && this.value != "") {
        localStorage.setItem('search', searchBar.value);
        window.location.href = "search.html";
    };
});




// ############################## RECOMMENDED ############################## \\
let maxShown = 5;
function viewMoreButton() {
    maxShown += 3;
    toggleRecFillCheck = false;
    document.getElementById('recommended-channels-toggle').innerHTML = `<h3 class="toggle-header">Try Something New</h3>`;

    fillRecommendedData(accounts);
}

let toggleRecFillCheck = false;
async function fillRecommendedData(jsonData) {
    if (jsonData != undefined) {
        let arr;
        if (localStorage.getItem('followedChannels')) {
            arr = localStorage.getItem('followedChannels').split(',')
        }
        let count = 1;
        for (let i = 0; i < jsonData.length; i++) {
            if (arr.includes(jsonData[i].username) == false && count <= maxShown && !toggleRecFillCheck) {
                document.getElementById('recommended-channels-toggle').appendChild(fillUserDataToggle(jsonData[i]));
                count++;
            }
        }

        if (count > 5 && count < 11 && !toggleRecFillCheck) {
            let viewMore = document.createElement('h4');
            viewMore.className = "view-more";
            viewMore.id = "view-more";
            viewMore.innerHTML = "View More";
            viewMore.addEventListener('click', viewMoreButton);
            document.getElementById('recommended-channels-toggle').appendChild(viewMore);
        }
        toggleRecFillCheck = true;
    }
}

function fillUserDataToggle(displayedData) {
    const li = document.createElement('div');
    li.className = "user-display-toggle";

    li.addEventListener('click', () => {
        localStorage.setItem('viewingName', displayedData.username);
        localStorage.setItem('viewingCategory', displayedData.category);
        localStorage.setItem('viewingIcon', displayedData.icon);
        localStorage.setItem('viewingTitle', displayedData.title);
        localStorage.setItem('following', true);
        localStorage.setItem('alert', displayedData.alerts);
        getViewerCount(displayedData.username)

        window.location.href = "channelPage.html";
    });

    const h4 = document.createElement('h4');
    h4.innerHTML = displayedData.username;
    h4.className = "username-toggle";

    const image = document.createElement('img');
    image.className = "user-image-toggle";

    const game = document.createElement('h4');
    game.innerHTML = displayedData.category;
    game.className = "user-game-toggle";

    const circle = document.createElement('div');
    circle.className = "live-symbol";

    const viewerCount = document.createElement('h4');
    viewerCount.innerHTML = displayedData.viewers;
    viewerCount.className = "user-viewer-count-toggle";

    image.src = displayedData.icon + ".png";

    image.onerror = function() {
        image.onerror = null; 
        image.src = displayedData.src + '.jpg';
    };

    const nameAndGame = document.createElement('container');
    nameAndGame.className = "name-and-game-toggle";
    nameAndGame.id = "name-and-game-toggle";
    nameAndGame.append(h4, game);

    const symbolAndViewerCount = document.createElement('container');
    symbolAndViewerCount.className = 'live-viewer-count-container';
    symbolAndViewerCount.id = 'live-viewer-count-container';
    symbolAndViewerCount.append(circle, viewerCount);

    
    li.append(image, nameAndGame, symbolAndViewerCount);
    return li
}
