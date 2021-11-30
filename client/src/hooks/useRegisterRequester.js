import { useEffect, useState } from "react";
import { useContractFunction, useEthers } from "@usedapp/core";

import { utils, constants } from "ethers";
import { Contract } from "@ethersproject/contracts";
import networkMapping from "../contracts/networkMapping.json";
import { networks, abi } from "../contracts/PatientRecord.json";

export const useRegisterRequester = () => {
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
 
  const { send: registerRequesterSend, state: registerRequesterState } =
    useContractFunction(patientRecordsContract, "registerRequester", {
      transactionName: "register Requester",
    });

  const registerRequester = (requesterAddr, RequesterType, name, region) => {
    return registerRequesterSend(
      requesterAddr,
      RequesterType,
      utils.formatBytes32String(name),
      region
    );
  };

  const [state, setState] = useState(registerRequesterState);
  return { registerRequester, registerRequesterState };
};
