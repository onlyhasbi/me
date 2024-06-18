import Header from "./header.component";
import Footer from "./footer.component.";

const Layout = ({ children }) => {
  return (
    <div className='w-10/12 mx-auto min-h-screen flex flex-col justify-between py-8'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
