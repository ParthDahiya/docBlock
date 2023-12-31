const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const PatientData = require('./build/PatientData.json');

const provider = new HDWalletProvider(
  "fatal seven myth aisle shoulder kind rose giggle nasty rib enact aisle",
  "https://sepolia.infura.io/v3/69f06d84671f459dbc70fb6c5d9102ce"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(PatientData.abi)
    .deploy({ data: PatientData.evm.bytecode.object })
    .send({from: accounts[0],  gas: '2000000' })
    .catch((err) => {
      console.error('Error deploying contract:', err);
  });;

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
