import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocExpert — Дистанційне відновлення посвідчення водія",
  description:
    "DocExpert допомагає українцям за кордоном дистанційно відновити та перевипустити посвідчення водія, внести дані в Дію та виправити помилки в базі МВС.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
