import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser, selectUserHistory } from "../store/userSlice";

const AccountMenu = () => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const user = useSelector(selectUser);
  const history = useSelector(selectUserHistory);

  // First letter for account icon
  const firstLetter = user?.username
    ? user.username.charAt(0).toUpperCase()
    : user?.email
    ? user.email.charAt(0).toUpperCase()
    : "U";

  // Save position of the icon so dropdown can be rendered outside navbar
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 8, // just below icon
      left: rect.right - 384, // popup aligns with icon's right edge (w-96 = 384px)
    });
    setOpen(!open);
  };

  return (
    <>
      {/* Account Icon inside navbar */}
      <div
        onClick={handleClick}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f87559] text-white font-bold cursor-pointer"
      >
        {firstLetter}
      </div>

      {/* Pop-up menu rendered outside navbar */}
      {open && (
        <div
          className="fixed z-20 w-96 max-h-[500px] bg-white rounded-lg shadow-lg border overflow-y-auto"
          style={{ top: coords.top, left: coords.left }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b bg-gray-100 sticky top-0">
            <div>
              <p className="font-semibold text-gray-900">
                {user?.username || "Guest"}
              </p>
              <p className="text-xs text-gray-500">Purchase History</p>
            </div>
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* History Items */}
          <div className="px-4 py-2">
            {history && history.length > 0 ? (
              history.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center py-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md mr-4">
                    <img
                      src={item.serviceImage}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{item.price}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-6">
                No purchase history found.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountMenu;
