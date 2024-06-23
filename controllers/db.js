const mongoose = require('mongoose');
const { Types } = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    CustomerID: { type: Number, unique: true },
    Name: String,
    PassportData: String,
    DateOfBirth: Date,
    Address: String,
    Comment: String,
});

const DeleteLogSchema = new mongoose.Schema({
    documentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    documentType: {
        type: String,
        required: true,
    },
    deletedAt: {
        type: Date,
        default: Date.now,
    },
});

const DeleteLog = mongoose.model('DeleteLog', DeleteLogSchema);
CustomerSchema.post('findOneAndDelete', async doc => {
    const id = doc.CustomerID;
    await DeleteLog.create({
        documentId: new Types.ObjectId(+id),
        documentType: 'Customer',
    });
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = {
    Customer,
    DeleteLog,
};
