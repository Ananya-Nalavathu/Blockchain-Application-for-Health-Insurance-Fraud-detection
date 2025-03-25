// Web3.js Integration (app.js)
const Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const contractABI = [ /* ABI from compiled contract */ ];
const contractAddress = '0xYourContractAddressHere';
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function submitClaim(patientName, hospital, amount, claimHash, account) {
    await contract.methods.submitClaim(patientName, hospital, amount, claimHash)
        .send({ from: account });
    console.log("Claim submitted successfully");
}

async function approveClaim(claimId, account) {
    await contract.methods.approveClaim(claimId)
        .send({ from: account });
    console.log("Claim approved successfully");
}

async function getClaim(claimId) {
    const claim = await contract.methods.getClaim(claimId).call();
    console.log("Claim Details:", claim);
}

module.exports = { submitClaim, approveClaim, getClaim };