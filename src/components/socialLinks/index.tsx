"use client";

import type { CSSProperties } from "react";
import styles from "./index.module.scss";
import { GitLink, QiitaLink, XLink, ZennLink } from "@/constants/link";
import { LINKICON } from "@/constants/icons";

type SocialItem = {
  name: string;
  url: string;
  color: string;
};

const socials: SocialItem[] = [
  { name: "X", url: XLink, color: "#1da1f2" },
  { name: "GitHub", url: GitLink, color: "#6e5494" },
  { name: "Qiita", url: QiitaLink, color: "#55c500" },
  { name: "Zenn", url: ZennLink, color: "#3ea8ff" },
];

const getIcon = (name: string) => {
  return LINKICON.find((icon) => icon.label === name);
};

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      {socials.map((social) => {
        const iconData = getIcon(social.name);
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
            style={{ "--social-color": social.color } as CSSProperties}
            aria-label={social.name}
          >
            <span className={styles.icon}>
              {iconData && (
                <iconData.component
                  width={iconData.width}
                  height={iconData.height}
                />
              )}
            </span>
            <span className={styles.name}>{social.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
