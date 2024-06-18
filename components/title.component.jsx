import Head from "next/head";
import PropTypes from "prop-types";

const Title = ({ title }) => (
  <Head>
    <title>{title} - Portfolio</title>
    <meta name="description" content={`Muhammad hasbi ${title} portfolio`} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
