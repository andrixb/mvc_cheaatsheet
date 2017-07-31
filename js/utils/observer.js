/**
    Implements Observer pattern
*/
var Observer = function () {
    this._listeners = [];
};

Observer.prototype = {
    // method used to allow components to subscribe
    subscribe: function (args) {
        if (args !== null) {
            if (args instanceof Array) {
                args.forEach(function (listener) {
                    this._listeners.push(listener);
                });
            } else {
                this._listeners.push(args);
            }
        }
    },

    // method used to allow components to unsubscribe
    unsubscribe: function (listener) {
        if (this._listeners.length > 0) {
            this._listeners = this._listeners.filter(function (item) {
                if (item !== listener) {
                    return item;
                }
            });
        }
        return true;
    },

    // method used to propagate the state updates
    notify: function (event, thisObj) {
        var context = thisObj || window;
        
        this._listeners.forEach(function (item) {
            // we use call to apply any kind of input and to get the context
            item.call(context, event);
        });
    }
};
