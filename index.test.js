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