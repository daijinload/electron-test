onload = function () {
    var fs = require('fs');

    var btn1 = document.getElementById("btn1");
    btn1.onclick = function () {
        document.bgColor = '#000000';
    };

    var webview = document.getElementById("foo");

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