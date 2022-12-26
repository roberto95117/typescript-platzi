function showInfo(user : any){
    console.log("userInfo ", user.id, user.username,user.firstname);
}

showInfo({id: 1, username: "roberto", firstname: "xocop"});

function showFormattedInfo(user : any){
    console.log("user info", `
        id: ${user.id}
        username: ${user.username}
        firstname: ${user.firstname} 
    `);
}

showFormattedInfo({id: 1, username: "roberto 2", firstname: "xocop 2"});

//void como tipo de dato
let unusable: void;
unusable = null;
unusable = undefined;


//never
function handleErros(code: number, message: string): never{
    throw new Error(`
        ${message}. Code: ${code}
    `);
}

try{
    handleErros(404,"Nof found");
}catch(error){}

function sumNumbers(lim: number): never{
    let suma = 0;
    while (true){
        suma++;
    }
}

sumNumbers(10);