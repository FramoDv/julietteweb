import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function Seo({ description, lang, meta, keywords, title }) {
  return (
      <StaticQuery
          query={detailsQuery}
          render={(data) => {
              console.log(data)
            const pageTitle = title || data.site.siteMetadata.title;
            const metaDescription = description || data.site.siteMetadata.description;
            const metaKeywords = keywords.length ? keywords : data.site.siteMetadata.keywords;

            return (
                <Helmet
                    htmlAttributes={{
                      lang,
                    }}
                    title={pageTitle}
                    titleTemplate={`%s`}
                    meta={[
                      {
                        name: `description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:title`,
                        content: pageTitle,
                      },
                      {
                        property: `og:description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:type`,
                        content: `website`,
                      },
                      {
                        name: `twitter:card`,
                        content: `summary`,
                      },
                      {
                        name: `twitter:creator`,
                        content: data.site.siteMetadata.author,
                      },
                      {
                        name: `twitter:title`,
                        content: pageTitle,
                      },
                      {
                        name: `twitter:description`,
                        content: metaDescription,
                      },
                    ]
                        .concat(
                            metaKeywords.length > 0
                                ? {
                                  name: `keywords`,
                                  content: metaKeywords.join(`, `),
                                }
                                : []
                        )
                        .concat(meta)}
                />
            );
          }}
      />
  );
}

Seo.defaultProps = {
  title: "",
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default Seo;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                keywords
            }
        }
    }
`;
