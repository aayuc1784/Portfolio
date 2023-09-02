import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {GrInstagram} from "react-icons/gr"
import {SiCodechef} from "react-icons/si"
import {SiCodeforces} from "react-icons/si"
import {SiLeetcode} from "react-icons/si"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
        <a href="https://www.linkedin.com/in/aayuc1784" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/aayuc1784" target="_blank"><BsGithub/></a>
        <a href="https://codeforces.com/profile/aayuc1784" target="_blank"><SiCodeforces/></a>
        <a href="https://leetcode.com/aayuc1784/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.codechef.com/users/aayu1784" target="_blank"><SiCodechef/></a>
        <a href="https://www.instagram.com/aayuc1784" target="_blank"><GrInstagram/></a>
    </div>
    )
}
export default HeaderSocials