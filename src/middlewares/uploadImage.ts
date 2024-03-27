import multer from "multer";

export default multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log('passou por aqui')      
            cb(null, './uploads/usuario')
        },
        filename: (req, file, cb) => {
            cb(null, `usuario_${Date.now()}`)
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