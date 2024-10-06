import React, { useState, useEffect } from "react";
import "./StyleHome.css";

const Countdown = ({ hours, minutes }) => {
  const targetTime = new Date();
  targetTime.setHours(targetTime.getHours() + hours);
  targetTime.setMinutes(targetTime.getMinutes() + minutes);

  const calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const remainingHours = Math.floor(timeDifference / (1000 * 60 * 60));
    const remainingMinutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  };

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer when the component is unmounted
  }, []);

  return (
    <div>
      <p className="timerShowingPara">
        Ending In{" "}
        <b className="boldTimerShowingPara">
          {remainingTime.hours.toString().padStart(2, "0")}{" "}
        </b>
        Hours<span className="colonTimerSpan">:</span>
        <b className="boldTimerShowingPara">
          {" "}
          {remainingTime.minutes.toString().padStart(2, "0")}
        </b>
        Mins<span className="colonTimerSpan">:</span>
        <b className="boldTimerShowingPara">
          {" "}
          {remainingTime.seconds.toString().padStart(2, "0")}
        </b>
        Sec
      </p>
    </div>
  );
};

export default Countdown;
