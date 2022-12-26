export{};
let user : object;
user = {};

user ={
    id : 1,
    userName: 'Roberto',
    firstNmae: 'Xocop',
    isPro: true
};


console.log('user', user);
//console.log('user.username', user.userName);




const user2 ={
    id : 1,
    userName: 'Roberto',
    firstNmae: 'Xocop',
    isPro: true
};

const isInstance = user2 instanceof Object;

console.log('isInstance', isInstance);
console.log('user.username', user2.userName);

