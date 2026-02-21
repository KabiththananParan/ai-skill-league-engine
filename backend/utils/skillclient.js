const axios = require('axios');

const PHYTHON_URL = process.env.PHYTHON_SERVICE_URL;

exports.calculateSkills = async (matches) => {
    try{
        const responce = await axios.post(`${PYTHON_URL}/calculate`,matches);
        return responce.data;
    }catch(error){
        console.error('skill engine error:',error.responce?.data||error.message);
        throw new Error('skill calculation failed');
    }
};