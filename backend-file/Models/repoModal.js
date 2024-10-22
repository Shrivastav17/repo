import mongoose from 'mongoose';
const { Schema } = mongoose;

const repoSchema = new Schema({

    uniqueNo: String,
    creationDate: Date,
    lanNo: String,
    customerName: String,
    zone: String,
    region: String,
    branch: String,
    portfolio: String,
    pos: String,
    otherCharges: String,
    rcNo: String,
    chassisNo: String,
    engineNumber: String,
    make: String,
    model: String,
    yearOfManufacturing: Number,
    repoOrSurrender: String,
    lrnDate: Date,
    viaSec17Sec9: String,
    doYouWantToUploadLrn: Boolean,
    uploadLrn: String,
    prePoliceIntimation: String,
    postPoliceIntimation: String,
    inventoryUpload: String,
    surrenderLetter: String,
    dateOfRepo: Date,
    surrenderDate: Date,
    originalRcBookAvailability: String,
    branchOrStockyard: String,
    empanelledYard: String,
    parkingYardAddress: String,
    yardContactPerson: String,
    yardContactPersonContactNo: String,
    yardRentPerDay: Number,
    empanelledRepoAgency: String,
    repoAgencyName: String,
    additionalRepoExpensesIfAny: String,
    additionalRepoExpensesAmount: Number,
    reasonOfAdditionalRepoExpenses: String,
    normalRepoExpenses: Number,
    totalRepoExpenses: Number,
    user_image: String,
    timestamp: { type: Date, default: Date.now }
});

//model create--> schema bind collection
const repoModel = mongoose.model('repo', repoSchema);
export default repoModel;