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

    MiniQuery.fn.text = function () {
        return this.nodes[0].innerText;
    };

}(window));
