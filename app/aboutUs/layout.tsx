import '@/app/ui/global.css';
import HeaderAll from '../ui/AllHeader';
import FooterAll from '../ui/footerall';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       
        <HeaderAll />
        {children}
       
      </body>
     
    </html>
  );
}
