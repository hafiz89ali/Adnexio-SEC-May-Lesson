import multer from "multer";

const upload = multer({
    // dest is the destination folder where the uploaded files will be stored
    dest: "uploads/",
});

export default upload;