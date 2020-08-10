const { globalAgent } = require("http");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user: "Glen", password: "$2a$14$MO44dtH4XLuDBHvcLDq1wu4z.AcCRHvOs5oZ1rtquS7ueg96SmKrW", department: "Guitars"},
        {user: "George", password: "", department: "Guitars"},
        {user: "Jim", password: "", department: "Guitars"},
        {user: "Lance", password: "", department: "Guitars"},
        {user: "Darrel", password: "", department: "Guitars"},
        {user: "Gary", password: "", department: "Drums"},
        {user: "Mickey", password: "", department: "Drums"},
        {user: "Shane", password: "", department: "Drums"},
        {user: "Kelly", password: "", department: "Keyboards"},
        {user: "Goose", password: "", department: "Keyboards"},
        {user: "Fairlight", password: "", department: "Keyboards"},
        {user: "Clancy", password: "", department: "Keyboards"},
        {user: "Frank", password: "$2a$14$1sOa36AqC9WnXq3dWRBTCOSaGTcX2WwBu44idcHvXXH5tf2s7g6ci", department: 'Drums'}
        

      ]);
    });
};
