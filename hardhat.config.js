require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/iyhEZpbUIn6pvZb-JwJe4loHn_cYy4hJ",
      accounts: ["PRIVATE_KEY"],
    },
  },
};
