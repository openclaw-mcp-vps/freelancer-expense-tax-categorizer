import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelanceTax – Auto-Categorize Expenses for Taxes",
  description: "Upload receipts and bank statements. AI categorizes your freelancer expenses by tax deduction type with confidence scores and IRS compliance notes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33e25c09-5868-472d-b35b-273624c0bb83"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
