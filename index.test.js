const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        const band = await Band.create({
          name: 'Metallica',
          genre: 'Metal'
        });
        expect(band.name).toBe('Metallica');
        expect(band.genre).toBe('Metal');
      });
      

    test('can create a Musician', async () => {
        const musician = await Band.create({
            name: 'Steve Gary',
            instrument: 'Trumpet'
          });
          expect(band.name).toBe('Steve Gary');
          expect(band.instrument).toBe('Trumpet');
          })
})

describe('Band model', () => {
  beforeAll(async () => {
    // synchronize the models with the database
    await sequelize.sync({ force: true });
  });

  it('should have a hasMany association with Musician', async () => {
    // create a new band
    const band = await Band.create({ name: 'AC/DC' });

    // add two musicians to the band
    await Musician.create({ name: 'Angus Young', instrument: 'guitar', bandId: band.id });
    await Musician.create({ name: 'Brian Johnson', instrument: 'vocals', bandId: band.id });

    // retrieve the musicians associated with the band
    const musicians = await band.getMusicians();

    // check that the musicians property returns an array of the added musicians
    expect(Array.isArray(musicians)).toBe(true);
    expect(musicians.length).toBe(2);
    expect(musicians[0].name).toBe('Angus Young');
    expect(musicians[1].name).toBe('Brian Johnson');
  });
});