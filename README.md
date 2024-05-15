# QR Code Generator

This Node.js script is designed to simplify the process of generating QR code images from URLs. It utilizes the [inquirer](https://www.npmjs.com/package/inquirer) library for user input handling and [qr-image](https://www.npmjs.com/package/qr-image) for QR code generation.

## Installation

To get started, follow these steps:

1. **Clone the Repository**: Begin by cloning this repository to your local machine. You can do this by running the following command in your terminal:

    ```
    git clone <repository_url>
    ```

2. **Navigate to the Directory**: Once the repository is cloned, navigate to the directory containing the code:

    ```
    cd qr-code-generator
    ```

3. **Install Dependencies**: Before running the script, you need to install the required dependencies. Use npm to install them:

    ```
    npm install
    ```

## Usage

To use the QR code generator, follow these instructions:

1. **Run the Script**: Execute the script by running the following command:

    ```
    node index.js
    ```

2. **Input URL**: The script will prompt you to type in the URL for which you want to generate the QR code.

3. **QR Code Generation**: Once you provide the URL, the script will generate a QR code image representing that URL.

4. **Save Output**: The generated QR code image will be saved as `qr_img.png` in the current directory. Additionally, the URL will be saved to a file named `URL.txt`.

## Dependencies

The script relies on the following dependencies:

- [inquirer](https://www.npmjs.com/package/inquirer): Used for user prompts to input the URL.
- [qr-image](https://www.npmjs.com/package/qr-image): Utilized to generate the QR code image.
- [fs](https://nodejs.org/api/fs.html): Standard Node.js module for file system operations.

## Error Handling

The script includes error handling to ensure smooth execution even in the face of unexpected issues. Error handling is implemented for file operations and user input.

## License

This project is licensed under the MIT License. For more information, please refer to the [LICENSE](LICENSE) file.
