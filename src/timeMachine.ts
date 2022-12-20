import { TimeMachine } from './types';

export function calculateSpeedometerPercentage(machine: TimeMachine): string {
  const speedometerPercentage =
    (machine.userSpeed / Number(machine.maxSpeed)) * 100;
  return `${speedometerPercentage}%`;
}
