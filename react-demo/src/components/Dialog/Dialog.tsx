import React, { FC, ReactNode, useState, useEffect } from 'react';

interface DialogProps {
  title: string;
  actionLabel: string;
  onAction: () => void;
  trigger: ReactNode;
  children: ReactNode;
}

export const Dialog: FC<DialogProps> = ({ title, actionLabel, onAction, trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  const handleAction = () => {
    onAction();
    closeDialog();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={openDialog}>{trigger}</div>
      {isOpen && (
        <div className="fixed inset-0 z-100 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-peach border-4 border-karaka shadow-[8px_8px_0_0_#000000] rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-karaka">{title}</h2>
                <div className="mb-6 text-karaka">{children}</div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={handleAction}
                    className="px-4 py-2 bg-flush-orange border-2 border-karaka text-white font-bold rounded hover:bg-amber transition-colors shadow-[4px_4px_0_0_#000000]"
                  >
                    {actionLabel}
                  </button>
                  <button
                    onClick={closeDialog}
                    className="px-4 py-2 bg-white border-2 border-karaka text-karaka font-bold rounded hover:bg-gray-100 transition-colors shadow-[4px_4px_0_0_#000000]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};