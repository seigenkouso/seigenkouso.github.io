import "./globals.css";

export const metadata = {
  title: "Lun Tian",
  description: "Academic Homepage of Lun Tian",
  icons: {
    icon: "/icon.png",      
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}