import LinkCard from "components/LinkCard";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function LinkList() {
  return (
    <>
        <LinkCard name={"Email"} icon={<HiMail />} link={"mailto:ristorikian@gmail.com"} />
        <LinkCard name={"GitHub"} icon={<FaGithub />} link={"https://github.com/KianRistori"} />
        <LinkCard name={"LinkedIn"} icon={<FaLinkedin />} link={"https://www.linkedin.com/in/kianristori/"} />
        <LinkCard name={"Instagram"} icon={<FaInstagram />} link={"https://instagram.com/kianristori"} />
    </>
  )
}
