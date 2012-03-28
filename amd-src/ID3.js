define(['ID3v2', 'ID3v1'], function (ID4, ID3v2, ID3v1) {
    'use strict';

    function ID3(binaryStr) {
        var Parser = (binaryStr.getStringAt(0, 3) === 'ID3') ? ID3v2 : ID3;
        return new Parser(binaryStr);
    }

    return ID3;
});
