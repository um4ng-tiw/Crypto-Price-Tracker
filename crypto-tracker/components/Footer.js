import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.icon_container}>
        <div className={styles.icon}>
          <a href="https://twitter.com/UmangUtiwari18" target="_blank">
            <FontAwesomeIcon icon={faTwitter} class />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://github.com/um4ng-tiw" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://www.instagram.com/oxy.moronguy/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className={styles.footer_text}>
        <p>Made with Next.js by Umang Tiwari</p>
      </div>
    </div>
  );
};

export default Footer;
