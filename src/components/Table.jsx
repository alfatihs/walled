import useFetch from "../useFetch";
// import { useState, useEffect } from "react";

export default function Table() {

    const [tableData] = useFetch("http://localhost:3000/table");

    // Handle loading state
    if (!tableData) {
        return <p>Loading data...</p>;
    }

    // Handle empty data
    if (tableData.length === 0) {
        return <p>No data available.</p>;
    }

    return (
        <div className="mt-[4.5rem] overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 shadow-md">
                <thead className="text-black">
                    <tr>
                        <th className="px-4 py-5 border border-gray-300 text-left">Date & Time</th>
                        <th className="px-4 py-5 border border-gray-300 text-left">Type</th>
                        <th className="px-4 py-5 border border-gray-300 text-left">From/To</th>
                        <th className="px-4 py-5 border border-gray-300 text-left">Description</th>
                        <th className="px-4 py-5 border border-gray-300 text-left">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item, index) => (
                        <tr
                            key={item.id}
                            className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                        >
                            <td className="px-4 py-3 border border-gray-300">{item.dateTime}</td>
                            <td className="px-4 py-3 border border-gray-300">{item.type}</td>
                            <td className="px-4 py-3 border border-gray-300">{item.noAccount}</td>
                            <td className="px-4 py-3 border border-gray-300">{item.description}</td>
                            <td className={`px-4 py-3 border border-gray-300 ${item.type === 'DEBIT' ? "text-green-500" : item.type === 'CREDIT' ? "text-red-500" : "text-black"}`}>{item.type === 'DEBIT' ? `+ ${item.amount}` : item.type === 'CREDIT' ? `- ${item.amount}` : item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
