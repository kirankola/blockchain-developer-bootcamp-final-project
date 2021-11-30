import { DAppProvider, ChainId } from "@usedapp/core";
import { Header } from "./components/Header";
import { Container } from "@material-ui/core";
import { Main } from "./components/Main";

import { networks } from "./contracts/Multicall.json";
//import { useEthers } from "@usedapp/core";
//import { utils, constants } from "ethers";
function App() {
  //const { ChainId } = useEthers();

  const multicallAddress = networks["5777"].address;
 
  const config = {
    readOnlyUrls: {
      1337: "http://localhost:8545",
    },
    multicallAddresses: {
      1337: multicallAddress,
    },
    supportedChains: [1337,ChainId.Rinkeby],
  };

  console.log(multicallAddress, config);
  return (
    <DAppProvider config={config}>
      <Header />
      <Container maxWidth="md">
        <Main />
      </Container>
    </DAppProvider>
  );
}

export default App;
