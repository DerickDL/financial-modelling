import { useRef, useState, useCallback } from "react";
import { debounce } from "lodash";

export default function Search({searchHandler}) {

    const symbolRef = useRef(null);

    const inputChangeHandler = (e) => {
        searchHandler(e.target.value);
    }

    const debouncedChangeHandler = useCallback(
        debounce(inputChangeHandler, 500)
      , []);

    return (
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="symbol"
            ref={symbolRef}
            id="symbol"
            onChange={debouncedChangeHandler}
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Search Company ID"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              id="search"
              name="search"
              onClick={() => searchHandler(symbolRef.current.value)}
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
            <span role="img" aria-label="Search">
            🔍
            </span>
              {/* Search */}
            </button>
          </div>
        </div>
      </div>
    )
  }