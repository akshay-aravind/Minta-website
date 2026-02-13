import { useEffect, useState } from "react";

export default function LockWarningModal() {
  const [open, setOpen] = useState(false);

  // Show modal on page load
  useEffect(() => {
    setOpen(true);
  }, []);

  // Close tab/website
  const handleClose = () => {
  setOpen(false)
  };

  if (!open) return <></>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-[90%] max-w-md rounded-lg bg-white p-6 text-center shadow-xl">
        
        <h2 className="mb-3 text-xl font-semibold text-gray-800">
          Website Locked
        </h2>

        <p className="mb-6 text-gray-600 leading-relaxed">
          This website has been locked.
          Please do payment to unlock.
        </p>

        {/* <button
          onClick={handleClose}
          className="rounded-md bg-[#e73333] px-6 py-2 cursor-pointer text-white font-medium
                     transition hover:bg-red-700"
        >
          OK
        </button> */}

      </div>
    </div>
  );
}
