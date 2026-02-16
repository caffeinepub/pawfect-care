export default function MobileInHandIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hand */}
      <path
        d="M18 42C18 42 16 44 16 46C16 48 17 50 19 50H28C30 50 32 48 32 46V38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 38V28C32 26 30 24 28 24C26 24 24 26 24 28V36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 36V30C24 28 22 26 20 26C18 26 16 28 16 30V42"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Phone */}
      <rect
        x="28"
        y="14"
        width="20"
        height="32"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <rect
        x="31"
        y="18"
        width="14"
        height="20"
        rx="1"
        fill="currentColor"
        opacity="0.2"
      />
      <circle cx="38" cy="42" r="1.5" fill="currentColor" />
      
      {/* Signal waves */}
      <path
        d="M34 10C36 10 38 8 38 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 10C40 10 38 8 38 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
