var MockSerialPort = function () {
    console.log('MockSerialPort created...')
};

MockSerialPort.prototype.write = function (bytes) {
    console.log('MockSerialPort write: {', bytes.toString(), '}');
};

MockSerialPort.prototype.close = function () {
    console.log('MockSerialPort close()');
};

MockSerialPort.prototype.open = function () {
    console.log('MockSerialPort open()');
};

module.exports = MockSerialPort;