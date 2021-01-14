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

const task = async () => {
  try {
    await db.sync({ alter: true });

    // Insert a Student
    /*
    await Student.create({
      name: 'Some Person',
      age: 20,
    });
    */
    for (let i = 0; i < 30; i++) {
      await Student.create({
        name: [
          'Vithor',
          'Cesar',
          'Eros',
          'Caimi',
          'Jussara',
          'Iara',
          'Djara',
          'Ubiratan',
          'Ubirajara',
          'Jurandy',
        ][parseInt(Math.random() * 10)],
        age: 10 + parseInt(Math.random() * 10),
      });
    }
  } catch (e) {
    console.log(e);
  }
};

task();

// alter: faz alterações
// force: faz o drop e cria novamente
/*
db.sync({ alter: true })
  .then(() => console.log('Database synchronized!'))
  .catch(console.error);
*/
