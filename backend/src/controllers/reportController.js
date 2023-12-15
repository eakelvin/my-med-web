const Report = require('../models/report')

const countVisits = async(req, res) => {
    const { user } = req.body
    // console.log('User ID:', user);

    try {
        // const userId = ObjectId.isValid(user) ? new ObjectId(user) : user

        const report = await Report.findOneAndUpdate(
            { user },
            { $inc: { pageVisits: 1} },
            { new: true }
        )

        if (!report) {
            return res.status(404).json({ error: 'User not found' });
        }

        console.log(report);
        res.json({ pageVisits: report.pageVisits})
    } catch (error) {
        console.error('Error during countVisits:', error);
        res.status(500).json({ error: 'Interval Server Error'})
    }
}

const getPageVisits = async(req, res) => {
    const userId = req.params.user
    try {
        const page = await Report.findById(userId)
        if (!page) {
            return res.status(404).json({ error: "User not found"})
        }
        res.json({ pageVisits: page.pageVisits })
    } catch (error) {
        res.status(500).json({ error: 'Interval Server Error'})
    }
}

module.exports = { countVisits, getPageVisits }