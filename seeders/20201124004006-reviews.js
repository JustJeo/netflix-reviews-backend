'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bulkReviews = await queryInterface.bulkInsert('reviews', [
      {
        category: 'Trending',
        title: 'The Crown',
        publisher: 'Brock Nguyen',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/6b3cd76029c568a126e982d6c1a93bc4/The_Crown_Image.png',
        content: 'The cold open of the Crown\'s fourth season premiere is a fitting one for 2020, because its resoundingly bleak. Sure on the surface, the first eight minutes of the episode teaser us with...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {

        category: 'Trending',
        title: 'The Queens Gambit',
        publisher: 'Lauren Cabrigas',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/709c41f03fbb485cf350752db17c4050/The_Queens_Gambit_Image.png',
        content: 'Anya Taylors performance in The Queens Gambit is impertuable with an almost robotic quality as the chess prodigy darting from tournament to tournament, moving down opponent...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Trending',
        title: 'Supernatural',
        publisher: 'Jamie Molmen',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/2980049486bb578fbf0ded6bb512d2f3/Supernatural_Image.png',
        content: 'Supernaturals\' long awaited season final not only said goodbye to Sam & Dean Winchester, but also bid adieu to some of the fans\' favorite supporting characters and moments with...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'LGBTQIA',
        title: 'Schitts Creek',
        publisher: 'Jane Franco',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/cc5be0ea2081af1dca15fd923b6d5672/Schitts_Creek_Image.png',
        content: 'Leave it to Schitts Creek to bestow gift after gift upon us in these troubling times. The world may be burning, but at least for 30 minutes we get to bask in the glow of guest appearances by...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'LGBTQIA',
        title: 'Pose',
        publisher: 'Lucy Jenkins',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/b3b528eca9eab94365f1f8c54185261a/Pose_Image.png',
        content: 'There\'s never been a more urgent time to have Pose in our lives. Amid social unrest and a global pandemic, the fabulous world of New York\'s ballroom scene in the 80\'s and 90\'s is sorely...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'LGBTQIA',
        title: 'Sex Education',
        publisher: 'Casey Cho',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/f4df4de916618911bc0b1f6bda99dce3/Sex_Educaiton_Image.png',
        content: 'One of the biggest disadvantages of recapping a show that\'s clearly been designed for bingeing is that while you can sense the drama building across multiple storylines, it\'s with the...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Black Voices',
        title: 'Homecoming',
        publisher: 'Brock Carbonell',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/774c98cb73caba7083838d7e18c32b79/Homecoming_Image.png',
        content: 'This intimate, in-depth look at Beyonce\'s celebrated 2018 Coachella performance reveals the emotional road from creative concept to cultural movement...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Black Voices',
        title: 'The Game',
        publisher: 'Mario Phoenix',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/03b2ea16cd8035d15e4d64780c000e26/The_Game_Image.png',
        content: 'Melanie confesses to Derwin; Malik\'s relationship with Jenna; Jason\'s wild night in Mexico. Tee-Tee gives Tasha some words of advice. In the second half of the fifth season...',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: 'Black Voices',
        title: 'Self Made',
        publisher: 'Jamie Molmen',
        coverArtUrl: 'https://trello-attachments.s3.amazonaws.com/5fbc62350f4f453fd20448a6/846x840/c6d5086e30118ad97e36a800fd539a60/Self_Made_Image.png',
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
