/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC20Lift,
  IERC20LiftInterface,
} from "../../../sol/interfaces/IERC20Lift";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "avatar",
        type: "address",
      },
      {
        internalType: "enum CirclesType",
        name: "circlesType",
        type: "uint8",
      },
    ],
    name: "ensureERC20",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERC20Lift__factory {
  static readonly abi = _abi;
  static createInterface(): IERC20LiftInterface {
    return new Interface(_abi) as IERC20LiftInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IERC20Lift {
    return new Contract(address, _abi, runner) as unknown as IERC20Lift;
  }
}
