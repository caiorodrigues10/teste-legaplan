import { ReactNode, SetStateAction } from "react";

interface TextInputData {
  setValue: (value: SetStateAction<string>) => void;
  value: string;
}

interface TextInputRootProps {
  children: ReactNode;
  className?: string;
}

interface TextInputLabelProps {
  description: string;
  className?: string;
  children: ReactNode;
}

interface TextInputErrorProps {
  isInvalid: boolean;
  description?: string;
}

interface TextInputContentProps {
  className?: string;
  children: ReactNode;
}

export type {
  TextInputContentProps,
  TextInputData,
  TextInputErrorProps,
  TextInputLabelProps,
  TextInputRootProps,
};
