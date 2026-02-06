import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Elder Farms Supplements | Immune Access",
  description: "Healing Plant Farms - Accessibility Communities. Natural supplements for immune health and wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
