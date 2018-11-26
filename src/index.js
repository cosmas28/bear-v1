// BASE SETUP

// call the packages we need
import 'dotenv/config';
import express from 'express';
import { urlencoded, json } from 'body-parser';

// define our app using express
const app = express();

// configure app to use bodyParser()
app.use(urlencoded({ extended: true }));
app.use(json());

// get an instance of express Router
const router = express.Router();

// test if everything is working fine
router.get('/', (request, response) => {
  response.json({
    "Message": "Congrats man. You made it!"
  });
});

// register our routes
app.use('/api/v1/bear', router);

// start the server
app.listen(process.env.PORT);
