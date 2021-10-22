const RadaToken = artifacts.require("RadaToken");
const Store = artifacts.require("Store");

module.exports = function (deployer) {
  
  const radaToken = deployer.deploy(RadaToken, "1000000000000000000000000000"); // ERC20
  
  const store = deployer.deploy(Store);

  // deployer.deploy(
  //   Store,
  //   "0x5A48f26da5Fb04794B151cf79eA1DE845733cD9B",
  //   "0xa5C437923186209786D54767c5026272fb20D48a"
  // );
};
