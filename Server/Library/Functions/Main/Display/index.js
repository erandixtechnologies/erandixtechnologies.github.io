const DISPLAY=(ELEMENT,DATA)=>{
    const ELEMENTS=document.querySelector(ELEMENT);
    CONDITION(ELEMENT,()=>{
        ELEMENTS.innerHTML=DATA;
    },()=>{
        BODY.innerHTML=DATA;
    });
};