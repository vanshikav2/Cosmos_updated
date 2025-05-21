// const Transaction = artifacts.require("transaction");
//
// module.exports = function (deployer) {
//     deployer.deploy(Transaction);
// };

// 1_deploy_initial_contracts.js
const Transaction = artifacts.require("DataExchange");

module.exports = function (deployer) {
    deployer.deploy(Transaction)
        .then(() => console.log("Transaction contract deployed successfully!"))
        .catch((error) => console.error("Deployment failed:", error));
};
