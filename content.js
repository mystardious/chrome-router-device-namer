// var mac = ["40:61:86:f3:e5:11", "cc:2d:b7:b1:5a:6d", "2c:0e:3d:ad:c6:94", "f0:9f:c2:c8:0c:b8", "00:18:ae:4d:d6:b5", "fc:15:b4:d1:45:6d", "6c:ad:f8:73:84:3c", "90:23:ec:de:11:3b", "b4:f2:e8:d2:d7:1e", "00:23:99:a3:47:ec", "90:f1:aa:72:ff:d2", "98:01:a7:17:37:f8", "64:20:0c:d1:46:cf", "bc:5f:f4:1a:85:90", "ac:22:0b:c1:70:e1", "40:8d:5c:54:6e:78", "bc:83:85:69:36:11", "ac:5f:3e:d5:5f:e1", "bc:5f:f4:4c:aa:51", "00:0f:ff:1c:c8:b5", "80:f5:03:89:6c:fb", "10:4f:a8:f8:bf:7b", "00:06:78:33:a0:01", "e0:31:9e:31:4b:bf", "cc:44:63:95:e5:4c", "8c:8e:f2:bb:f4:85", "e4:42:a6:d2:9b:82", "30:e3:7a:d1:ee:8f", "04:d6:aa:ff:0f:8d"];
// var macName = ["Hadi's-Computer", "Mum's-Phone", "Ali's-Phone", "Ubiquiti-AP", "Camera-System", "Printer", "Chromecast", "Arabic-TV-Box", "Foxtel", "Blueray-DVD-Drive", "Smart-TV", "Dad's-iPad", "Hadi's-Ipad", "Mystagon", "Zein's-Computer", "Mohamed's-Computer", "Xbox-One", "Mohamed's-Phone", "Ali's-Computer", "Movie-Control-System", "Movie-Foxtel", "Movie-Room-Projector", "Marantz-SR6011", "Steam-Link", "Mum's-iPad", "Zein's-Phone", "Mohamed's-Laptop", "Ali's-Laptop", "Dad's-Phone"];
// var x = window.frames[2].document.getElementsByTagName("TD");
// for (var i = 0; i < x.length; i++) {
//     for (var j = 0; j < mac.length; j++) {
//         x[i].style.fontFamily = "Century Gothic, Arial";
//         x[i].style.textAlign = "CENTER";
//         if (x[i].innerHTML === mac[j]) {
//             x[i - 2].innerHTML = macName[j];
//             x[i - 2].style.textAlign = "LEFT";
//         }
//     }
// }

// Check if we are on the MAC Filtering Page
if(window.frames[2].document.getElementsByTagName("H1")[0].innerHTML === "MAC Filtering") {

    var deviceTable = window.frames[2].document.getElementsByTagName("TABLE")[1];
    var tableRows = deviceTable.getElementsByTagName("TR");

    var buttonRow = window.frames[2].document.getElementsByTagName("TABLE")[0].childNodes[1].childNodes[4].getElementsByTagName("TD")[0];
    var buttons = buttonRow.getElementsByTagName("INPUT");

    var myCreatedButtons = [];

    console.log(buttons[0]);
    var newButton = document.createElement("INPUT");
    newButton.type = "button";
    newButton.value = buttons[0].value;
    newButton.onclick = function() {
        window.frames[2].location.reload();
    }

    console.log(newButton);

    var nigga = buttons[0].cloneNode(true);
    nigga.onclick = function() {
        alert("nigga");
    };
    buttonRow.appendChild(document.createTextNode(" "));
    buttonRow.appendChild(nigga);

    // for(var i = 0; i < buttons.length; i++) {
    //     var tempButton = document.createElement("BUTTON");
    //     tempButton.value = buttons[i].value;
    //     tempButton.innerHTML = buttons[i].innerHTML;
    //     tempButton.onclick = buttons[i].onclick;
    //     buttonRow.removeChild(buttons[i]);
    // }


    // console.log(myButtons);
    // buttonRow.appendChild(myButtons[0]);

    // buttons.push(buttons[0]);

    // for(var i = 0; i < buttons.length; i++) {
    //     buttonRow.appendChild(buttonRow[i]);
    // }


    // List of my Devices
    // var myDevices = [];

    // for(var i = 2; i < tableRows.length; i++) {

    //     // Get fields in record
    //     var tableField = tableRows[i].getElementsByTagName("TD");

    //     // Save Device name and address
    //     var device = {deviceName:tableField[1].innerHTML, deviceAddress:tableField[3].innerHTML};

    //     // tableField[1].onclick = function() {
    //     //     alert("nigga nigga 123");
    //     // }

    //     // tableField[1].contentEditable = "true";

    //     // Add device to list
    //     myDevices.push(device);

    // }
}

// console.log(myDevices);
