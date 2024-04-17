import { useState, useEffect } from "react";
import FlipNumbers from "react-flip-numbers";

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        const days = String(
          Math.floor(distance / (1000 * 60 * 60 * 24))
        ).padStart(2, "0");
        const hours = String(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, "0");
        const minutes = String(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, "0");
        const seconds = String(
          Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, "0");

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="flex container justify-center items-center text-white gap-10">
      <div>
        <FlipNumbers
          play
          height={40}
          width={30}
          numbers={timeRemaining.days}
          perspective={200}
          maskAlpha={0.5}
          className="text-xl"
        />
        <span> Days </span>
      </div>
      <div>
        <FlipNumbers
          play
          height={40}
          width={30}
          numbers={timeRemaining.hours}
          perspective={200}
          maskAlpha={0.5}
        />
        <span> Hours </span>
      </div>
      <div>
        <FlipNumbers
          play
          height={40}
          width={30}
          numbers={timeRemaining.minutes}
          perspective={200}
          maskAlpha={0.5}
        />
        <span> Minutes </span>
      </div>
      <div>
        <FlipNumbers
          play
          height={40}
          width={30}
          numbers={timeRemaining.seconds}
          perspective={200}
          maskAlpha={0.5}
        />
        <span> Seconds </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
