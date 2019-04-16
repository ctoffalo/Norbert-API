var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(express.json());
var Product = require('./../models/Product');

router.get('/', function (req, res) {
    Product.findAll().then(product => {
            res.send(JSON.stringify(product));
        }
    ).catch(function(err) {
        // print the error details
        console.log(err);
    });
});

router.get('/:codigo_product', function (req, res) {
    var codigo_product = req.params.codigo_product;
    Product.findAll({
        where: {
          codigo_product: codigo_product
        }
      }).then(product => {
            res.send(JSON.stringify(product));
            console.log('Se devuelven los datos del producto de código: ' + codigo_product);
        }
    ).catch(function(err) {
        // print the error details
        console.log(err);
    });
});

router.post('/', function (req, res) {
    Product.create(req.body).then(product => {
        console.log("Se ha creado un producto nuevo.");
        res.send('Su producto de código: ' + req.body.codigo_product + ' fue agregado con éxito.');
      }).catch(function(err) {
        // print the error details
        console.log(err);
    });
});

router.put('/', function (req, res) {
    var hshToUpdate = {};
    if(req.body.name_product){
        hshToUpdate['name_product'] = req.body.name_product;
    };
    
    if(Object.keys(hshToUpdate).length > 0 && req.body.codigo_product != undefined){
        Product.update(hshToUpdate, {
            where: {
                codigo_product: req.body.codigo_product
            }
        }).then(() => {
            res.send('Acción realizada con éxito, se ha actualizado el producto de código ' + req.body.codigo_product);
            console.log("Done");
        }).catch(function(err) {
            // print the error details
            res.send('Hubo un error, por favor comuníquese con el equipo de soporte técnico');
            console.log(err);
        });
    }else{
        res.send('Recuerde que debe especificar el campo actualizar y el código del producto.')
    }
});

router.delete('/', function (req, res) {    
    if(req.body.codigo_product != undefined){
        Product.destroy({
            where: {
              codigo_product: req.body.codigo_product
            }
          }).then(() => {
            res.send('Acción realizada con éxito, se ha eliminado el producto de código ' + req.body.codigo_product);
          }).catch(function(err) {
            // print the error details
            res.send('Hubo un error, por favor comuníquese con el equipo de soporte técnico');
            console.log(err);
        });
    }else{
        res.send('Recuerde que debe especificar el código del producto.')
    }
});

module.exports = router;