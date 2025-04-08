function openPopup() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closePopup(event) {
    if (!event || event.target === document.getElementById("loginPopup")) {
        document.getElementById("loginPopup").style.display = "none";
    }
}

function handleLogin() {
    const studentNumber = document.getElementById("studentNumber").value;
    const password = document.getElementById("password").value;

    console.log("Logging in with:", studentNumber, password);
    closePopup();
}

