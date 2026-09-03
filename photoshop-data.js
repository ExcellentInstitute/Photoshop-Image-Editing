// photoshop-data.js
// Excellent Institute - Photoshop & Image Editing (DCA Exclusive)

const photoshopBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Welcome to Photoshop 7.0",
        topics: [
            {
                heading: "What is Photoshop?",
                text: "Adobe Photoshop 7.0 is the world's most famous digital darkroom. While MS Paint is for simple drawings, Photoshop is used by professional studios to edit photographs, design banners, and clean up official documents. The screen has a 'Toolbox' on the left and 'Layers' on the right.",
                shortcut: "Press 'Tab' on your keyboard to hide or show all the tool menus instantly.",
                imgSrc: "images/ps-01-intro.jpg"
            },
            {
                heading: "Opening and Saving Images",
                text: "To bring a photo into Photoshop, go to File > Open (or double-click the empty grey background). To save your work, go to File > Save As. If you are not finished editing, save it as a '.PSD' file so you can edit it tomorrow. If it is completely finished, save it as a '.JPG' to send to a mobile phone.",
                shortcut: "Ctrl + O (Open) | Ctrl + Shift + S (Save As)",
                imgSrc: "images/ps-02-open-save.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Essential Photo Corrections",
        topics: [
            {
                heading: "Cropping Unwanted Areas",
                text: "The Crop Tool acts like digital scissors. Select the Crop Tool from the left toolbox (it looks like two crossing angles). Click and drag a box over the part of the photo you want to keep. The outside area will turn dark. Press 'Enter' on your keyboard, and the unwanted background is chopped off!",
                shortcut: "Press 'C' on your keyboard to quickly select the Crop Tool.",
                imgSrc: "images/ps-03-crop.jpg"
            },
            {
                heading: "Resizing Photos for Online Forms",
                text: "When students apply for government jobs online, the website often says 'Photo must be under 50KB and 200x200 pixels'. To fix this, go to Image > Image Size. Change the measurements to 'Pixels', type 200 for the width, and click OK. Then use File > Save for Web to compress the file size under 50KB.",
                shortcut: "Alt + I, I (Opens the Image Size menu)",
                imgSrc: "images/ps-04-resize.jpg"
            },
            {
                heading: "Adding Text and Borders (Stroke)",
                text: "To type a name or date on a photo, select the 'T' (Text Tool), click on the photo, and type. To draw a neat border around a photo, select the whole image (Ctrl+A), go to Edit > Stroke, choose a width (like 5 px), pick the color black, and click OK. A perfect frame is drawn!",
                shortcut: "Ctrl + A (Select entire photo) -> Edit -> Stroke",
                imgSrc: "images/ps-05-text-border.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Studio & Official Studio Work",
        topics: [
            {
                heading: "Making a Passport Size Photo",
                text: "This is a vital skill! 1. Select the Crop Tool. 2. At the top bar, type Width: 3.5 cm, Height: 4.5 cm, Resolution: 300. 3. Crop the person's face. 4. Press Ctrl+A, go to Edit > Stroke to add a black border. 5. Press Ctrl+N to open a new 4x6 inch paper. 6. Use the Move Tool (V) to drag the passport photo onto the new paper. Copy and paste it to fit 6 photos in a row!",
                shortcut: "Hold 'Alt' and drag the photo with your mouse to duplicate it instantly.",
                imgSrc: "images/ps-06-passport.jpg"
            },
            {
                heading: "Cleaning Scanned Certificates",
                text: "When you scan an old Birth or Death Certificate, it often looks grey and hard to read. Bring it into Photoshop and press Ctrl+M (Curves) or Ctrl+L (Levels). Pull the white slider to the left to make the paper bright white, and pull the black slider to the right to make the text deep black. Use the Eraser tool to remove any black dust marks left by the scanner.",
                shortcut: "Ctrl + L (Opens Levels to clean up scanned documents)",
                imgSrc: "images/ps-07-clean-certificate.jpg"
            },
            {
                heading: "Signature & Stamp Paste (Removing Backgrounds)",
                text: "If you have a digital signature on white paper but need to paste it onto an official form without the white box showing: Select the 'Magic Wand Tool' (W). Click on the white paper around the signature. Press 'Delete' on your keyboard. The background becomes a checkerboard (transparent). Now you can drag the pure signature onto any document!",
                shortcut: "You must double-click the 'Background' layer to unlock it before pressing Delete.",
                imgSrc: "images/ps-08-signature-stamp.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Effects & Final Export",
        topics: [
            {
                heading: "Using Filters & Effects",
                text: "Filters are special effects. If a photo is too blurry, go to Filter > Sharpen > Unsharp Mask to make the details crisp. If a face has too many pimples, use the 'Clone Stamp Tool' to copy clean skin and paint over the marks. You can also adjust the colors using Image > Adjustments > Brightness/Contrast.",
                shortcut: "Ctrl + B (Opens Color Balance to fix yellow or blue skin tones)",
                imgSrc: "images/ps-09-filters.jpg"
            },
            {
                heading: "Exporting in JPG, PNG, and PDF",
                text: "When saving your final work, choose the right format! \n- JPG: Best for normal photos and printing.\n- PNG: Use this ONLY for Signatures and Logos because PNG saves the 'invisible' transparent background.\n- PDF: If you scanned an Aadhaar card and a PAN card and put them on one page, go to File > Save As and choose 'Photoshop PDF' so the customer can print it easily.",
                shortcut: "File > Save As (Always check the 'Format' drop-down list at the bottom)",
                imgSrc: "images/ps-10-export.jpg"
            }
        ]
    }
];
