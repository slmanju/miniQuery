(function (window) {
    "use strict";

    function MiniQuery(selector) {
        if (!(this instanceof MiniQuery)) {
            return new MiniQuery(selector);
        }
    }

    MiniQuery.fn = MiniQuery.prototype;
    window.MiniQuery = window.mq = MiniQuery;
}(window));
