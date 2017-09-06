(function (MiniQuery) {
    "use strict";

    MiniQuery("#red").on("click", function () {
        MiniQuery(".span_cls").removeClass("green").addClass("red");
    });
    MiniQuery("#green").on("click", function () {
        MiniQuery(".span_cls").removeClass("red").addClass("green");
    });

    MiniQuery(".span_cls").each(function (element, index) {
        console.log(element, index);
    });
}(window.MiniQuery));
