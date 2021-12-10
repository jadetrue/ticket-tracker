import React, {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-row w-full items-center">
            <button
                className="rounded-sm m-2 w-2/6 bg-blue-100 hover:ring"
                onClick={() => setCount(count - 1)}
            >
                -
            </button>
            <p className="flex w-2/6 h-auto items-center place-content-center border-2 rounded-full">
                {count}
            </p>
            <button
                className="rounded-sm m-2 w-2/6 bg-blue-100 hover:ring"
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
