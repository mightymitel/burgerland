import React, { useRef } from "react";
import cn from "classnames";

interface DateInputProps {
  onChange?: (value: string) => void;
  label?: string;
  value: string;
  className?: string;
}

const DateInput: React.FC<DateInputProps> = ({
  onChange,
  value,
  label = "Date",
  className = "",
}) => {
  const datePickerRef = useRef<HTMLInputElement>(null);
  const jsDate = value ? new Date(value) : undefined;

  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-2 p-2 border rounded-md max-w-xs mx-auto",
        className
      )}
      onClick={() => {
        datePickerRef.current?.showPicker();
      }}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          datePickerRef.current?.showPicker();
        }
      }}
      aria-label="Open date picker"
    >
      <label htmlFor="date-picker" className="text-gray-700">{label}</label>
      <div className="flex items-center md:flex-row flex-col justify-center gap-2">
        <input
          id="date-picker"
          ref={datePickerRef}
          type="date"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="invisible absolute"
          aria-label="Select date"
        />

        <span className="font-bold text-3xl" aria-hidden="true">
          {jsDate ? jsDate.getDate() : "-- /"}
        </span>
        <span className="text-3xl" aria-hidden="true">
          {jsDate ? jsDate.toLocaleString("default", { month: "short" }) : "--"}
        </span>
        <span className="sr-only">
          {jsDate ? jsDate.toLocaleDateString() : "No date selected"}
        </span>
      </div>
    </div>
  );
};

export default DateInput;
