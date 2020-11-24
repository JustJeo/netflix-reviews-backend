const db = require('../models')

const index = (req, res) => {
    db.review.findAll().then((foundReviews) => {
        if(!foundReviews) return res.json({
            message: 'No Reviews found in database.'
        })

        res.status(200).json({ reviews: foundReviews });
    })
}

// const show = (req, res) => {
//     db.review.findAll({
//         where: {
//             id: req.params.id
//         }
//     }).then((foundReview) => {
//         if(!foundReview) return res.json({
//             message: 'Review with provided ID not found.'
//         })
//         res.status(200).json({ review: foundReview })
//     })
// }

module.exports = {
    index
    // show,
}