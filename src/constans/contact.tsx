import {
  GitLink,
  XLink,
  QiitaLink,
  GitName,
  XName,
  QiitaName,
  GmailLink,
} from "./link";
import {
  SiGithub,
  SiX,
  SiQiita,
  SiGmail,
} from "@icons-pack/react-simple-icons";
const ContactLink = [
  {
    id: 1,
    title: "Gmail",
    linkName: "Gmail",
    icon: <SiGmail size={48} fill="#ffffff" />,
    url: "mailto:" + GmailLink,
  },
  {
    id: 2,
    title: "X(旧Twitter)",
    linkName: XName,
    XName,
    icon: <SiX size={48} fill="#ffffff" />,
    url: XLink,
  },
  {
    id: 3,
    title: "GitHub",
    linkName: GitName,
    icon: <SiGithub size={48} fill="#ffffff" />,
    url: GitLink,
  },
  {
    id: 4,
    title: "Qiita",
    linkName: QiitaName,
    icon: <SiQiita size={48} fill="#ffffff" />,
    url: QiitaLink,
  },
];
export default ContactLink;
