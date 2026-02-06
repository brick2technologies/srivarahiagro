import { useState, useRef, useEffect } from "react";

const purposeOptions = [
  "Bulk Enquiry",
  "Product Details",
  "Distribution / Dealership",
  "Other Business Enquiry",
];

export default function PurposeDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="text-sm">
        Purpose of Enquiry
      </label>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          mt-1 w-full h-12 px-4 rounded-xl
          bg-transparent
          border border-[#FEFACD]/30
          text-left text-sm text-[#FEFACD]
          flex items-center justify-between
          focus:ring-2 focus:ring-[#FEFACD]
          outline-none
          transition
        "
      >
        <span className={selected ? "" : "text-[#FEFACD]/50"}>
          {selected || "Select purpose"}
        </span>
        <span
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      {open && (
        <ul
          className="
            absolute z-20 mt-2 w-full
            rounded-xl overflow-hidden
            backdrop-blur-md
            border border-[#FEFACD]/20
            bg-[#344C2F]/95
            shadow-xl
          "
        >
          {purposeOptions.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="
                px-4 py-3 text-sm cursor-pointer
                text-[#FEFACD]
                hover:bg-[#FEFACD]/10
                transition
              "
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
