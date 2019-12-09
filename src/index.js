
import {styleBody, addTitle} from './dom';
import persons, {getPremiumUsers} from './data';

styleBody();
addTitle('Hey, Ninja welcomw to Webpack series');

console.log('index file');

const premUsers = getPremiumUsers(persons);

console.log(premUsers);


