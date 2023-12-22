import React from "react";
import { payData } from "../utils/PayData";

const PayTable = () => {
  return (
    <div className="mt-[10px] w-full">
      <table className="w-full text-[14px] border-collapse">
        <thead className="bg-dukaan-gray-100 text-dukaan-gray-600 font-normal text-left">
          <tr className="py-[14px] px-[12px] font-medium text-dukaan-gray-800 ">
            <th className="py-[14px] px-[12px] font-medium text-dukaan-gray-800">
              Order ID
            </th>
            <th className="py-[14px] px-[12px] font-medium text-dukaan-gray-800">
              Status
            </th>
            <th className="py-[14px] px-[12px] font-medium text-dukaan-gray-800">
              Transaction ID
            </th>

            <th className="py-[14px] px-[12px] font-medium text-dukaan-gray-800">
              Order Amount
            </th>
            <th className="py-[14px] px-[12px] font-medium text-dukaan-gray-800">
              Transaction Fees
            </th>
            <th className="py-[14px] px-[12px] text-right font-medium text-dukaan-gray-800">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {payData.map((item) => (
            <>
              <tr
                key={item.orderid}
                className="border-b-2 border-dukaan-gray-100"
              >
                <td className="py-[14px] px-[12px] text-dukaan-blue-400 font-medium">
                  {item.orderid}
                </td>
                <td className="py-[14px] px-[12px] flex items-center gap-[8px]">
                  <div
                    className={`h-[8px] w-[8px] rounded-full ${
                      item.status === "Processing"
                        ? "bg-gray-400"
                        : "bg-[#17b31b]"
                    }`}
                  ></div>
                  {item.status}
                </td>
                <td className="py-[14px] px-[12px] text-dukaan-gray-800">
                  {item.transactionid}
                </td>
                <td className="py-[14px] px-[12px]  pl-9">
                  {item.orderamount}
                </td>
                <td className="py-[14px] px-[12px] pl-14">{item.amount}</td>
                <td className="py-[14px] px-[12px] text-dukaan-gray-800 text-right">
                  {item.total}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayTable;
