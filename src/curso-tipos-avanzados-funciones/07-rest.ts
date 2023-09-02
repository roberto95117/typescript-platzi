import {User, ROLES}  from './01-enum';

const a: User ={
    username: 'Roberto',
    role: ROLES.ADMIN
}

const checkAdminRole = () => {
    if(a.role === ROLES.ADMIN){
        return true;
    }
    return false;
}

const checkRole = (...roles: string[]) => {
    if(roles.includes(a.role)){
        return true;
    }
    return false;
}

console.log(checkAdminRole());
console.log(checkRole(ROLES.CUSTOMER, ROLES.SELLER));