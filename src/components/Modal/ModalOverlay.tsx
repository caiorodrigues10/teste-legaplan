"use client";
import styles from "./modal.module.scss";
import { IModalOverlay } from "./types";

export function ModalOverlay({
  isLoading,
  className,
  children,
  onCloseModal,
}: IModalOverlay) {
  return (
    <div
      className={`${styles.modalOverlayContainer} ${className} ${
        isLoading ? styles.loading : ""
      }`}
    >
      <div
        className={`${styles.modalOverlayBackdrop} ${
          isLoading ? styles.loading : ""
        }`}
        onClick={() => !isLoading && onCloseModal && onCloseModal()}
      />
      {children}
    </div>
  );
}
