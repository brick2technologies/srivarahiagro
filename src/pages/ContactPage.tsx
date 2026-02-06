import { useEffect, useRef, useState } from "react";

/* -------------------- */
/* Custom Dropdown      */
/* -------------------- */

const purposeOptions = [
  "Bulk Enquiry",
  "Product Details",
  "Distribution / Dealership",
  "Other Business Enquiry",
];

function PurposeDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full h-12 px-4 rounded-xl
          bg-transparent
          border border-[#FEFACD]/30
          text-left text-sm text-[#FEFACD]
          flex items-center justify-between
          focus:ring-2 focus:ring-[#FEFACD]
          outline-none transition
        "
      >
        <span className={selected ? "" : "text-[#FEFACD]/50"}>
          {selected || "Select purpose"}
        </span>
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {open && (
        <ul
          className="
            absolute z-30 mt-2 w-full
            rounded-xl overflow-hidden
            bg-[#344C2F]/95
            backdrop-blur-xl
            border border-[#FEFACD]/25
            shadow-[0_20px_40px_rgba(0,0,0,0.4)]
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
                px-4 py-3 text-sm
                text-[#FEFACD]
                cursor-pointer
                hover:bg-[#FEFACD]/10
                transition
              "
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      <input type="hidden" name="purpose" value={selected} />
    </div>
  );
}

/* -------------------- */
/* Main Contact Page    */
/* -------------------- */

export default function Contact() {
  return (
    <main className="relative w-full bg-[#344C2F] text-[#FEFACD] overflow-hidden min-h-screen">

      {/* BACKGROUND SVG */}
      <img
        src="/contact-bg.svg"
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-cover
          pointer-events-none
          opacity-90
        "
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto pb-40">

        {/* MAIN CARD – now overlaps footer curve */}
        <div
          className="
            relative
            rounded-3xl
            p-6 md:p-10
            mt-32               /* reduced from 40 */
            -mb-32              /* key fix: overlaps into footer curve */
            bg-[#344C2F]/30
            backdrop-blur-xs backdrop-saturate-150
            border border-[#FEFACD]/25
            shadow-[0_20px_50px_rgba(0,0,0,0.35)]

            before:absolute before:inset-0
            before:rounded-3xl
            before:bg-gradient-to-br
            before:from-[#FEFACD]/10
            before:via-transparent
            before:to-[#FEFACD]/5
            before:pointer-events-none
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

            {/* LEFT – Info / Trust signals */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Let’s Connect
              </h2>

              <p className="leading-relaxed text-[#FEFACD]/80 text-lg">
                Whether you’re sourcing premium rice, wheat, or dal — or exploring long-term supply partnerships — we’d love to hear from you.
              </p>

              <ul className="space-y-3 text-base">
                <li>✔ Fast & reliable responses</li>
                <li>✔ Transparent communication</li>
                <li>✔ Trusted agricultural sourcing</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    h-12 px-6 rounded-xl
                    bg-[#FEFACD] text-[#344C2F]
                    font-medium flex items-center justify-center
                    hover:scale-[1.03] transition
                  "
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="
                    h-12 px-6 rounded-xl
                    border border-[#FEFACD]
                    text-[#FEFACD]
                    font-medium flex items-center justify-center
                    hover:bg-[#FEFACD]/10 transition
                  "
                >
                  Call Us
                </a>
              </div>
            </div>

            {/* RIGHT – Enquiry Form */}
            <div
              className="
                relative
                rounded-2xl
                p-6 md:p-8
                space-y-6
                bg-[#344C2F]/35
                backdrop-blur-xl backdrop-saturate-150
                border border-[#FEFACD]/25
                shadow-[0_12px_30px_rgba(0,0,0,0.3)]
              "
            >
              <h3 className="text-2xl font-semibold">
                Quick Enquiry
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="text-sm block mb-1.5">
                    Name / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or company"
                    className="
                      w-full h-12 px-4 rounded-xl
                      bg-transparent
                      border border-[#FEFACD]/30
                      focus:ring-2 focus:ring-[#FEFACD]
                      outline-none text-sm text-[#FEFACD]
                      placeholder:text-[#FEFACD]/50
                    "
                  />
                </div>

                <div>
                  <label className="text-sm block mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="
                      w-full h-12 px-4 rounded-xl
                      bg-transparent
                      border border-[#FEFACD]/30
                      focus:ring-2 focus:ring-[#FEFACD]
                      outline-none text-sm text-[#FEFACD]
                      placeholder:text-[#FEFACD]/50
                    "
                  />
                  <p className="text-xs text-[#FEFACD]/70 mt-2">
                    WhatsApp preferred for faster response
                  </p>
                </div>

                <div>
                  <label className="text-sm block mb-1.5">
                    Purpose of Enquiry
                  </label>
                  <PurposeDropdown />
                </div>

                <button
                  type="submit"
                  className="
                    w-full h-12 rounded-xl
                    bg-[#FEFACD] text-[#344C2F]
                    font-medium hover:opacity-90 transition
                    shadow-md
                  "
                >
                  Submit Enquiry
                </button>

                <p className="text-xs text-center text-[#FEFACD]/70 pt-2">
                  We respect your privacy. We'll get back to you soon.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Outward Curve – dark to match background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[90px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,90 C240,0 480,0 720,40 960,80 1200,80 1440,30 L1440,0 L0,0 Z"
            fill="#344C2F"
          />
        </svg>
      </div>

    </main>
  );
}