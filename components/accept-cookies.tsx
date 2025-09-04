"use client";

import React from "react";

export function AcceptCookies() {
  const [accepted, setAccepted] = React.useState(false);

  React.useEffect(() => {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((c) => c.startsWith("accepted"));
    setAccepted(!!cookie);
  }, []);

  if (accepted) {
    return null;
  }

  // if (process.env.NODE_ENV === "production") {
  //   return null;
  // }

  return (
    <div className="fixed bottom-1 left-1 z-50 flex items-center justify-center bg-white p-2 text-xs font-medium text-black">
      <p>
        We use cookies to personalize content, run ads, and analyze traffic.
      </p>
      <button
        onClick={() => {
          document.cookie = "accepted=true; path=/; max-age=31536000";
          setAccepted(true);
        }}
        className="ml-2 bg-[#1d3d3e] px-2 py-1 text-xs font-medium text-[#a6ff79]"
      >
        Accept
      </button>
    </div>
  );
}
