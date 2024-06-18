import Header from "./header.component";
import Footer from "./footer.component.";
import { useFooter } from "@/hooks/useFooter";
import { useRouter } from "next/router";
import Title from "./title.component";
import PropTypes from "prop-types";

const Layout = ({ children, title }) => {
  const isRenderedFooter = useFooter();
  const isHome = useRouter().pathname == "/";

  const homeStyle = isHome ? "flex flex-col justify-between" : "";
  const contentStyle = !isHome
    ? "flex items-center min-h-[calc(100vh-144px)]"
    : "";

  return (
    <>
      <Title title={title ?? ""} />
      <main className={`w-10/12 mx-auto min-h-screen py-8 ${homeStyle}`}>
        <Header />
        <div className={contentStyle}>{children}</div>
        <Footer isVisible={isRenderedFooter} />
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Layout;
