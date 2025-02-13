import SideNav from '@/app/ui/dashboard/sidenav';
import { inter } from '@/app/ui/fonts';
import NavLinks from '../ui/dashboard/nav-links';
import Header from '../ui/dashboard/header';
import HeaderAll from '../ui/dashboard/header';
import FooterAll from '../ui/footerall';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "100%" }}>
      <HeaderAll />
     
      <FooterAll/>
    </div>
  );
  
 
}
