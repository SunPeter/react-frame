var AppDispatcher = require("../dispatcher");

var Action = {
    create: function (num) {
        AppDispatcher.dispatch({
            actionType: "create",
            data: num
        });
    }
}

module.exports = Action;
