const { db, Center, Season, Batch, Course, Teacher } = require('./models');

const seed = async () => {
  try {
    db.sync({ alter: true });
    await Center.bulkCreate(
      [
        { id: 'PP', name: 'Pitampura', city: 'New Delhi' },
        { id: 'DW', name: 'Dwarka', city: 'New Delhi' },
        { id: 'NO', name: 'Noida', city: 'New Delhi' },
        { id: 'DD', name: 'Dehradun', city: 'Dehradun' },
        { id: 'OL', name: 'Online', city: 'New Delhi' },
      ],
      { ignoreDuplicates: true }
    );

    await Season.bulkCreate(
      [
        { id: 'S', name: 'Summer' },
        { id: 'F', name: 'Fall' },
        { id: 'W', name: 'Winter' },
        { id: 'P', name: 'Spring' },
      ],
      { ignoreDuplicates: true }
    );

    await Batch.bulkCreate(
      [
        // { id: '', year: '', start: '', end: '' },
      ],
      { ignoreDuplicates: true }
    );

    await Course.bulkCreate(
      [
        { id: 'LP', name: 'Launchpad' },
        { id: 'CX', name: 'Crux' },
        { id: 'IB', name: 'Interview Bootcamp' },
        { id: 'AD', name: 'Android Development' },
        { id: 'WD', name: 'Web Development (NodeJS)' },
      ],
      { ignoreDuplicates: true }
    );

    await Teacher.bulkCreate(
      [
        // { name: '' }, { name: '' }, { name: '' }, { name: '' }
      ],
      { ignoreDuplicates: true }
    );
  } catch (e) {
    console.log(e);
  }
};

seed();
