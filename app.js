onload = function () {
    var fs = require('fs');

    var btn1 = document.getElementById("btn1");
    btn1.onclick = function () {
        document.bgColor = '#000000';
    };

    var webview = document.getElementById("foo");
    var indicator = document.querySelector(".indicator");

    var loadstart = function () {
        indicator.innerText = "loading...";
    };

    var loadstop = function () {
        indicator.innerText = "";
    };

    webview.addEventListener("did-start-loading", loadstart);
    webview.addEventListener("did-stop-loading", loadstop);

    var btnBack = document.getElementById("btnBack");
    btnBack.onclick = function () {
        webview.goBack();
    };
    var btnFwd = document.getElementById("btnFwd");
    btnFwd.onclick = function () {
        webview.goForward();
    };
    var btnPrnt = document.getElementById("btnPrnt");
    btnPrnt.onclick = function () {
        webview.printToPDF({}, function (err, data) {
            if (err)
                throw err;
            fs.writeFile("print.pdf", data, function (err) {
                if (err)
                    throw err;
                console.log("Write PDF successfully.");
            });
        });
    };

};