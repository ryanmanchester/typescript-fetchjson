"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var complete = todo.completed;
    console.log("\n    The Todo with ID: " + id + "\n    Has the title: " + title + "\n    Is it finished? " + complete + "\n    ");
});
