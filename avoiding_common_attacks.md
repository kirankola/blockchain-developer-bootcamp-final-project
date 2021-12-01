##Using Specific Compiler Pragma 
Floating pragma (SWC-103)
Specific compiler pragma 0.8.0 used in contracts to avoid accidental bug inclusion through outdated compiler versions.

SWC-134 - Avoid the use of transfer() and send(), and without specifying a fixed amount of gas (see https://swcregistry.io/docs/SWC-134) - in patientRecord.sol transfer function

Unprotected Ether withdrawal (SWC-105)
withdraw are protected with OpenZeppelin Ownable's onlyOwner modifier.