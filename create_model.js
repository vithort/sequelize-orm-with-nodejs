const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize('sampledb1', 'sampleuser1', 'samplepass1', {
  host: 'localhost',
  dialect: 'mysql',
});

const Student = db.define('student', {
  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER(2),
    allowwNull: false,
    defaultValue: -1,
  },
});

// alter: faz alterações
// force: faz o drop e cria novamente
db.sync({ alter: true })
  .then(() => console.log('Database synchronized!'))
  .catch(console.error);
