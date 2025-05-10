import React, { ReactNode, MouseEvent } from "react";

type ModalProps = {
  open?: boolean;
  onClose: () => void;
  title?: string;
  height?: number | string;
  width?: number | string;
  children?: ReactNode;
  showFooter?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  open = true,
  onClose,
  title = "Modal Title",
  height = 200,
  width = 400,
  children,
  showFooter = true,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 999,
        }}
        onClick={handleBackdropClick}
      />

      {/* Modal Box */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height,
          width,
          backgroundColor: "#fff",
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        onClick={handleModalClick}
      >
        {/* Header */}
        <div
          style={{
            padding: "10px 16px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <span>{title}</span>
          <button
            onClick={onClose}
            style={{
              border: "none",
              background: "transparent",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            flex: 1,
            padding: "16px",
            overflowY: "auto",
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {showFooter && (
          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid #ddd",
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <button onClick={onCancel || onClose}>Cancel</button>
            <button onClick={onConfirm}>Confirm</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
