if (localStorage.getItem("Env") === "Dev" ) {
    (async () => {
        try {
            const res = await fetch("./Project/Project.json");
            const Data = await res.json();
            let mergedCode = "";
            for (const element of Data) {
                try {
                    const fileRes = await fetch(`./Project/Pages/${element.Name}/index.js`);
                    const code = await fileRes.text();
                    mergedCode +=code+"\n";
                } catch (error) {
                    console.log(error);
                };
            };
            localStorage.setItem("PROJECTFUNCTIONS", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
    (async () => {
        try {
            const res = await fetch("./Project/Project.json");
            const Data = await res.json();
            let mergedCode = "";
            for (const element of Data) {
                try {
                    const fileRes = await fetch(`./Project/Pages/${element.Name}/index.css`);
                    const code = await fileRes.text();
                    mergedCode +=code+"\n";
                } catch (error) {
                    console.log(error);
                };
            };
            localStorage.setItem("PROJECTSTYLES", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
   (async () => {
        try {
            const res = await fetch("./Project/Project.json");
            const Data = await res.json();
            let mergedCode = "";
        for (const element of Data) {
            try {
                const fileRes = await fetch(`./Project/Pages/${element.Name}/index.html`);
                const code = await fileRes.text();
                const varName = `${element.Name}Page`.replace(/[^a-zA-Z0-9]/g, "");
                const wrapped = `const ${varName} = \`${code}\`;`;
                mergedCode += wrapped+"\n";
            } catch (error) {
                console.log(error);
            };
        };
        localStorage.setItem("PROJECTDESIGN", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
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
                };
            };
            localStorage.setItem("FUNCTIONS", mergedCode);
            if (!localStorage.getItem("Updates")) {
                localStorage.setItem("Updates","True");
            };
        } catch (error) {
            console.log(error);
        };
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
                };
            };
            localStorage.setItem("STYLES", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
    (async () => {
        try {
            const res = await fetch("./Connection/Pages.json");
            const Data = await res.json();
            let mergedCode = "";
        for (const element of Data) {
            try {
                const fileRes = await fetch(`./Library/Pages/${element.Path}/${element.Name}/index.html`);
                const code = await fileRes.text();
                const varName = `${element.Name}Page`.replace(/[^a-zA-Z0-9]/g, "");
                const wrapped = `const ${varName} = \`${code}\`;`;
                mergedCode += wrapped+"\n";
            } catch (error) {
                console.log(error);
            };
        };
        localStorage.setItem("PAGES", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
    (async () => {
        try {
            const res = await fetch("./Connection/Pages.json");
            const Data = await res.json();
            let mergedCode = "";
            for (const element of Data) {
                try {
                    const fileRes = await fetch(`./Library/Pages/${element.Path}/${element.Name}/index.css`);
                    const code = await fileRes.text();
                    mergedCode += "\n\n" + code;
                } catch (error) {
                    console.log(error);
                };
            };
            localStorage.setItem("PAGESSTYLES", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
    (async () => {
        try {
            const res = await fetch("./Connection/Pages.json");
            const Data = await res.json();
            let mergedCode = "";
        for (const element of Data) {
            try {
                const fileRes = await fetch(`./Library/Pages/${element.Path}/${element.Name}/index.js`);
                const code = await fileRes.text();
                const varName = `${element.Name}Functions`.replace(/[^a-zA-Z0-9]/g, "");
                const wrapped = `const ${varName} =()=>{${code}};`;
                mergedCode += wrapped+"\n";
            } catch (error) {
                console.log(error);
            };
        };
        localStorage.setItem("PAGESFUNCTIONS", mergedCode);
        } catch (error) {
            console.log(error);
        };
    })();
}else{
    
};

if (localStorage.getItem("Env") === "Dev" ) {
    fetch("./Connection/Config.js")
    .then(res =>res.text())
    .then(data =>{
        localStorage.setItem("ERANDIXCONFIG",data);
    })
    .catch(error =>console.log(error))
} else {
    
};