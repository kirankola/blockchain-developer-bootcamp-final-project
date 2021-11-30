import { useContractCall, useEthers } from "@usedapp/core";

import { utils, BigNumber, constants } from "ethers";

import networkMapping from "../contracts/networkMapping.json";
import { networks, abi } from "../contracts/PatientRecord.json";
/**
 * Get the staking balance of a certain token by the user in our TokenFarm contract
 * @param address - The contract address of the token
 */
export const useGetMedicalRecords = () => {
  const { account, chainId } = useEthers();
  const network = chainId ? networkMapping[chainId] : "5777";
  const patientRecordAddress = chainId
    ? networks[network].address
    : constants.AddressZero;
  const patientRecordsInterface = new utils.Interface(abi);
 
  const [medicalCounter] =
    useContractCall({
      abi: patientRecordsInterface,
      address: patientRecordAddress,
      method: "getMedicalRecords",
      args: [],
    }) ?? [];
  console.log(medicalCounter);
  return medicalCounter;
};
