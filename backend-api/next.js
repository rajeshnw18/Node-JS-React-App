const sql = require('mssql');

const config = {
  user: 'sa',
  password: 'Network@18',
  server: '192.168.41.58',
  database: 'BIREACT',
  options: {
    encrypt: true, // Use encryptiozln
    trustServerCertificate: true, // Bypass the self-signed certificate issue
  },
};

sql.connect(config)
  .then(pool => {
    console.log('Connected to SQL Server!');
    return pool.request().query('SELECT * FROM Orders');
  })
  .then(result => {
    console.log(result.recordset);
  })
  .catch(err => {
    console.error('SQL error', err);
  });
