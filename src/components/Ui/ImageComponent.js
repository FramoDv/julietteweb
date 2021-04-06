import {graphql, StaticQuery} from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import React from "react";

const ImageComponent = ({filename, alt}) => {
    return <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            relativePath
                            name
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                  )
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => {
            const image = data.images.edges.find((n) => {
                return n.node.relativePath.includes(filename);
            });

            if (!image) {
                return null;
            }

            return <GatsbyImage image={image?.node?.childImageSharp?.gatsbyImageData} alt={alt}/>
        }}
    />
}

export default ImageComponent;
