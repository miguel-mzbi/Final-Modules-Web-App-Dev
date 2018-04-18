let blobs = [
    {"id":0, "title":"Title 0", "published":"01/02/3456", "body":"Body 0"},
    {"id":1, "title":"Title 1", "published":"01/02/3456", "body":"Body 1"},
    {"id":2, "title":"Title 2", "published":"01/02/3456", "body":"Body 2"},
    {"id":3, "title":"Title 3", "published":"01/02/3456", "body":"Body 3"},
]

exports.getBlobsEntries = function() {
    return blobs;
}

exports.getBlobEntry = function(id) {
    for(let i = 0; i < blobs.length; i++) {
        if(blobs[i].id == id) {
            return blobs[i];
        }
    }
}