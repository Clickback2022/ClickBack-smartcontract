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

Use `deploy.js` to deploy the ClickBack token smart contract
Use `deployUpg.js` to deploy the ClickBackUpg token smart contract

## Links

- [ClickBack (non upgradeable) Testnet Token Contract -  0xA0655dd91fD74Ffb69eF82C983f3BB9c6b9f6c0A ](https://testnet.bscscan.com/address/0xA0655dd91fD74Ffb69eF82C983f3BB9c6b9f6c0A)
- [ABI of Token](./artifacts/contracts/ClickBack.sol/ClickBack.json)
- [Openzeppelin Defender](https://defender.openzeppelin.com/)
- [ClickBack Upgradeable Testnet Token Contract - 0x2B9244F33D42033B9309a7C394738D9A70B7eb5c](https://testnet.bscscan.com/address/0x2b9244f33d42033b9309a7c394738d9a70b7eb5c)

## Audit-Scope
Solidity files that need auditing
|--|
[`ClickBack.sol`](./contracts/ClickBack.sol) -  Non Upgradeable ClickBack token contract is to be deployed on BSC chain. |
