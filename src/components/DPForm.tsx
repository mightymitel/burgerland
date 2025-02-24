"use client";

import { useUserOptions } from "@/dataHooks/useUserOptions";
import { UserOptions } from "@/types";

interface DPFormProps {
  onSubmit?: (data: UserOptions) => void;
}

const DPForm: React.FC<DPFormProps> = ({ onSubmit }) => {
  const { data: userOptions, setData: setUserOptions } = useUserOptions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit(userOptions);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl pt-5 mt-10 mb-20 mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="flex space-x-4 mb-4">
        <input
          type="date"
          value={userOptions.date || ""}
          onChange={(e) => setUserOptions({date: e.target.value})}
          className="grow"
        />
        <label>
          Adults:
          <input
            type="number"
            value={userOptions.nAdults}
            onChange={(e) =>
              setUserOptions({ nAdults: Number(e.target.value) })
            }
            min={0}
            max={100}
          />
        </label>
        <label>
          Children:
          <input
            type="number"
            value={userOptions.nChildren}
            onChange={(e) =>
              setUserOptions({ nChildren: Number(e.target.value) })
            }
            min={0}
            max={100}
          />
        </label>
        <label className="flex items-center flex-col flec justify-center">
          Family
          <input
            type="checkbox"
            checked={userOptions.isFamily}
            onChange={(e) => setUserOptions({ isFamily: e.target.checked })}
            className="mr-2 checkbox-lg w-1/2 h-1/2"
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
