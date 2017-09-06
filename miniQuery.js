(function (window) {
    "use strict";

    function MiniQuery(selector) {
        if (!(this instanceof MiniQuery)) {
            return new MiniQuery(selector);
        }
        this.length = 0; // Number of elements in collection
        this.nodes = []; // Nodes collection array
        this.nodes = document.querySelectorAll(selector);
        if (this.nodes.length) {
            this.length = this.nodes.length;
        }
    }

    MiniQuery.fn = MiniQuery.prototype;
    window.MiniQuery = window.mj = MiniQuery;

    // iterate over all the elements. calling context is element
    MiniQuery.fn.each = function (callback) {
        var i;
        for (i = 0; i < this.length; i = i + 1) {
            callback.call(this.nodes[i], this.nodes[i], i);
        }
        return this;
    };

    // add text value to all the elements or just return first element's value
    MiniQuery.fn.text = function (textValue) {
        if (textValue) {
            return this.each(function () {
                this.innerText = textValue;
            });
        }
        return this.nodes[0].innerText;
    };

    // add class to all elements
    MiniQuery.fn.addClass = function (className) {
        return this.each(function () {
            this.className = this.className + " " + className;
        });
    };

    // remove class from all elements
    MiniQuery.fn.removeClass = function(className) {
        return this.each(function() {
            this.className = this.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
        });
    };

    // replace old class by new class
    MiniQuery.fn.replaceClass = function (oldClass, newClass) {
        return this.removeClass(oldClass).addClass(newClass);
    };

    // on action performed
    MiniQuery.fn.on = function(name, handler) {
        return this.each(function() {
            this.addEventListener(name, handler, false);
        });
    };

    // add click event
    MiniQuery.fn.click = function (handler) {
        return this.on("click", handler);
    };

}(window));
