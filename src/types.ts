export interface Pool {
  id: string;
  name: string;
  address: string;
  chainId: number;
  poolType: PoolType;
  poolTypeVersion: number;
  swapFee: string;
  protocolYieldFeeCache: string;
  owner?: string;
  factory?: string;
  tokens: PoolToken[];
  tokensList: string[];
  tokenAddresses?: string[];
  totalLiquidity: string;
  totalShares: string;
  totalSwapFee?: string;
  totalSwapVolume?: string;
  onchain?: OnchainPoolData;
  createTime?: number;
  mainTokens?: string[];
  wrappedTokens?: string[];
  unwrappedTokens?: string[];
  isNew?: boolean;
  volumeSnapshot?: string;
  feesSnapshot?: string;
  boost?: string;
  symbol?: string;
  swapEnabled: boolean;
  amp?: string;
  wrappedIndex?: number;
  mainIndex?: number;
  apr?: AprBreakdown;
  liquidity?: string;
  totalWeight: string;
  lowerTarget: string;
  upperTarget: string;
  priceRateProviders?: PriceRateProvider[];
  userBalance: number;
}

interface OnchainPoolData {
  tokens: Record<Address, OnchainTokenData>;
  totalSupply: string;
  decimals: number;
  swapFee: string;
  amp?: string;
  swapEnabled: boolean;
  tokenRates?: string[];
}

}
interface OnchainTokenData {
    balance: string;
    weight: number;
    decimals: number;
    logoURI: string | undefined;
    name: string;
    symbol: string;
}

type Address = string;

declare enum PoolType {
  Weighted = "Weighted",
  Investment = "Investment",
  Stable = "Stable",
  HighAmpComposableStable = "HighAmpComposableStable",
  ComposableStable = "ComposableStable",
  MetaStable = "MetaStable",
  StablePhantom = "StablePhantom",
  LiquidityBootstrapping = "LiquidityBootstrapping",
  AaveLinear = "AaveLinear",
  Linear = "Linear",
  ERC4626Linear = "ERC4626Linear",
  Element = "Element",
  Gyro2 = "Gyro2",
  Gyro3 = "Gyro3",
  Managed = "Managed"
}

interface PriceRateProvider {
  address: string;
  token: {
      address: string;
  };
}

interface AprBreakdown {
  swapFees: number;
  tokenAprs: {
      total: number;
      breakdown: {
          [address: string]: number;
      };
  };
  stakingApr: {
      min: number;
      max: number;
  };
  rewardAprs: {
      total: number;
      breakdown: {
          [address: string]: number;
      };
  };
  protocolApr: number;
  min: number;
  max: number;
}

interface PoolToken {
  balance: string;
  priceRate?: string;
  weight?: string | null;
  isExemptFromYieldProtocolFee?: boolean;
}
