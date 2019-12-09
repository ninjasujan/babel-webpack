

console.log('control flow in data file');

const user = [
    {name: 'mario', premium: true},
    {name: 'Luigi', premium: false},
    {name: 'Yoshi', premium: true},
    {name: 'Peach', premium: false}
]

const getPremiumUsers = (users) => {
    return users.filter(user => user.premium);
}

// export default user;

export {getPremiumUsers, user as default};

