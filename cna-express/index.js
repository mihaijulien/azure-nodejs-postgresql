const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://student%40cna-db.postgres.database.azure.com:Pa55w0rd1234@cna-db.postgres.database.azure.com:5432/cnainventory')
// establish a connection to the cnainventory database using sequalize
sequelize
.authenticate()
.then(() => {
   console.log('Connection has been established successfully.');
})
.catch(err => {
   console.error('Unable to connect to the database:', err);
});

// work with the inventory table from the db by creating the Sequalize-specific definition
// matching the table format
const Inventory = sequelize.define('inventory', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    quantity: { type: Sequelize.INTEGER },
    date: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW }
 }, {
    freezeTableName: true,
    timestamps: false
 });

 const port = process.env.PORT || 8080
 const app = express()

app.use(express.json());

app.listen(port, () => console.log(`Sample app is listening on port ${port}!`));
