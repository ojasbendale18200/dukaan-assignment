import React from "react";

const Sidebar = () => {
  return (
    <aside className="sticky inset-0 w-224 bg-dukaan-blue-800 h-screen text-dukaan-gray-300">
      <div className="flex flex-col h-full p-4 gap-4">
        <div className="p-4 flex gap-4 items-center">
          <img
            src="/store-def.jpg"
            className="rounded-md h-10 w-10"
            alt="user logo"
          />
          <div>
            <p className=" text-white text-base font-medium mb-1">Nishyan</p>
            <p className="text-dukaan-gray-300 text-xs underline">
              Visit store
            </p>
          </div>

          <div className="ml-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
