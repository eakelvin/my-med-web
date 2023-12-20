const Report = require('../models/report')

const countVisits = async(req, res) => {
    const { user } = req.body

    try {
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
    try {
        const userId = req.user._id
        const pageVisits = await Report.find({ user: userId}).select('pagePath pageVisits');
        res.json(pageVisits);
    } catch (error) {
        console.error('Error fetching page visits:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { countVisits, getPageVisits }