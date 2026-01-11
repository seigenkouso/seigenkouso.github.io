import "./globals.css";

export const metadata = {
  title: "Lun Tian",
  description: "Academic Homepage of Lun Tian",
  // 这里配置图标，指向你 public 目录下的头像文件
  icons: {
    icon: '/icon.png',      
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}