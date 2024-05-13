const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const app = express();
// Increase the limit for request size (e.g., 10MB)
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

const port = process.env.PORT || 4000;

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });
  
//   const upload = multer({ dest: 'uploads/' });

  
//   app.use('/uploads', express.static('uploads'));

// const dbPool = mysql.createPool({
//     host: '185.3.235.202',
//     port: 3306,
//     user: 'h187338_database',
//     password: 'Ddlgn2023.',
//     database: 'h187338_publicsp_gruene-washington-de',
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
