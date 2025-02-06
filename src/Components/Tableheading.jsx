import React from "react";

const Tableheading = () => {
  return (
    <>
      <tr className=" bg-slate-200">
        <th className="px-4 py-2 w-1/5 text-lg font-medium text-start border">
          Expense Name
        </th>
        <th className="px-4 py-2 w-1/5 text-lg font-medium text-start border">
          Amount (₹)
        </th>
        <th className="px-4 py-2 w-1/5 text-lg font-medium text-start border">
          Catrgory
        </th>
        <th className="px-4 py-2 w-1/5 text-lg font-medium text-start border">
          Date
        </th>
        <th className="px-4 py-2 w-1/5 text-lg font-medium text-start border">
          Action
        </th>
      </tr>
    </>
  );
};

export default Tableheading;
