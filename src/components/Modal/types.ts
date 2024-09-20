import { PropsWithChildren, ReactNode } from "react";

interface IModalOverlay extends PropsWithChildren {
  isLoading?: boolean;
  className?: string;
  onCloseModal?: () => void;
}

interface ModalProps {
  children: ReactNode;
  onCloseModal: () => void;
  title: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  open?: boolean;
  className?: string;
  isLoading?: boolean;
}

export type { IModalOverlay, ModalProps };
