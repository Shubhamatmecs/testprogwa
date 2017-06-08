console.log("test loaded");

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('/public/sw.js', {scope: '/public/'})
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
        console.log(response);
    })
}, 3000);
