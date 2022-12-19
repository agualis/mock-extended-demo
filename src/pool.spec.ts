import { mock } from 'vitest-mock-extended';
import { renderUserPercentage } from './pool';
import { Pool } from './types';

it("renders user's Balance percentage in a pool", () => {
  const poolMock = mock<Pool>();
  poolMock.totalLiquidity = '100';
  poolMock.userBalance = 25;

  expect(renderUserPercentage(poolMock)).toBe('25%');
});

it("renders user's Balance percentage in a pool (using builder)", () => {
  const poolMock = aPool({ totalLiquidity: '100', userBalance: 25 });
  expect(renderUserPercentage(poolMock)).toBe('25%');
});

function aPool(overridden: Partial<Pool>): Pool {
  return Object.assign({}, mock<Pool>(), overridden);
}
