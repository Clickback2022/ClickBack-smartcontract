# ClickBack-smartcontract


Sections below describes the following : 
1) The purpose of contract
2) How to deploy
3) Scope of Audit

## Table of Content

- [Overview](#overview)
- [How to deploy](#deployment)
- [Audit scope](#audit-scope)

## Overview

| Contract Name | File and Location | Description |
|--|--| --|
|ClickBack| [`ClickBack.sol`](./contracts/ClickBack.sol) | ERC20 token with preminted tokens, burn and snapshot functionalities. Cannot be upgraded and no functionality can be changed once deployed.|
|ClickBackUpg| [`ClickBackUpg.sol`](./contracts/ClickBackUpg.sol) | Upgradeable ERC20 token with preminted tokens, burn, pause and snapshot functionalities. |

## Deployment

Use `deployMain.js` to deploy the ClickBack token smart contract
Use  `npx hardhat run --network bsctest scripts/deployMain.js --show-stack-traces`
Use  `npx hardhat  verify --network bsctest "contractaddress" "ownership"` to verify the contract
Use `deployUpg.js` to deploy the ClickBackUpg token smart contract

## Links

- [ClickBack (non upgradeable) Testnet Token Contract -  0x884B2867b8594bD5EFbE72d8F756D55D7d3e5706 ](https://testnet.bscscan.com/token/0x884B2867b8594bD5EFbE72d8F756D55D7d3e5706)
- [ABI of Token](./artifacts/contracts/ClickBack.sol/ClickBack.json)
- [Openzeppelin Defender](https://defender.openzeppelin.com/)
- [ClickBack Upgradeable Testnet Token Contract - ]

## Audit-Scope
Solidity files that need auditing
|--|
[`ClickBack.sol`](./contracts/ClickBack.sol) -  Non Upgradeable ClickBack token contract is to be deployed on BSC chain. |

## SmartContract_Audit
- [ClickBack SmartContract_Audit](SmartContract_Audit_Solidproof_ClickBack.pdf)
