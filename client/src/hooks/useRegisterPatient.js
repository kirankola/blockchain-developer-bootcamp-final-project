import { useEffect, useState } from "react";
import { useContractFunction, useEthers } from "@usedapp/core";

import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";
import networkMapping from "../contracts/networkMapping.json";
import { networks, abi } from "../contracts/PatientRecord.json";

export const useRegisterPatient = () => {
  const { chainId } = useEthers();
  const network = chainId ? networkMapping[chainId] : "5777";
  const patientRecordAddress = chainId
    ? networks[network].address
    : constants.AddressZero;
  console.log(patientRecordAddress);
  const patientRecordsInterface = new utils.Interface(abi);

  const patientRecordsContract = new Contract(
    patientRecordAddress,
    patientRecordsInterface
  );
  /*   function registerPatient(
    address patientAddr,
    string memory region,
    bytes32 ageRange,
    Gender gender
) */
  const { send: registerPatientSend, state: registerPatientState } =
    useContractFunction(patientRecordsContract, "registerPatient", {
      transactionName: "register Patient",
    });

  const registerPatient = (patientAddr, region, ageRange, gender) => {
    console.log("mmmm");
    return registerPatientSend(
      patientAddr,
      region,
      utils.formatBytes32String(ageRange),
      gender
    );
  };

  const [state, setState] = useState(registerPatientState);
  return { registerPatient, registerPatientState };
};
