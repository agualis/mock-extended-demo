export interface TimeMachine {
  id: string;
  name: string;
  address: string;
  modelId: number;
  timeTravelType: TimeTravelType;
  timeTravelVersion: number;
  fluxCapacitorFee: string;
  temporalDisplacementFeeCache: string;
  owner?: string;
  factory?: string;
  destinations: TimeMachineDestination[];
  destinationsList: string[];
  destinationAddresses?: string[];
  totalPower: string;
  totalBoost: string;
  totalFluxCapacitorFee?: string;
  totalTimeTravelVolume?: string;
  onchain?: OnchainTimeMachineData;
  createTime?: number;
  mainDestinations?: string[];
  alternateDestinations?: string[];
  nonExistentDestinations?: string[];
  isNew?: boolean;
  energySnapshot?: string;
  feesSnapshot?: string;
  thrust?: string;
  model?: string;
  timeTravelEnabled: boolean;
  temporalDisplacement?: string;
  alternateIndex?: number;
  mainIndex?: number;
  efficiency?: EfficiencyBreakdown;
  power?: string;
  maxSpeed: string;
  lowerTarget: string;
  upperTarget: string;
  temporalRateProviders?: TemporalRateProvider[];
  userSpeed: number;
}

export interface OnchainTimeMachineData {
  destinations: Record<TimeMachineDestination, OnchainDestinationData>;
  totalPower: string;
  fluxCapacitorFee: string;
  temporalDisplacement?: string;
  timeTravelEnabled: boolean;
  temporalRate?: string[];
}

export interface OnchainDestinationData {
  boost: string;
  speed: number;
  model: string;
  name: string;
  symbol: string;
}

export type TimeMachineDestination = string;

export declare enum TimeTravelType {
  Stable = 'Stable',
  HighComposableStable = 'HighComposableStable',
  MetaLSD = 'MetaLSD',
  StablePhantom = 'StablePhantom',
  GravityFlow = 'GravityFlow',
  Nuclear = 'Nuclear',
  Linear = 'Linear',
  Orbital = 'Orbital',
  Gyro3 = 'Gyro3',
  Managed = 'Managed',
}

export interface TemporalRateProvider {
  address: string;
  flow: {
    address: string;
  };
}

export interface EfficiencyBreakdown {
  fluxRate: number;
  flux: {
    total: number;
    breakdown: {
      [address: string]: number;
    };
  };
  protocolBeta: number;
  min: number;
  max: number;
}

export interface PoolToken {
  balance: string;
  priceRate?: string;
  weight?: string | null;
  isExemptFromYieldProtocolFee?: boolean;
}
