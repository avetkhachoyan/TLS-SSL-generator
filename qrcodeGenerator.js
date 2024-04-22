function generateQRCode() {
    var certificateText = document.getElementById("certificateText").value;
    if (certificateText.trim() === "") {
        alert("Please enter the SSL certificate text.");
        return;
    }

    var qrCodeDiv = document.getElementById("qrcode");

    // Clear existing QR code
    qrCodeDiv.innerHTML = "";

    // Generate QR code
    var qrCode = new QRCode(qrCodeDiv, {
        text: certificateText,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // High error correction level
    });
}
