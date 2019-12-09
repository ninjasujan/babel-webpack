
import {styleBody, addTitle} from './dom';
import persons, {getPremiumUsers} from './data';

styleBody();
addTitle('Hey, Ninja ');

console.log('index file');

const premUsers = getPremiumUsers(persons);

console.log(premUsers);


