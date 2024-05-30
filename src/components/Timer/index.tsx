import { useEffect, useRef, useState } from "react";

// Containers and Components ----------------------------------------
import CommonHeader from "../../common/CommonHeader";
import CommonBodyLayout from "../../common/CommonBodyLayout";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
// ------------------------------------------------------------------

// Styles -----------------------------------------------------------
import "./Timer.scss";
// ------------------------------------------------------------------

// * CONSTANTS ------------------------------------------------------
const START_VALUE = 60;
// * ----------------------------------------------------------------

function Timer() {
  // * Component State - Variables ----------------------------------
  const [timerCount, setTimerCount] = useState<number>(START_VALUE);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  // * --------------------------------------------------------------

  // * Refs ---------------------------------------------------------
  const intervalRef = useRef<number | null>(null);
  // * --------------------------------------------------------------

  const startTimer = () => {
    if (!isTimerRunning) {
      setIsTimerRunning(true);
      intervalRef.current = window.setInterval(() => {
        setTimerCount((preValue) => preValue - 1);
      }, 1 * 1000);
    }
  };

  const pauseResetTimer = (reset?: boolean) => {
    if (isTimerRunning && intervalRef.current !== null) {
      setIsTimerRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (reset) {
      setTimerCount(0);
    }
    setIsTimerRunning(false);
  };

  useEffect(() => {
    if (timerCount === 0) {
      pauseResetTimer(true);
      setTimerCount(START_VALUE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerCount]);

  return (
    <div className="timer-wrapper">
      <CommonHeader>Timer</CommonHeader>

      <CommonBodyLayout>
        <Card className="w-fit m-auto">
          <CardContent>
            <div className="timer-count-wrapper">
              <h1>{timerCount}</h1>
            </div>
          </CardContent>

          <CardFooter>
            <div className="timer-btns">
              <Button
                className="min-w-[90px]"
                onClick={startTimer}
                disabled={isTimerRunning}
              >
                {!isTimerRunning && timerCount !== START_VALUE
                  ? "Resume"
                  : "Start"}
              </Button>
              <Button
                className="min-w-[90px]"
                onClick={() => pauseResetTimer()}
                disabled={!isTimerRunning}
              >
                Pause
              </Button>
              <Button
                className="min-w-[90px]"
                onClick={() => pauseResetTimer(true)}
                disabled={timerCount === START_VALUE}
              >
                Reset
              </Button>
            </div>
          </CardFooter>
        </Card>
      </CommonBodyLayout>
    </div>
  );
}

export default Timer;
