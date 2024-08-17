const html_to_pdf = require('html-pdf-node');
const htmlContent = require('../utils/html-template')

const controller = {
    generateFile : async function(req,res){
        try{
            const body = req.body;
            //console.log("this is the bodyyy ",JSON.stringify(body))
            
            let options = { format: 'A4' };
            let file = { content: htmlContent(body) };
            html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
                res.setHeader('ContenteType','application/pdf');
                return res.end(pdfBuffer)
            });
            // return res.status(200).json({
            //     ok:true,
            //     message: "archivo generado con exito",
                
            // })
        }catch(error){
            console.log("error ", error.message);
            return res.status(500).json({
                ok:false,
                message: error.message,
                body:null
            })
        }
    },
}

module.exports = controller