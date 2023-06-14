import  Sequelize  from "sequelize";
const db = new Sequelize("appviajes","root","shinigami159789",{
    host: "localhost",
    dialect: "mysql",
    port: "3306",
    define: {
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db;