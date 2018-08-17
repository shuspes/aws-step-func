
const USERS = [
    {
        id: "1",
        name: "name 1",
        lastName: "last 1"
    },
    {
        id: "2",
        name: "name 2",
        lastName: "last 2"
    },
    {
        id: "3",
        name: "name 3",
        lastName: "last 3"
    },
    {
        id: "4",
        name: "name 4",
        lastName: "last 4"
    }
];

module.exports.getId = (event, context, callback) => {
    callback(null, {id: 3});
};

module.exports.get = (event, context, callback) => {
    const {id} = event;
    const user = USERS[id];
    
    console.log("user: ", user);
  
    callback(null, user);
};