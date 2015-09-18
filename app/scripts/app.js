(function() {
    document.addEventListener("deviceready", function () {
        var app = new kendo.mobile.Application(document.body, { skin: "flat" });
        navigator.splashscreen.hide();
        alert("Hola como estas?");
        alert("Todo Bien");
    });
}());
