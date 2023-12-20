import {useEffect, useState} from 'react';

type RestartCountDownType = (countdown?: number) => void;
type UseCountdownType = (
  seconds: number,
) => [number, number, (countdown?: number) => void];

const useCountdown: UseCountdownType = (seconds: number) => {
  const [countDownLeft, setCountDownLeft] = useState(seconds);

  const restartCountDown: RestartCountDownType = countdown => {
    setCountDownLeft(countdown || seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDownLeft(cd => cd - 1);
    }, 1000);

    if (countDownLeft <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countDownLeft]);

  const mm = Math.floor(countDownLeft / 60);
  const ss = countDownLeft - mm * 60;

  return [mm, ss, restartCountDown];
};

export default useCountdown;
