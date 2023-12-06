const Medicine = require('../models/medicine')

const addMedicine = async (req, res) => {
    try {
        // const { _id: userId } = req.user;
        // const savedMedicine = await Medicine.create({ ...req.body, user: userId});
        const savedMedicine = await Medicine.create(req.body);
        res.status(201).json(savedMedicine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getMedicines = async (req, res) => {
  try {
    console.log(req.user.id);
    if (req.user.id !== req.params.id) {
      const medicines = await Medicine.find({ user: req.params.id});
      res.status(200).json(medicines);
    } else {
      res.status(403).json({ error: 'Access forbidden. You can only access your own medicines.' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getMedicine = async(req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        if (!medicine) {
          return res.status(404).json({ error: 'Medicine not found' });
        }
        res.status(200).json(medicine);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateMedicine = async (req, res) => {
    try {
        const updatedMedicine = await Medicine.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true } // Return the updated document
        );
        if (!updatedMedicine) {
          return res.status(404).json({ error: 'Medicine not found' });
        }
        res.status(200).json(updatedMedicine);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteMedicine = async (req, res) => {
    try {
        const deletedMedicine = await Medicine.findByIdAndDelete(req.params.id);
        if (!deletedMedicine) {
          return res.status(404).json({ error: 'Medicine not found' });
        }
        res.status(200).json(deletedMedicine);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addMedicine, getMedicines, getMedicine, updateMedicine, deleteMedicine }