import { Pool } from './types';

export function renderUserPercentage(pool: Pool): string {
  const userPercentage = (pool.userBalance / Number(pool.totalLiquidity)) * 100;
  return `${userPercentage}%`;
}
