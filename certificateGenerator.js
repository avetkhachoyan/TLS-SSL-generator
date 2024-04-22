const fs = require('fs');
const forge = require('node-forge');
const QRCode = require('qrcode');

function generateCertificateWithKeys() {
    // Generate RSA key pair
    var keys = forge.pki.rsa.generateKeyPair({ bits: 2048 });

    // Create certificate
    var cert = forge.pki.createCertificate();
    cert.publicKey = keys.publicKey;
    cert.serialNumber = '01';
    cert.validity.notBefore = new Date();
    cert.validity.notAfter = new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

    // Set default certificate subject attributes
    var attrs = [
        { name: 'commonName', value: 'localhost' },
        { name: 'countryName', value: 'US' },
        { name: 'localityName', value: 'New York' },
        { name: 'organizationName', value: 'Example Org' },
        { shortName: 'OU', value: 'Web Development' }
    ];

    // Set certificate issuer attributes
    cert.setSubject(attrs);
    cert.setIssuer(attrs);
    cert.sign(keys.privateKey);

    // Convert certificate and private key to PEM format
    var certPem = forge.pki.certificateToPem(cert);
    var privateKeyPem = forge.pki.privateKeyToPem(keys.privateKey);

    // Write certificate to file
    fs.writeFileSync('certificate.pem', certPem);

    // Write private key to file
    fs.writeFileSync('privateKey.pem', privateKeyPem);

    console.log('Certificate and private key generated and saved successfully.');

    // Generate QR code for certificate text
    generateQRCode(certPem);
}

function generateQRCode(text) {
    QRCode.toFile('qrcode.png', text, function (err) {
        if (err) throw err;
        console.log('QR code generated and saved as qrcode.png');
    });
}

// Call the function to generate certificate, keys, and QR code
generateCertificateWithKeys();
