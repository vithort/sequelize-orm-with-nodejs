const { Op } = require('sequelize');
const { db, Student } = require('./model');

const task = async () => {
  try {
    await db.sync();

    // All
    const students = await Student.findAll();
    // students.forEach((student) => console.log(student.dataValues));

    // Equal
    const students2 = await Student.findAll({ where: { age: 14 } });
    // students2.forEach((student) => console.log(student.dataValues));

    // greater then
    const students3 = await Student.findAll({
      where: { age: { [Op.gt]: 15 } },
      order: [
        ['age', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    // students3.forEach((student) => console.log(student.dataValues));

    // lesser then OR greater then
    const students4 = await Student.findAll({
      where: {
        age: {
          [Op.or]: {
            [Op.lt]: 12,
            [Op.gt]: 18,
          },
        },
      },
      order: [
        ['age', 'DESC'],
        ['name', 'ASC'],
      ],
    });
    students4.forEach((student) => console.log(student.dataValues));

    // console.log(students);
  } catch (e) {
    console.log(e);
  }
};

task();
