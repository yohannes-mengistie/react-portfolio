import React from "react"
import getImageUrl from "../../utl"

export default function Contact(){
    return(
        <footer>
            <div>
            <h2>Contact</h2>
            <p>feel free to reach out</p>
            </div>
            <ul>
                <li>
                    <img src={getImageUrl("contact/email")} alt="contact-email" />
                    <a href="mailto:yohannesmengistie634@gmail.com">yohannesmengistie634@gmail.com</a>
                </li>
                <li>
                    <img src={getImageUrl("contact/linkedin")} alt="contact-email" />
                    <a href="mailto:yohannesmengistie634@gmail.com">yohannesmengistie634@gmail.com</a>
                </li>
                <li>
                    <img src={getImageUrl("contact/github")} alt="contact-email" />
                    <a href="mailto:https://github.com/yohannes-mengistie">Github</a>
                </li>
            </ul>
        </footer>
    )
}