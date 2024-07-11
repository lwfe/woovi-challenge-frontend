"use client";
import { useState, useEffect } from "react";

export function ExpirationDate() {
  const [date, setDate] = useState("");
  const [hourPlus4, setHourPlus4] = useState("");

  useEffect(() => {
    const now = new Date();
    const currentDate = now.toLocaleDateString();
    const currentTimePlus4 = new Date(
      now.setHours(now.getHours() + 4)
    ).toLocaleTimeString();

    setDate(currentDate);
    setHourPlus4(currentTimePlus4);
  }, []);

  return (
    <div className="flex flex-col items-center font-semibold mt-5">
      <p className="text-muted">Prazo de pagamento:</p>
      <span className="font-bold text-foreground">
        {date} - {hourPlus4}
      </span>
    </div>
  );
}
