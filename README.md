A simple example of a back-end-as-a-service that doesn't work.

## Install

```bash
npm install mock-serialport
```

## Usage

This is how I use this in some of my non-serial ported tests. Like serialservo.

```bash
var fileExists = require('file-exists');
var SerialPort = require('serialport');
var serialPort;
if (fileExists(portName)) {
    serialPort = new SerialPort("/dev/ttyUSB0", {baudRate:9600});
} else {
    serialPort = new MockSerialPort();
}
```

