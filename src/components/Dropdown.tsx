import React from "react";

function Dropdown() {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="inline-flex items-center justify-center text-white bg-primary box-border border border-transparent hover:bg-primary/90 focus:ring-4 focus:ring-primary/20 shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
        type="button"
      >
        Dropdown button
        <svg
          className="w-4 h-4 ms-1.5 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdown"
        className="z-10 hidden bg-background border border-border rounded-md shadow-lg w-44"
      >
        <ul
          className="p-2 text-sm text-foreground font-medium"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-accent hover:text-accent-foreground rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-accent hover:text-accent-foreground rounded"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-accent hover:text-accent-foreground rounded"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex items-center w-full p-2 hover:bg-accent hover:text-accent-foreground rounded"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
