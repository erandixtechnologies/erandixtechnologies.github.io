if (localStorage.getItem("Env") === "Dev" ) {
    fetch("./Project/Project.json")
    .then(res =>res.json())
    .then(data =>{
        data.forEach(element => {
            fetch(`./Project/Pages/${element.Name}/index.js`)
            .then(res =>res.text())
            .then(Data =>{
                localStorage.setItem(element.Name+"Function",Data);
                fetch(`./Project/Pages/${element.Name}/index.css`)
                .then(res =>res.text())
                .then(Data =>{
                    localStorage.setItem(element.Name+"Styles",Data);
                    fetch(`./Project/Pages/${element.Name}/index.html`)
                    .then(res =>res.text())
                    .then(Data =>{
                        localStorage.setItem(element.Name,Data);
                        if (!localStorage.getItem("Updates")) {
                           localStorage.setItem("Updates",Data); 
                           location.reload();
                        };
                    })
                    .catch(error =>console.log(error)) 
                })
                .catch(error =>console.log(error)) 
                })
            .catch(error =>console.log(error))          
        });
    })
    .catch(error =>console.log(error))
} else {
    
};

if (localStorage.getItem("Env") === "Dev") {

    (async () => {
        try {
            const res = await fetch("./Connection/Functions.json");
            const Data = await res.json();
            let mergedCode = "";
            for (const element of Data) {
                try {
                    const fileRes = await fetch(`./Library/Functions/${element.Path}/${element.Name}/index.js`);
                    const code = await fileRes.text();
                    mergedCode += "\n\n" + code;
                } catch (error) {
                    console.log(error);
                }
            }
            localStorage.setItem("FUNCTIONS", mergedCode);
        } catch (error) {
            console.log(error);
        }
    })();

    (async () => {
        try {
            const res = await fetch("./Connection/Styles.json");
            const Data = await res.json();
            let mergedCode = "";
            for (const element of Data) {
                try {
                    const fileRes = await fetch(`./Library/Styles/${element.Path}/${element.Name}/index.css`);
                    const code = await fileRes.text();
                    mergedCode += "\n\n" + code;
                } catch (error) {
                    console.log(error);
                }
            }
            localStorage.setItem("STYLES", mergedCode);
        } catch (error) {
            console.log(error);
        }
    })();

}else{
    
}