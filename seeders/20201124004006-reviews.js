'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkReviews = await queryInterface.bulkInsert('reviews', [
      {
        category: 'Trending',
        title: 'The Crown',
        publisher: 'Brock Nguyen',
        coverArtUrl: '',
        content: 'The cold open of the Crown\'s fourth season premiere is a fitting one for 2020, because its resoundingly bleak. Sure on the surface, the first eight minutes of the episode teaser us with...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        category: 'Trending',
        title: 'The Queens Gambit',
        publisher: 'Lauren Cabrigas',
        coverArtUrl: '',
        content: 'Anya Taylors performance in The Queens Gambit is impertuable with an almost robotic quality as the chess prodigy darting from tournament to tournament, moving down opponent...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Trending',
        title: 'Supernatural',
        publisher: 'Jamie Molmen',
        coverArtUrl: '',
        content: 'Supernaturals\' long awaited season final not only said goodbye to Sam & Dean Winchester, but also bid adieu to some of the fans\' favorite supporting characters and moments with...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'LGBTQIA',
        title: 'Schitts Creek',
        publisher: 'Jane Franco',
        coverArtUrl: '',
        content: 'Leave it to Schitts Creek to bestow gift after gift upon us in these troubling times. The world may be burning, but at least for 30 minutes we get to bask in the glow of guest appearances by...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'LGBTQIA',
        title: 'Pose',
        publisher: 'Lucy Jenkins',
        coverArtUrl: '',
        content: 'There\'s never been a more urgent time to have Pose in our lives. Amid social unrest and a global pandemic, the fabulous world of New York\'s ballroom scene in the 80\'s and 90\'s is sorely...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'LGBTQIA',
        title: 'Sex Education',
        publisher: 'Casey Cho',
        coverArtUrl: '',
        content: 'One of the biggest disadvantages of recapping a show that\'s clearly been designed for bingeing is that while you can sense the drama building across multiple storylines, it\'s with the...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Black Voices',
        title: 'Homecoming',
        publisher: 'Brock Carbonell',
        coverArtUrl: '',
        content: 'This intimate, in-depth look at Beyonce\'s celebrated 2018 Coachella performance reveals the emotional road from creative concept to cultural movement...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Black Voices',
        title: 'The Game',
        publisher: 'Mario Phoenix',
        coverArtUrl: '',
        content: 'Melanie confesses to Derwin; Malik\'s relationship with Jenna; Jason\'s wild night in Mexico. Tee-Tee gives Tasha some words of advice. In the second half of the fifth season...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Black Voices',
        title: 'Self Made',
        publisher: 'Jamie Molmen',
        coverArtUrl: '',
        content: '\"Bootstraps\" ends with John talking to Addie again; she wants to know why customers prefer Sarah\'s product over hers. Ransom sees that CJ is having an affair...',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log('bulk inser: ', bulkReviews)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
