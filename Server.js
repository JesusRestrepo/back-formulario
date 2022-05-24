const sql = require ('mssql');
const express = require('express');
const Cors = require('cors')

const app = express();

app.use(express.json());
app.use(Cors());

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
  }

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}

app.post('/pilotos', (req, res) => {
  console.log(req.body);
});

app.post('/miembros', (req, res) => {
  console.log(req.body);
});

app.post('/tipo-vuelo', (req, res) => {
  console.log(req.body);
});

app.post('/fecha', (req, res) => {
  console.log(req.body);
});

app.post('/base', (req, res) => {
  console.log(req.body);
});

app.post('/aviones', (req, res) => {
  console.log(req.body);
});

const main = () => {
  const port =  5000;
  return app.listen(port, () => {
    console.log('Conexion exitosa');
  });
};

main();
