const CONDITION=(TERM,CALLBACK,CALLBACKONE)=>{
    if (TERM) {
        CALLBACK();
    } else {
        CALLBACKONE();
    };
};