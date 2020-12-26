var ProofOfExistence1 = artifacts.require('./ProofOfExistence1.sol');
var ProofOfExistence2 = artifacts.require('./ProofofExistence2.sol');
var ProofOfExistence3 = artifacts.require( './ProofOfExistence3.sol');

module.exports= function(deployer){
    deployer.deploy(ProofOfExistence1);
}; // This script tells Truffle to get the contract information from ProofOfExitence.sol and deploy it to the specified network.

module.exports= function(deployer){
    deployer.deploy(ProofOfExistence2);
}; // This script tells Truffle to get the contract information from ProofOfExitence2.sol and deploy it to the specified network.

module.exports= function(deployer){
    deployer.deploy(ProofOfExistence3);
}; // This script tells Truffle to get the contract information from ProofOfExistence3.sol and deploy it to the specified network.