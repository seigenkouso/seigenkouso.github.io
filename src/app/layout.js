import "./globals.css";

export const metadata = {
  title: "Lun Tian",
  description: "Academic Homepage of Lun Tian",
  icons: {
    icon: "C:/Users/seesea Amoi/my-website/public/icon.png",      
    shortcut: "C:/Users/seesea Amoi/my-website/public/icon.png",
    apple: "C:/Users/seesea Amoi/my-website/public/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}