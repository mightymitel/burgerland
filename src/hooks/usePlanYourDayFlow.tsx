import { useEffect, useState } from "react";
import { useUserOptions } from "@/dataHooks/useUserOptions";

export const planYourDaySteps = ["DPF", "ticketSelect", "explore", "dining"] as const;
const stepsPrerequisites: Record<typeof planYourDaySteps[number], typeof planYourDaySteps[number][]> = {
  DPF: [],
  ticketSelect: ["DPF"],
  explore: ["DPF", "ticketSelect"],
  dining: ["DPF", "ticketSelect"],
};

type Step = typeof planYourDaySteps[number];
type StepsState = Record<Step, boolean>;

export const usePlanYourDayFlow = () => {
  const { data: userOptions } = useUserOptions();
  const [stepsState, setStepsState] = useState<StepsState>(
    planYourDaySteps.reduce((acc, step) => ({ ...acc, [step]: false }), {} as StepsState)
  );

  useEffect(() => {
    if (!userOptions) return;
    setStepsState({
      DPF: userOptions?.date != "" && ((userOptions.nAdults ?? 0) + (userOptions.nChildren ?? 0)) > 0,
      ticketSelect: !!userOptions.ticketPackage,
      dining: !!userOptions.diningReservations,
      explore: !!userOptions.bookmarks || !!userOptions.reservations,
    });
  }, [userOptions, setStepsState]);

  const validateUserOptions = () => {
    if (!userOptions.date) return false;
    if ((userOptions?.nAdults ?? 0) <= 0 && (userOptions?.nChildren ?? 0) <= 0) return false;
    return true;
  };

  const isStepReady = (step: Step) => {
    return stepsPrerequisites[step].every((prerequisite) => stepsState[prerequisite]);
  };

  return {
    stepsState,
    isStepReady,
    validateUserOptions,
  };
};
