import { mock } from 'vitest-mock-extended';
import { OnchainDestinationData, OnchainTimeMachineData, TimeMachine, TimeMachineDestination } from './types';

const defaultDestinations = [aDestination('Woodstock, 1969'), aDestination('Berlin, 1989')]

export function aTimeMachine(
  overridden?: Partial<TimeMachine>
): TimeMachine {
  const defaults: Partial<TimeMachine> = {
    maxSpeed: '100',
    userSpeed: 0,
    timeTravelEnabled: true,
    destinations: defaultDestinations,
    onchain: anOnchainMachineData()
  };

  return Object.assign(mock<TimeMachine>(), defaults, overridden);
}

export function aDestination(
  overriddenDestination?: TimeMachineDestination
): TimeMachineDestination {
  const defaultDestination: TimeMachineDestination = 'Woodstock, 1969';
  return overriddenDestination || defaultDestination;
}

export function anOnchainMachineData(overridden?: Partial<OnchainTimeMachineData>): OnchainTimeMachineData {
  const defaults: Partial<OnchainTimeMachineData> = {
    destinations: buildOnchainDestinationsFrom(defaultDestinations)
  };
  return Object.assign(mock<OnchainTimeMachineData>(), defaults, overridden);
}

function anOnChainDestinationData(destinationName: string): OnchainDestinationData {
  const defaults: Partial<OnchainDestinationData> = {
    name: destinationName,
    boost: 'super',
    speed: 600000,
    symbol: '☮️',
  };

  return Object.assign(mock<OnchainDestinationData>(), defaults);
}

function buildOnchainDestinationsFrom(destinations: string[]) {
  let result: Record<string, OnchainDestinationData> = {};
  destinations.forEach(destination => {
    result[destination] =  anOnChainDestinationData(destination)
    return result;
  });
  return result;
}