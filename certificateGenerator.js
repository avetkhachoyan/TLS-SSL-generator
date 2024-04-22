function generateCertificate() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/generate-certificate", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log('Certificate:', response.cert);
                console.log('Private Key:', response.privateKey);
            } else {
                console.error('Failed to generate certificate:', xhr.statusText);
            }
        }
    };
    xhr.send();
}
