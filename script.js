```javascript
document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        const usernameInput = document.getElementById("registerUsername");
        const passwordInput = document.getElementById("registerPassword");

        registerForm.addEventListener("submit", event => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (!username || !password) {
                alert("Please complete the form.");
                return;
            }

            const user = {
                username,
                password
            };

            localStorage.setItem("user", JSON.stringify(user));

            alert("Registered successfully");

            registerForm.reset();
            window.location.href = "login.html";
        });
    }


    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        const usernameInput = document.getElementById("loginUsername");
        const passwordInput = document.getElementById("loginPassword");

        loginForm.addEventListener("submit", event => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (!username || !password) {
                alert("Please enter username and password.");
                return;
            }

            const savedUser = localStorage.getItem("user");

            if (!savedUser) {
                alert("No registered user found");
                return;
            }

            const user = JSON.parse(savedUser);

            const isValid =
                username === user.username &&
                password === user.password;

            if (isValid) {
                localStorage.setItem("loggedIn", "true");

                alert("Login successful");
                window.location.href = "landing.html";
                return;
            }

            alert("Wrong username or password");
        });
    }


    const logoutButton = document.getElementById("logoutButton");
    const welcomeUsername = document.getElementById("welcomeUsername");

    if (logoutButton) {
        const isLoggedIn = localStorage.getItem("loggedIn");

        if (isLoggedIn !== "true") {
            window.location.href = "login.html";
            return;
        }

        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            const user = JSON.parse(savedUser);
            welcomeUsername.textContent = user.username;
        }

        logoutButton.addEventListener("click", () => {
            localStorage.setItem("loggedIn", "false");
            window.location.href = "login.html";
        });
    }

});
```
