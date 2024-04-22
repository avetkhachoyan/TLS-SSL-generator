# SSL Certificate Generator

This project allows users to generate SSL certificates and QR codes based on the certificate text.

## Overview

This repository contains HTML files and JavaScript files for generating SSL certificates and QR codes. The project consists of the following files:

- `index.html`: Main HTML file containing forms to generate SSL certificates and QR codes.
- `certificateGenerator.js`: JavaScript file to handle SSL certificate generation.
- `qrcodeGenerator.js`: JavaScript file to handle QR code generation.

## Usage

1. Open `index.html` in a modern web browser.
2. Fill out the form under the "Generate Certificate" section with appropriate details such as Common Name, Country Name, etc.
3. Click on the "Generate Certificate" button to generate the SSL certificate. The generated certificate and private key will be logged to the console.
4. Optionally, you can copy the SSL certificate text and paste it into the textarea under the "SSL Certificate QR Code Generator" section.
5. Click on the "Generate QR Code" button to generate a QR code for the SSL certificate text.
6. The generated QR code will be displayed below the textarea.

## Dependencies

- `node-forge`: A native implementation of TLS and other cryptographic protocols in JavaScript.
- `qrcode.js`: A library for generating QR codes.

## Setup

1. Clone this repository to your local machine.
2. Open `index.html` in a modern web browser.

## Notes

- Ensure that the server is running and configured correctly to handle certificate generation requests.
- Make sure to have internet access to fetch the `qrcode.js` library from the CDN.

## License

This project is licensed under the [MIT License](LICENSE).

## Summary aka Disclaimer

TLS/SSL at your own risk. Happy Certifications!

[Ա](https://khachoyan.com) -
