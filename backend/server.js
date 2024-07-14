const express=require('express');
const cors=require("cors")
const { PDFDocument, rgb } = require('pdf-lib');
const QRCode = require('qrcode');
const app=express();
const userRoute=require("./routers/userRouter")
const eventRoute=require("./routers/eventRouter")
const mailRoute=require("./routers/mailRouter")
const adminRoute=require("./routers/adminRouter")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(userRoute);
app.use(eventRoute);
app.use(mailRoute);
app.use(adminRoute);
app.get('/generate-pdf', async (req, res) => {
    try {
        const url = 'https://youtube.com'; // Replace with your desired URL

        // Generate QR code data URL
        const qrCodeDataUrl = await QRCode.toDataURL(url);
        const fetch = await import('node-fetch').then(module => module.default);
        // Fetch the QR code image
        const qrCodeResponse = await fetch(qrCodeDataUrl);
        const qrCodeBuffer = await qrCodeResponse.buffer();

        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);

        // Embed the QR code image into the PDF document
        const qrCodeImage = await pdfDoc.embedPng(qrCodeBuffer);
        const qrCodeDims = qrCodeImage.scale(1.5);

        // Draw the QR code image on the PDF document
        page.drawImage(qrCodeImage, {
            x: page.getWidth() / 2 - qrCodeDims.width / 2,
            y: page.getHeight() / 2 - qrCodeDims.height / 2,
            width: qrCodeDims.width,
            height: qrCodeDims.height,
        });

        // Draw some text on the PDF document
        page.drawText('Scan the QR code to visit the URL:', {
            x: 200,
            y: 350,
            size: 18,
            color: rgb(0, 0, 0),
        });

        // Serialize the PDF document to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save();

        // Set response headers to trigger download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=qr-code.pdf');

        // Send the PDF document as a response
        res.send(Buffer.from(pdfBytes));
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while generating the PDF.');
    }
});

app.listen(4000,()=>{
    console.log("Server is running");
})