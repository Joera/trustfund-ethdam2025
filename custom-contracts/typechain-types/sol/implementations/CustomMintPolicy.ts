/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace CustomMintPolicy {
  export type MintInfoStruct = {
    group: AddressLike;
    blockTimestamp: BigNumberish;
    amount: BigNumberish;
  };

  export type MintInfoStructOutput = [
    group: string,
    blockTimestamp: bigint,
    amount: bigint
  ] & { group: string; blockTimestamp: bigint; amount: bigint };

  export type RotationInfoStruct = {
    contributor: AddressLike;
    firstMintTime: BigNumberish;
    lastPaymentTime: BigNumberish;
  };

  export type RotationInfoStructOutput = [
    contributor: string,
    firstMintTime: bigint,
    lastPaymentTime: bigint
  ] & { contributor: string; firstMintTime: bigint; lastPaymentTime: bigint };
}

export interface CustomMintPolicyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "beforeBurnPolicy"
      | "beforeMintPolicy"
      | "contributorHistory"
      | "eureToken"
      | "getContributorHistory"
      | "getCurrentRecipient"
      | "getMemberStatus"
      | "getRotationSchedule"
      | "getUniqueContributorCount"
      | "isContributor"
      | "rotateSchedule"
      | "rotationSchedule"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "MemberStatusChanged"): EventFragment;

  encodeFunctionData(
    functionFragment: "beforeBurnPolicy",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeMintPolicy",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "contributorHistory",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "eureToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getContributorHistory",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMemberStatus",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRotationSchedule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUniqueContributorCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isContributor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rotateSchedule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rotationSchedule",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "beforeBurnPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeMintPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contributorHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "eureToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContributorHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMemberStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRotationSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUniqueContributorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isContributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rotateSchedule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rotationSchedule",
    data: BytesLike
  ): Result;
}

export namespace MemberStatusChangedEvent {
  export type InputTuple = [member: AddressLike, status: BigNumberish];
  export type OutputTuple = [member: string, status: bigint];
  export interface OutputObject {
    member: string;
    status: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CustomMintPolicy extends BaseContract {
  connect(runner?: ContractRunner | null): CustomMintPolicy;
  waitForDeployment(): Promise<this>;

  interface: CustomMintPolicyInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  beforeBurnPolicy: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [boolean],
    "nonpayable"
  >;

  beforeMintPolicy: TypedContractMethod<
    [
      _minter: AddressLike,
      _group: AddressLike,
      _collateral: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;

  contributorHistory: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [string, bigint, bigint] & {
        group: string;
        blockTimestamp: bigint;
        amount: bigint;
      }
    ],
    "view"
  >;

  eureToken: TypedContractMethod<[], [string], "view">;

  getContributorHistory: TypedContractMethod<
    [_minter: AddressLike],
    [CustomMintPolicy.MintInfoStructOutput[]],
    "view"
  >;

  getCurrentRecipient: TypedContractMethod<[], [string], "view">;

  getMemberStatus: TypedContractMethod<
    [_member: AddressLike],
    [bigint],
    "view"
  >;

  getRotationSchedule: TypedContractMethod<
    [],
    [CustomMintPolicy.RotationInfoStructOutput[]],
    "view"
  >;

  getUniqueContributorCount: TypedContractMethod<[], [bigint], "view">;

  isContributor: TypedContractMethod<
    [_contributor: AddressLike],
    [boolean],
    "view"
  >;

  rotateSchedule: TypedContractMethod<[], [boolean], "nonpayable">;

  rotationSchedule: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        contributor: string;
        firstMintTime: bigint;
        lastPaymentTime: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "beforeBurnPolicy"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "beforeMintPolicy"
  ): TypedContractMethod<
    [
      _minter: AddressLike,
      _group: AddressLike,
      _collateral: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike
    ],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "contributorHistory"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [string, bigint, bigint] & {
        group: string;
        blockTimestamp: bigint;
        amount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "eureToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getContributorHistory"
  ): TypedContractMethod<
    [_minter: AddressLike],
    [CustomMintPolicy.MintInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCurrentRecipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getMemberStatus"
  ): TypedContractMethod<[_member: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRotationSchedule"
  ): TypedContractMethod<
    [],
    [CustomMintPolicy.RotationInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUniqueContributorCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isContributor"
  ): TypedContractMethod<[_contributor: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "rotateSchedule"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "rotationSchedule"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        contributor: string;
        firstMintTime: bigint;
        lastPaymentTime: bigint;
      }
    ],
    "view"
  >;

  getEvent(
    key: "MemberStatusChanged"
  ): TypedContractEvent<
    MemberStatusChangedEvent.InputTuple,
    MemberStatusChangedEvent.OutputTuple,
    MemberStatusChangedEvent.OutputObject
  >;

  filters: {
    "MemberStatusChanged(address,uint8)": TypedContractEvent<
      MemberStatusChangedEvent.InputTuple,
      MemberStatusChangedEvent.OutputTuple,
      MemberStatusChangedEvent.OutputObject
    >;
    MemberStatusChanged: TypedContractEvent<
      MemberStatusChangedEvent.InputTuple,
      MemberStatusChangedEvent.OutputTuple,
      MemberStatusChangedEvent.OutputObject
    >;
  };
}
