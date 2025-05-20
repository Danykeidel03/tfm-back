const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dp5ykchgc',
  api_key: '954231466152522',
  api_secret: 'yuoUKat03sBicmof7UK2GP0xQPE',
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'photos',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

module.exports = { cloudinary, storage };
