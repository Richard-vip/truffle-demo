const MetaCoin = artifacts.require('MetaCoin');
const Playground = artifacts.require('Playground');

module.exports = async function (deployer) {
     await deployer.deploy(MetaCoin);
     await deployer.deploy(Playground);
};
