const Loan = require('../models/loanModel')
exports.getData = async (req, res) => {
    const loans = await Loan.find()
    res.status(200).json({
        status: "success",
        results: loans.length,
        data: {
            loans
        }
    })
}
exports.getDataByID = async (req, res) => {
    const {id} = req.params
    const loans = await Loan.find({_id: id})
    res.status(200).json({
        status: "success",
        results: loans.length,
        data: {
            loans
        }
    })
}
exports.postData = async (req, res) => {
    const newLoan = req.body
    const loan = await Loan.create(newLoan)
     

    res.status(201).json({
        status: "success",
        data: loan
    })
}
exports.updateDataByID = (req, res) =>{ 
    res.send('PUT')
}
exports.patchDataByID = (req, res) =>{ 
    res.send('PATCH')
}
exports.deleteDataByID = (req, res) =>{
     res.send('DELETE')
}

//module.exports = controller