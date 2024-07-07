let email = document.querySelector(".email_input");
let password = document.querySelector(".password_input");

const requestUrl = "http://167.71.236.10/api/login/";

const getLogin = async () => {
    console.log("email before request:", email.value);
    console.log("password before request:", password.value);//just to check

    try {
        let promise = await fetch(requestUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": email.value,
                "password": password.value
            })
        })
        console.log("Response status:", promise.status);

        let data = await promise.json();

        if (promise.ok) {
            document.querySelector(".sign_button").innerText = "login successful";
            console.log("Login successful:", data);
        } else {
            console.error("Login failed:", data);
        }
    } catch (error) {
        console.error(error);
    }
}

document.querySelector(".sign_button").addEventListener("click", getLogin);



