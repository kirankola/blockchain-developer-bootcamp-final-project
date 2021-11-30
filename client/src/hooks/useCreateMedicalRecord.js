import { useState } from "react";
import { useContractFunction, useEthers } from "@usedapp/core";

import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";
import networkMapping from "../contracts/networkMapping.json";
import { networks, abi } from "../contracts/PatientRecord.json";

export const useCreateMedicalRecord = () => {
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

  const { send: createMedicalRecordSend, state: createMedicalRecordState } =
    useContractFunction(patientRecordsContract, "createMedicalRecord", {
      transactionName: "create medical record",
    });

  const createMedicalRecord = (IPFShash, memo, price) => {
    console.log(IPFShash, memo, price);
    return createMedicalRecordSend(
      IPFShash,
      memo,
      utils.parseEther(price.toString())
    );
  };

  const [state, setState] = useState(createMedicalRecordState);
  return { createMedicalRecord, createMedicalRecordState };
};
