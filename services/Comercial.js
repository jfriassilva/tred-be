import mongoose from "mongoose";

const comercialSchema = mongoose.Schema(
    {
    proyecto: {
        type: String,
        require: true,
        trim: true,
    },
    // img1: {
    //     type: Image ,
    //     require: true,
    //     trim: true,
    // },
    // img2: {
    //     type: Image ,
    //     require: true,
    //     trim: true,
    // },
    // img3: {
    //     type: Image ,
    //     require: true,
    //     trim: true,
    // },
    // img4: {
    //     type: Image ,
    //     require: true,
    //     trim: true,
    // },
    // img5: {
    //     type: Image ,
    //     require: true,
    //     trim: true,
    // },
    // img6: {
    //     type: Image ,
    //     require: true,
    //     trim: true,
    // },
    descripcion: {
        type: String,
        require: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Comercial = mongoose.model("Comercial", comercialSchema);

export default Comercial;