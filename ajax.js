var getMeData = function (method, url, tableId) {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open(method, url);

    request.send();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var items = JSON.parse(request.responseText);

            var row = "";

            switch (tableId) {
                case 'posts':
                    for (var i in items) {
                        row += "<tr>";
                        row += '<td>' + items[i].userId + '</td>';
                        row += '<td>' + items[i].id + '</td>';
                        row += '<td>' + items[i].title + '</td>';
                        row += '<td>' + items[i].body + '</td>';
                        row += "</tr>";
                    }
                    document.getElementById(tableId).innerHTML = row;

                    break;

                case 'albums':
                    for (var i in items) {
                        row += "<tr>";
                        row += '<td>' + items[i].userId + '</td>';
                        row += '<td>' + items[i].id + '</td>';
                        row += '<td>' + items[i].title + '</td>';
                        row += "</tr>";
                    }
                    document.getElementById(tableId).innerHTML = row;

                    break;

                case 'photos':
                    for (var i in items) {

                        row += "<tr>";
                        row += '<td>' + items[i].albumId + '</td>';
                        row += '<td>' + items[i].id + '</td>';
                        row += '<td>' + items[i].title + '</td>';
                        row += '<td><a href=" ' + items[i].url + '">' + items[i].url + '</a></td>';
                        row += '<td><img src=" ' + items[i].thumbnailUrl + '" style="border-radius: 80px; height:80px"/></td>';
                        row += "</tr>";
                    }
                    document.getElementById(tableId).innerHTML = row;

                    break;

                case 'users':
                    for (var i in items) {

                        row += "<tr>";
                        row += '<td>' + items[i].id + '</td>';
                        row += '<td>' + items[i].name + '</td>';
                        row += '<td>' + items[i].username + '</td>';
                        row += '<td>' + items[i].email + '</td>';
                        row += '<td>' + items[i].address.street + ',' + items[i].address.suite + ',' + items[i].address.city + ','
                            + items[i].address.zipcode + '</td>';
                        row += '<td>' + items[i].phone + '</td>';
                        row += '<td>' + items[i].website + '</td>';
                        row += '<td>' + items[i].company.name + '</td>';
                        row += "</tr>";

                    }
                    document.getElementById(tableId).innerHTML = row;

                    break;

            }


        }

    }
}

