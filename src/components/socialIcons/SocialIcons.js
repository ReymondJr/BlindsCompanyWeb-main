import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import InstagramAltIcon from '../../images/icons/instagram-alt-processed.svg';
import FacebookAltIcon from '../../images/icons/facebook-alt-processed.svg';
import YoutubeAltIcon from '../../images/icons/youtube-alt-processed.svg';
import LinkedinAltIcon from '../../images/icons/linkedin-alt.svg';
import Link from '../util/Link';

const SocialIcons = ({ dark, center }) => {
    const data = useStaticQuery(graphql`
        query {
            globalJson {
                contact {
                    social {
                        facebook
                        instagram
                        linkedin
                        youtube
                    }
                }
            }
        }
    `);

    const tileClass = `block p-3 rounded-sm ${dark ? 'bg-primary-500' : 'bg-white'}`;
    const iconClass = `w-4 h-4 ${dark ? 'brightness-0 invert' : ''}`;

    return (
        <ul className={`flex ${center && 'justify-center'} gap-3`}>
            <li>
                <Link
                    to={data.globalJson.contact.social.instagram}
                    aria-label="Siguenos en Instagram"
                    className={tileClass}
                >
                    <img src={InstagramAltIcon} alt="" className={iconClass} />
                </Link>
            </li>
            <li>
                <Link
                    to={data.globalJson.contact.social.facebook}
                    aria-label="Siguenos en Facebook"
                    className={tileClass}
                >
                    <img src={FacebookAltIcon} alt="" className={iconClass} />
                </Link>
            </li>
            <li>
                <Link
                    to={data.globalJson.contact.social.youtube}
                    aria-label="Siguenos en Youtube"
                    className={tileClass}
                >
                    <img src={YoutubeAltIcon} alt="" className={iconClass} />
                </Link>
            </li>
            <li>
                <Link
                    to={data.globalJson.contact.social.linkedin}
                    aria-label="Siguenos en LinkedIn"
                    className={tileClass}
                >
                    <img src={LinkedinAltIcon} alt="" className={iconClass} />
                </Link>
            </li>
        </ul>
    );
};

export default SocialIcons;
