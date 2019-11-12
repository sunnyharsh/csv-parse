const fs = require('fs')
const Product = require('../model/product');
const csv = require('csv-parser')

exports.product=(req, res, next)=>{
    var file=req.file;  
		fs.createReadStream(file.path).pipe(csv())
			.on('data', (data) => {
				Product.create({
				Year: data.Year,
				Industry_aggregation_NZSIOC: data.Industry_aggregation_NZSIOC,
				Industry_code_NZSIOC: data.Industry_code_NZSIOC,
				Industry_name_NZSIOC: data.Industry_name_NZSIOC,
				Units:data.Units,
				Variable_code:data.Variable_code,
				Variable_name:data.Variable_name,
				Variable_category:data.Variable_category,
				Value:data.Value,
				Industry_code_ANZSIC06:data.Industry_code_ANZSIC06

			});
		})
}

exports.productFetch=(req, res, next)=>{
    Product.findAll()
    .then(data=>{
        res.json({result:data})
    })
    .catch(err=>{
        console.error(err)
    })
}
    