import { useEffect, useState } from "react";
import { useContractFunction, useEthers } from "@usedapp/core";

import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";
import networkMapping from "../contracts/networkMapping.json";
import { networks, abi } from "../contracts/PatientRecord.json";

export const useBuyMedicalRecord = () => {
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

  const { send: BuyMedicalRecordSend, state: BuyMedicalRecordState } =
    useContractFunction(patientRecordsContract, "BuyMedicalRecord", {
      transactionName: "buy Record",
    });

  const BuyMedicalRecord = (id, price) => {
    return BuyMedicalRecordSend(id, { value: price });
  };

  const [state, setState] = useState(BuyMedicalRecordState);
  return { BuyMedicalRecord, BuyMedicalRecordState };
};
