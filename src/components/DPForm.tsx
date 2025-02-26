"use client";

import { useUserOptions } from "@/dataHooks/useUserOptions";
import { UserOptions } from "@/types";
import NumberInput from "@/components/inputs/NumberInput";
import DateInput from "@/components/inputs/DateInput";

interface DPFormProps {
  onSubmit?: (data: UserOptions) => void;
}

const DPForm: React.FC<DPFormProps> = ({ onSubmit }) => {
  const { data: userOptions, setData: setUserOptions } = useUserOptions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(userOptions);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl pt-5 mt-10 mb-20 mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="flex space-x-4 mb-4">
        <DateInput
          value={userOptions.date || ""}
          onChange={(e) => setUserOptions({ date: e })}
          className="grow"
        />
        <NumberInput
          label="Adults:"
          value={userOptions.nAdults}
          onChange={(value) => setUserOptions({ nAdults: value })}
        />
        <NumberInput
          label="Children:"
          value={userOptions.nChildren}
          onChange={(value) => setUserOptions({ nChildren: value })}
        />
        <label className="flex items-center flex-col flec justify-center text-center text-sm">
          Apply for <br/>
          Family discount
          <input
            type="checkbox"
            checked={userOptions.isFamily}
            onChange={(e) => setUserOptions({ isFamily: e.target.checked })}
            className="mr-2 checkbox-lg w-1/3 h-1/3 accent-yellow-300 "
          />
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-yellow-300 text-red-900 py-2 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        Plan My Day
      </button>
    </form>
  );
};

export default DPForm;
