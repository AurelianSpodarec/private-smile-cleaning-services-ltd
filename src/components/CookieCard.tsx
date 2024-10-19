'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

function CookieCard() {

  const [showCookieCard, setShowCookieCard] = useState(false);

  useEffect(() => {
    const acceptCookie = document.cookie.split('; ').find(row => row.startsWith('accept='));
    if (!acceptCookie) {
      setShowCookieCard(true);
    }
  }, []);

  const handleAccept = async () => {
    await fetch('/api/setCookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accept: true }),
    });
    setShowCookieCard(false); // Hide the cookie card after accepting
  };


  if (!showCookieCard) return null;
  return (
    <div className="fixed bottom-0 right-0 z-50 p-8">
      <div className="max-w-lg bg-white shadow-lg p-6 rounded-xl">

        <div className="w-full mb-2">
          <div className="items-center">
            <svg
              className="fill-[#eca869]"
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 31 30"
            >
              <path
                d="M30.723 12.225a.937.937 0 00-1.776-.212 1.875 1.875 0 01-1.706 1.112c-.84.002-1.548-.564-1.784-1.342a.938.938 0 00-1.112-.643 3.73 3.73 0 01-.855.11 3.762 3.762 0 01-3.75-3.75c0-.278.04-.559.11-.854a.938.938 0 00-.644-1.113 1.869 1.869 0 01-1.341-1.783c-.001-.757.455-1.41 1.112-1.706a.936.936 0 00-.212-1.777A15.023 15.023 0 0015.99 0C7.715.002.992 6.726.99 15c.002 8.274 6.725 14.998 15 15 8.274-.002 14.998-6.726 15-15 0-.954-.1-1.88-.267-2.775zm-5.457 12.052a13.08 13.08 0 01-9.276 3.848 13.08 13.08 0 01-9.277-3.848A13.08 13.08 0 012.865 15c0-3.62 1.47-6.896 3.848-9.277a13.08 13.08 0 019.277-3.848c.168 0 .333.018.501.025a3.713 3.713 0 00-.501 1.85c.002 1.4.778 2.6 1.91 3.24a4.738 4.738 0 00-.035.51 5.63 5.63 0 005.625 5.625c.176 0 .343-.017.51-.035.64 1.13 1.84 1.908 3.24 1.91a3.71 3.71 0 001.85-.502c.007.167.025.333.025.502 0 3.62-1.47 6.896-3.849 9.277z"
              ></path>
              <path
                d="M12.24 9.375a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM8.49 16.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM17.865 24.375a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75zM16.927 16.875a.937.937 0 100-1.875.937.937 0 000 1.875zM24.427 20.625a.937.937 0 100-1.875.937.937 0 000 1.875zM11.302 22.5a.937.937 0 100-1.875.937.937 0 000 1.875z"
              ></path>
            </svg>
            <h3 className="block font-heading font-medium text-xl leading-loose">Cookies!</h3>
          </div>
          <p className="text-sm leading-6">We use cookies to improve your experience and ensure seamless booking. Read our <Link href="/cookies">Cookie policy</Link></p>
        </div>

        <div className="w-full text-sm text-right space-x-4">
          <Link className="py-2.5 px-4" href="/cookies">Read More</Link>
          <button onClick={handleAccept} className="py-2.5 px-4 bg-[#eca869] rounded-lg">Accept all</button>
        </div>

      </div>
    </div>
  )
}

export default CookieCard
