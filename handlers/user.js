
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

module.exports.get = (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({user: USERS[0]}),
    };
  
    callback(null, response);
  };