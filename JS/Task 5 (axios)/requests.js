let getFromServer = function () {
    myAxios.get("http://localhost:8080/server.js")
    .then(
        response => console.log(response),
        error => console.log(error)
    )
};

let postOnServer = function () {
    myAxios.post("http://localhost:8080/server.js", {
        firstName: 'Valentin',
        lastName: 'Kolesnikov'
    })
    .then(
        response => console.log(response),
        error => console.log(error)
    )
};

document.querySelector('.getButton').onclick = getFromServer;
document.querySelector('.postButton').onclick = postOnServer;