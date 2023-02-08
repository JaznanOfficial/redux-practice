import { computeHeadingLevel } from "@testing-library/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counter/actions";
import { counterReducer } from "../redux/counter/counterReducer";

export default function Counter() {
    const count = useSelector((state)=>state.value)

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={''}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={''}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
