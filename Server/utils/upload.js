const multer  = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: function (req, file, cb) {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only JPEG, PNG, and JPG files are allowed.'));
        }
    }
});

module.exports = upload;