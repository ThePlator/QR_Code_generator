import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: 'Type in the URL: ',
      name: 'URL',
    },
  ])
  .then((answer) => {
    const url = answer.URL;
    var qr_png = qr.image(url);
    qr_png.on('error', (err) => {
      console.error('QR Image generation error:', err);
    });

    qr_png
      .pipe(fs.createWriteStream('qr_img.png'))
      .on('error', (err) => {
        console.error('Error writing QR image to file:', err);
      })
      .on('finish', () => {
        console.log('QR image successfully saved!');
      });

    fs.writeFile('URL.txt', url, (err) => {
      if (err) {
        console.error('Error writing URL to file:', err);
      } else {
        console.log('URL successfully saved!');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
