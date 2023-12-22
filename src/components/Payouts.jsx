import React, { useState } from "react";
import Refunds from "./PayTable";
import PayTable from "./PayTable";
import RefundTable from "./RefundTable";

const Payouts = () => {
  const [selectedTab, setSelectedTab] = useState("payouts");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const getTabStyles = (tab) => {
    return {
      color: selectedTab === tab ? "white" : "gray", // Change the text color based on the active tab
      backgroundColor: selectedTab === tab ? "#146eb4" : "#ccc", // Change the background color based on the active tab
    };
  };

  console.log(selectedTab);
  return (
    <section className="flex-1 overflow-auto bg-dukaan-gray-100">
      <header className="py-3 px-8 flex justify-between bg-white border-b border-gray-300">
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold">Payouts</div>
          <div className="flex items-center gap-[6px] text-xs text-dukaan-gray-300 cursor-pointer">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>

            <p className="text-[#4D4D4D]">How it works?</p>
          </div>
        </div>

        <div className="flex items-center gap-[6px] py-[4px] px-4 w-[400px]  rounded-lg bg-dukaan-gray-100 text-dukaan-gray-600">
          <div className="flex items-center gap-[6px] py-[4px] px-4 w-[400px]  rounded-lg bg-dukaan-gray-100 text-dukaan-gray-600">
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="svg-search-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              className="placeholder outline-none border-none bg-transparent font-inter w-full "
              type="text"
              placeholder="Search features, tutorial, etc."
            />
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="flex items-center justify-center bg-dukaan-gray-200 h-10 w-10 rounded-full cursor-pointer text-dukaan-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
                fill="#4D4D4D"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center bg-dukaan-gray-200 h-10 w-10 rounded-full cursor-pointer text-dukaan-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_84483_4441)">
                <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                <path
                  d="M21.1109 25.5021C20.5156 26.1582 19.4844 26.1582 18.8891 25.5021L13.6151 19.689C12.7406 18.7251 13.4245 17.1811 14.726 17.1811L25.274 17.1811C26.5755 17.1811 27.2594 18.7251 26.3849 19.689L21.1109 25.5021Z"
                  fill="#4D4D4D"
                />
              </g>
              <defs>
                <clipPath id="clip0_84483_4441">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </header>

      <section className="p-8">
        <div className="flex items-center justify-between">
          <p className="font-medium text-xl">Overview</p>
          <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-dukaan-gray-300 rounded bg-white text-dukaan-gray-700">
            <span>This month</span>
            <svg
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="svg-chevron-down-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div className="mt-7 flex justify-between gap-6">
          <div className="pt-[24px] bg-dukaan-blue-400 text-white w-full rounded-md flex flex-col gap-4">
            <div className="flex gap-[6px] items-center px-[20px] font-light">
              <p className="title">Next Payout</p>
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between px-5 ">
              <p className="font-medium text-[28px]">₹2,312.23</p>
              <div className="flex gap-1 text-[14px] font-medium   cursor-pointer">
                <p className="underline">23 orders</p>
                <svg
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="svg-chevron-down-icon"
                  style={{ transform: "rotate(270deg)", marginTop: "2px" }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="py-[10px] px-[20px] flex justify-between items-center text-sm font-light rounded-lg bg-dukaan-blue-600">
              <p className="title">Next payout date:</p>
              <p className="text">Today, 04:00PM</p>
            </div>
          </div>

          <div className="py-6 px-5 bg-white rounded-lg w-full flex flex-col gap-4 relative h-[130px]">
            <div className=" flex gap-[6px] items-center text-dukaan-gray-700">
              <div className="title">Amount Pending</div>
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium text-[28px]">₹92,312.20</p>
              <div className="flex gap-1 text-[14px] font-medium text-dukaan-blue-400 cursor-pointer">
                <p className="underline">13 orders</p>
                <svg
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="svg-chevron-down-icon"
                  style={{ transform: "rotate(270deg)", marginTop: "2px" }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 bg-white rounded-lg w-full flex flex-col gap-4 relative h-[130px]">
            <div className="flex gap-[6px] items-center text-dukaan-gray-700">
              <p className="title">Amount Processed</p>
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium text-[28px]">₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[32px]">
        <p className="text-[20px] font-medium">Transactions | This Month</p>
        <div className="mt-[20px] flex gap-[16px]">
          <p
            className={`py-[6px] px-[14px] bg-dukaan-gray-200 cursor-pointer rounded-full text-sm text-dukaan-gray-600 ${
              selectedTab === "payouts" && "active-tab"
            }`}
            onClick={() => handleTabClick("payouts")}
            style={getTabStyles("payouts")}
          >
            Payouts (22)
          </p>
          <p
            className={`py-[6px] px-[14px] bg-dukaan-gray-200 cursor-pointer rounded-full text-sm text-dukaan-gray-600 ${
              selectedTab === "payouts" && "active-tab"
            }`}
            style={getTabStyles("refunds")}
            onClick={() => handleTabClick("refunds")}
          >
            Refunds (2)
          </p>
        </div>

        <div className="mt-5 bg-white rounded-md px-2 py-[10px] ">
          <div className="flex items-center justify-between">
            <div className="pt-[6px] pr-[8px] pb-[6px] pl-[12px] border border-dukaan-gray-300 rounded flex gap-[6px] items-center w-60 text-dukaan-gray-600">
              <svg
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="svg-search-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="py-1 pb-0 text-base font-inter outline-none border-none w-full"
                type="text"
                placeholder="Order ID or transaction ID"
              />
            </div>
            <div className="flex gap-[20px]">
              <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-dukaan-gray-300 rounded bg-white text-dukaan-gray-700">
                Sort
                <svg
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="svg-up-down-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-[6px] py-[6px] px-[10px] border border-dukaan-gray-300 rounded bg-white text-dukaan-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                    fill="#4D4D4D"
                  />
                </svg>
              </div>
            </div>
          </div>
          {selectedTab === "payouts" ? <PayTable /> : <RefundTable />}
        </div>
      </section>
    </section>
  );
};

export default Payouts;
