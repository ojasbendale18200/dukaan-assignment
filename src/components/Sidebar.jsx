import React from "react";
import { sidebarLinks } from "../utils/sidebarlinks";

const Sidebar = () => {
  return (
    <aside className="sticky inset-0 w-[224px] bg-dukaan-blue-800 h-screen text-dukaan-gray-300">
      <div className="flex flex-col h-full p-2 gap-4">
        <div className="p-4 flex gap-3 items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1704067200&Signature=H~uS3DJWoUk3Mt34HePdNdEHwWddO~To5UR50YtDRYkyeIGjQkRZcoUOTftRD5yQRfYJ2r-wPlD7ZUCnU4zvLPPZJ-GoURTTXlCSvi2KUOZMF0S5pTbk~3Ce6tIvt-2wtx1ZHVbNIIuIsPHa0YxO1x7N4MVtoS9Z7-CpCYHxKWzrmT6Cyc7uk9-mKH~YA9qBqXGr1WEGQMog4s7LFR4qs9EK6wTTAKvtd7o4C0bV2o2jhqNWUEISPvCWueE7vQzrjtIOuA1jRWZsvC6GV0y4bbVV4Rv8X-9700pRa9qNmWOXPq8HQvVczcbI3UlRKC6bg9SVdPdQSYZpsxMl7NAYIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
        <ul className="list-none flex-1 p-[8px]">
          {sidebarLinks.map((item) => {
            const isActive = item.label === "Payouts";

            return (
              <li
                key={item.label}
                className={`flex items-center gap-[12px] py-[8px] px-[16px] rounded mb-[4px] text-sm hover: cursor-pointer bg-[#ffffff0d] ${
                  isActive ? "active" : ""
                }`}
                style={{
                  backgroundColor: isActive ? "#ffffff0d" : "transparent",
                  color: isActive ? "white" : "inherit",
                }}
              >
                <img src={item.imgURL} alt={item.label} />
                <p>{item.label}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-auto mb-[20px] ml-2 mr-2 py-[6px] px-[16px] flex items-center gap-3 bg-[#ffffff0d]  rounded text-sm">
          <div class="credits__icon">
            <img src="/svg/credits.svg" alt="" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span>Available credits</span>
            <span className="text-white text-sm  font-[500]">222.10</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
