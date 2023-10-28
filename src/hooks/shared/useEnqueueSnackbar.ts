"use client";

import { VariantType, useSnackbar } from "notistack";
import { useCallback } from "react";

export const useEnqueueSnackbar = (): [
  setEnqueue: (message: string, variant: VariantType) => void,
] => {
  const { enqueueSnackbar } = useSnackbar();

  const setEnqueueSnackbar = useCallback(
    (message: string, variant: VariantType) => {
      enqueueSnackbar(message, {
        autoHideDuration: 1000,
        variant,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
        style: {},
      });
    },
    [enqueueSnackbar],
  );

  return [setEnqueueSnackbar];
};
