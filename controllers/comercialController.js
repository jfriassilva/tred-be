import Comercial  from "../services/Comercial.js";


const comercial = async (req, res) => {
    
    const {Comercial} = req;

    res.json(Comercial);
};

export {comercial};