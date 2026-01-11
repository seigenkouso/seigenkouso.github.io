import "./globals.css";

export const metadata = {
  title: "Lun Tian",
  description: "Academic Homepage of Lun Tian",
  icons: {
    icon: '/icon.png?v=2',      
    shortcut: '/icon.png?v=2',
    apple: '/icon.png?v=2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}