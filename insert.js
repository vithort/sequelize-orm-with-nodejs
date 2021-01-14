const { db, Student } = require('./model');

const task = async () => {
  try {
    await db.sync({ alter: true });

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
