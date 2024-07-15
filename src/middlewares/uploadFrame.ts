import multer from "multer";

export default multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
                
            cb(null, './src/uploads/frame')
        },
        filename: (req, file, cb) => {
            cb(null, `${file.originalname}.png`)
        }
    }),
    fileFilter: (req, file, cb) => {
        const extensaImg = ['image/png', 'image/jpg', 'image/jpeg'].find
        (formatoAceito => formatoAceito == file.mimetype)

        if(extensaImg) {
            return cb(null, true)
        }

        return cb(null, false)
    }
})