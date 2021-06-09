const GovtInput = artifacts.require("GovtInput");
const Crop = artifacts.require("Crop");
const RequestFactory = artifacts.require("RequestFactory");

module.exports = async function(deployer) {
  await deployer.deploy(Crop);
  await deployer.deploy(GovtInput);
  await deployer.deploy(RequestFactory);

  const deployedCrop = await Crop.deployed();
  const deployedGovt = await GovtInput.deployed();
  await deployedCrop.setAddress(deployedGovt.address)
  await deployedGovt.setAddress(deployedCrop.address)
};
