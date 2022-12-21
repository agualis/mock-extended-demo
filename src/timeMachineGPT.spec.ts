import { aDestination, aTimeMachine } from './builders';
import { timeTravel } from './timeMachineGPT';

it('travels in time 🚀', () => {
  const machineMock = aTimeMachine();

  const logSpy = vi.spyOn(console, 'log').mockImplementationOnce(()=> {});

  timeTravel(machineMock, aDestination('Woodstock, 1969'));

  expect(logSpy).toHaveBeenCalledWith(
    "Time traveling to Woodstock, 1969 (☮️) at speed 600000..."
  )
});

it('Throws error when machine is disabled', () => {
  const machineMock = aTimeMachine({timeTravelEnabled: false, id: 'delorean'});

  expect(() => timeTravel(machineMock, aDestination())).toThrowError(
    'Time travel is not enabled for time machine "delorean".'
  );
});