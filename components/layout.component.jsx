import Header from "./header.component";
import Footer from "./footer.component.";
import { useFooter } from "@/hooks/useFooter";

const Layout = ({ children }) => {
  const isRenderedFooter = useFooter();

  return (
    <div className='w-10/12 mx-auto min-h-screen flex flex-col justify-between py-8'>
      <Header />
      {children}
      <Footer isVisible={isRenderedFooter} />
    </div>
  );
};

export default Layout;
