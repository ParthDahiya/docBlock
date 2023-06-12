import web3 from "./web3";
import PatientData from "./build/PatientData.json";

const instance = new web3.eth.Contract(
    PatientData.abi,
    "0x3B6D0Ad446e0a3699CF3EDfE5ECF69e3C7945a51"
);

export default instance;