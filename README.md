# Kiran Kola's Consensys Blockchain Bootcamp Final Project: Patient record keeper and sales
## Project Scope
  Basic idea to give all Medical patients access to store medical records and let Researcher's hospital's and Student buy for research needs. The idea is to provide benefits of data to all the actors in the activity. It's built using the React, useDapp, truffle, Oppenzepllin,solidity.

  1. We have 3 actors 
    -Admin  
      ` regsiters Patients and requesters wallet addresses and informations
    -Patient
      Creates a medical records for sale
    -Requesters 
      purchase paients medical records


### Prerequisites
- npm
- Node.js >= v14.18.1
- React

- ## Truffle
    ### Get Started
      ``` cd truffle```
   - ### Installation
        ```npm install```
  -  ## Testing locally
      - run local test network ``` truffle develop```
      - then execute  ``` test```
    ## configuration
      - copy .sampleSecret to .secret with your privatekey or  mnemonic
  - ## Deployment to a networkName (ex: Rinkeby)
    1. run ``` truffle migrate --network [networkName]``` 
    ## to copy contracts.json from truffle to front end
    2. run ``` ./copytofrontend.sh``` 
- ## Front end
    ### Get Started
      ``` cd client```
   - ### Installation
        ``` npm install```
   - ### Run locally
        ``` npm run start```
   - ### Build
        ``` npm run build```
  ## Deployed Local Frontend: 
    http://localhost:3000/
    Make sure that your Metamask is set to localhost:8545.

    ## Deployed Public Frontend
https://kirankola.github.io/blockchain-developer-bootcamp-final-project/
      
 
## Tested Contract Address Rinkeby deployment
  0xB1605078F5a61376Af9cF2AbAE9d058826d9aEF8

  