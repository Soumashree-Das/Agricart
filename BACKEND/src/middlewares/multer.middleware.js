import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {//req get all the request and if some file is being uploaded that can also be stored. reason why we use multer 
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)//here we upload the folder as its original name which will temporarily be uploadedto cloudede and then stored in the desired area. Use the documentation to customize accoridng to needs
    }
  })
  
export const upload = multer({ 
    storage, 
})