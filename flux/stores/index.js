var AppDispatcher = require("../dispatcher");
var EventEmitter = require("events").EventEmitter;
var _data = {};
var ListenEvent = "change";
// Store 就是一个单例
var Store = Object.assign({}, EventEmitter.prototype, {
    update: function(num){
        _data.num = num;
    },
    getAll: function() {
        return _data;
    },
    emitChange: function(actionType) {
        this.emit(actionType);
    },
    addChangeListener: function(callback) {
        this.on(ListenEvent, callback);
    }
});
AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case "create":
            Store.update(action.data);  //处理数据
            Store.emit(ListenEvent); //通知V 
            break;
        default:

    }
});
module.exports = Store;
