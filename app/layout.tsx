import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRODJET - Waitlist",
  description: "Join the waitlist for PRODJET early access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-800 antialiased">
        {/* Main wrapper: Centered card on desktop, full screen on mobile */}
        <div className="min-h-screen w-full flex items-center justify-center sm:p-8 bg-white">
          <div className="w-full h-screen sm:h-[760px] sm:max-w-[420px] bg-white sm:border sm:border-slate-200/80 sm:rounded-[32px] sm:shadow-lg sm:shadow-slate-100/50 relative flex flex-col items-stretch overflow-hidden">
            
            {/* Inner screen content */}
            <div className="flex-1 flex flex-col pt-8 pb-6 px-6 text-slate-800 font-sans transition-all duration-300">
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                {children}
              </div>
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
