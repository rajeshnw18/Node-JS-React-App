const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/orders').get((request,response)=>{
    dboperations.getOrders().then(result => {
       response.json(result[0]);
       console.log(result.recordset);
    })

})

router.route('/orders/:Id').get((request,response)=>{
   dboperations.getOrder(request.params.Id).then(result => {
      response.json(result[0]);
   })

})

router.route('/orders').post((request,response)=>{
   let order = {...request.body}
   dboperations.addOrder(order).then(result => {
      response.status(201).json(result);
   })

})


var port = process.env.PORT || 5001;
app.listen(port);
console.log('Order API is runnning at ' + port);



