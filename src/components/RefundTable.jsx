import React from "react";
import { payData, refundData } from "../utils/PayData";

const RefundTable = () => {
  return (
    <div className="mt-[10px] w-full">
      <table className="w-full text-[14px] border-collapse">
        <thead className=" bg-dukaan-gray-100 text-dukaan-gray-600 font-normal text-left">
          <tr className="py-[14px] px-[12px] font-medium text-dukaan-gray-800 ">
            <th className="py-[14px] px-[12px] font-medium text-dukaan-gray-800">
              Order ID
            </th>
            <th className="py-[14px] px-[12px] pl-[120px] font-medium text-dukaan-gray-800">
              Status
            </th>
            <th className="py-[14px] px-[12px]  pl-[120px] font-medium text-dukaan-gray-800">
              Transaction ID
            </th>

            <th className="py-[14px] px-[12px] pl-[120px] font-medium text-dukaan-gray-800">
              Refund date
            </th>
            <th className="py-[14px] text-right  px-[12px] font-medium text-dukaan-gray-800">
              Order amount
            </th>
          </tr>
        </thead>
        <tbody>
          {refundData.map((item) => (
            <>
              <tr className="  border-b-2 border-dukaan-gray-100">
                <td className="py-[14px] px-[12px] text-dukaan-blue-400 font-medium">
                  {item.orderid}
                </td>
                <td className="py-[14px] px-[12px] pl-[120px]  flex items-center gap-[8px]">
                  <div
                    className={`h-[8px] w-[8px] rounded-full ${
                      item.status === "Processing"
                        ? "bg-gray-600"
                        : "bg-[#17b31b]"
                    }`}
                  ></div>
                  {item.status}
                </td>
                <td className="py-[14px] px-[12px]  pl-[120px] text-dukaan-gray-800">
                  {item.transactionid}
                </td>
                <td className="py-[14px] px-[12px]  pl-[120px]">
                  {item.refundDate}
                </td>
                <td className="py-[14px] px-[12px] text-right">
                  {item.amount}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RefundTable;
