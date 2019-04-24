/**
    Lambda Function to expose Betafire REST API
 **/
const fs = require('fs');
const mime = require('mime-types');
const path = require('path');


exports.handler =main;

function main(event, context, callback) {
    return getContent(event.path, callback);
}

// Get react content for the given url path, serve it or issue a 404
function getContent(urlPath, callback) {
    // index.html for /
    if (urlPath === '/') {
        urlPath = '/index.html';
    }

    // Determine the path on the lambda file system
    var lambdaPath = path.join(process.env.LAMBDA_TASK_ROOT, 'react', urlPath);
    var mimeType = mime.lookup(urlPath);

    // Attempt to read the file, return a 404 on error
    fs.readFile(lambdaPath, (err, data) => {
        if (err) {
            console.error("getContent(" + urlPath + ") => " + err);
            return done(404, JSON.stringify({status: 'Not Found', urlPath: urlPath}), 'application/json', callback);
        } else if (mimeType === 'image/png' ||
    mimeType === 'image/jpeg' ||
    mimeType === 'image/x-icon' ||
    mimeType === 'application/font-woff' ||
    mimeType === 'application/font-woff2' ||
    mimeType === 'application/x-font-ttf') {
        // Serve binary content with base64 encoding
        return done(200, data.toString('base64'), mimeType, callback, true);
    } else {
        return done(200, data.toString(), mimeType, callback);
    }
});

}

// We're done with this lambda, return to the client with given parameters
function done(statusCode, body, contentType, callback, isBase64Encoded = false, isAttachment = false, fileName = '') {
    const headers = {
        'Content-Type': contentType
    };
    if (isAttachment) {
        headers['Content-Disposition'] = `attachment; filename=${fileName}`;
    }
    callback(null, {
        statusCode: statusCode,
        isBase64Encoded: isBase64Encoded,
        body: body,
        headers: headers
    });
}
