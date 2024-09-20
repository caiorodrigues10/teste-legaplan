import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay } from "./ModalOverlay";
import styles from "./modal.module.scss";
import { ModalProps } from "./types";

export function ModalRoot({
  size = "md",
  title,
  open = false,
  children,
  onCloseModal,
  isLoading,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onCloseModal]);

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <>
      {open &&
        createPortal(
          <ModalOverlay isLoading={isLoading} onCloseModal={onCloseModal}>
            <div className={`${styles.modalContent} ${styles[size]}`}>
              <div className={`${styles.modalCard}`}>
                <h4>{title}</h4>
                {children}
              </div>
            </div>
          </ModalOverlay>,
          document.body
        )}
    </>
  );
}
