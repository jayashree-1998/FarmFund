const GovtInput = artifacts.require("GovtInput");
const Crop = artifacts.require("Crop");
const CropFactory = artifacts.require("CropFactory");

module.exports = async function(deployer) {
  await deployer.deploy(Crop,'0x0000000000000000000000000000000000000000');
  await deployer.deploy(GovtInput);
  await deployer.deploy(CropFactory);
};
