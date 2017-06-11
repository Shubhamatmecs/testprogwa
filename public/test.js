console.log("test loaded");

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js')
    .then(res => {
        console.log('successfully registered');
        console.log(res);
    }, err => {
        alert("sw error");
    });
}

setTimeout(function(){ 
    console.log("getting data");
    fetch('/getData').then(function(response) {
        $('#data').innerHTML = response;
    })
}, 3000);
