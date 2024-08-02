// pahle get kai
let input = document.getElementById("input");
let button = document.getElementById("btn");
let loader = document.getElementById("loader");
let userBox = document.querySelector('.userBox');

// phir profile per conditions lagain loader ko lagaya
function githubProfile() {
    if (input.value !== '') {
        userBox.innerHTML = '';
        loader.style.display = 'block';
        apiCall();
    } else {
        alert("input is empty")
    }
}

// phir api link per kam kai promise ke zarye
function apiCall() {
    fetch(`https://api.github.com/users/${input.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            showData(data);
        })
        .catch((error) => {
            console.log(error);
            loader.style.display = 'none';
        });
}

// phir eventlistner se button per click kerwaya
button.addEventListener("click", githubProfile);

// phir input ko enter key press kerne per user data dikhana
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        githubProfile();
    }
});

// phir innerhtml ke through data show kerwaya
function showData(usersData) {
    loader.style.display = 'none';
    userBox.innerHTML = `
  <div class="user-card">
    <img src="${usersData.avatar_url}" alt="User Avatar" class="user-avatar"/>
    <h3>${usersData.name}</h3> <br/>
    <a href="${usersData.html_url}" target="_blank">Follow</a>
  </div>
`;
}
