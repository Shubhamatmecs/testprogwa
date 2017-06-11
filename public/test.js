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

var isTooSoon = true;
window.addEventListener("beforeinstallprompt", function(e) {
  if (isTooSoon) {
    e.preventDefault(); // Prevents prompt display
    // Prompt later instead:
    setTimeout(function() {
      isTooSoon = false;
      e.prompt(); // Throws if called more than once or default not prevented
    }, 2000);
  }
});

setTimeout(function(){ 
    console.log("getting data");
    fetch('/getData').then(function(response) {
        $('#data').innerHTML = response;
    })
}, 3000);
