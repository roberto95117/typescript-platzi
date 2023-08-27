import {subDays, format} from 'date-fns';

const dateV = new Date(1995, 10, 7);

const resSub = subDays(dateV, 30);

const str = format(resSub, 'dd/MM/yyyy');

console.log('fecha resta', str);