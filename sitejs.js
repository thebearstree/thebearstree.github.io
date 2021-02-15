const btn = document.querySelector('button')  ;

function sendData(data) {
    console.log('sending data');

    const XHR = new XMLHttpRequest();

    let urlEncodedData = '',
        urlEncodedDataPairs = [],
        name;

    //turn data object into an array of url-encoded key/value pairs
    for(name in data) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent)
    }

    //combine the pairs into single string and replace all %-encoded spaces to the '+' character; matches the bhavior of browser form submissions
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    //define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
        alert('Sent! Thank you!')
    });

    //define what happens in case of error
    XHR.addEventListener('error', function(event) {
        alert('Ooops! Something Went Wrong.');
    });

    //set up our request
    XHR.open('POST', 'https://example.com/example.php');

    //add required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //send our data
    XHR.send(urlEncodedData);

}

btn.addEventListener('click', function() {
    sendData({test:'ok'});
})