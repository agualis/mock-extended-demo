import { mock } from 'vitest-mock-extended';
import { calculateSpeedometerPercentage } from './timeMachine';
import { TimeMachine } from './types';

it('calculates speed percentage', () => {
  const machineMock = mock<TimeMachine>();
  machineMock.maxSpeed = '100';
  machineMock.userSpeed = 25;

  expect(calculateSpeedometerPercentage(machineMock)).toBe('25%');
});

it('calculates speed percentage (using builder)', () => {
  const machineMock = aTimeMachine({ maxSpeed: '100', userSpeed: 25 });
  expect(calculateSpeedometerPercentage(machineMock)).toBe('25%');
});

function aTimeMachine(overridden: Partial<TimeMachine>): TimeMachine {
  return Object.assign(mock<TimeMachine>(), overridden);
}

it('calculates speed percentage (using builder with defaults)', () => {
  const machineMock = aTimeMachineWithDefaults({
    maxSpeed: '200',
    userSpeed: 20,
  });
  expect(calculateSpeedometerPercentage(machineMock)).toBe('10%');
});

function aTimeMachineWithDefaults(
  overridden: Partial<TimeMachine>
): TimeMachine {
  const defaults: Partial<TimeMachine> = {
    maxSpeed: '100',
    userSpeed: 0,
  };
  return Object.assign(mock<TimeMachine>(), defaults, overridden);
}
