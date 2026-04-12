BODY.innerHTML=HomePage;

if (localStorage.getItem("AppMode")) {
    BODY.style.background="#333333";
    BODY.style.color="#FFFFFF";
} else {
    BODY.style.background="#FFFFFF";
    BODY.style.color="#000000";
};