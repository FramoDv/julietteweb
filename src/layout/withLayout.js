import React from "react";
import PropTypes from "prop-types";
import {graphql, StaticQuery} from "gatsby";
import PageContext from "./PageContext";
import "./layout.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header";

const withLayout = (customProps) => (PageComponent) => (props) => {
    const pageContextValue = {custom: customProps, page: props.pageContext};

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={(data) => (
                <PageContext.Provider value={pageContextValue}>
                    <Header/>
                    <main>
                        <PageComponent {...props} />
                    </main>
                    <footer>
                        <span>© 2021, Juliette estetica & benessere | P. IVA 93932932939</span>
                    </footer>
                </PageContext.Provider>
            )}
        />
    );
};

withLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default withLayout;
