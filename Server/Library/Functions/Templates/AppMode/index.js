const APPMODE=()=>{
    if (localStorage.getItem("AppMode")) {
        BODY.style.background="#333333";
        BODY.style.color="#FFFFFF";
    } else {
        BODY.style.background="#FFFFFF";
        BODY.style.color="#000000";
    };
    const ELEMENTS=document.querySelectorAll(["input","button"]);
    ELEMENTS.forEach(element => {
        if (localStorage.getItem("AppMode")) {
            element.style.color="#FFFFFF";
        } else {
            element.style.color="#000000";
        };
    });
};