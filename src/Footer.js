import {  Card, CardGroup} from 'react-bootstrap'
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin, FaDev } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
    return ( 
        <>
        <h1>Contact me</h1>
        <CardGroup className="footer-card ">
                <Card>
                    <a href="https://www.instagram.com/ken_manuel/" target="_blank"> <FiInstagram size={50} color='black'/></a>
                </Card>
                <Card>
                    <a href="https://www.linkedin.com/in/kenneth-m-colon/" target="_blank"><FaLinkedin size={50} color='black'/></a> &ensp; 
                </Card>
                <Card>
                    <a href="https://github.com/ken025" target="_blank"><AiOutlineGithub size={50} color='black'/></a>
                </Card>
                <Card>
                    <a href="mailto:kennethmanuel250@gmail.com" target="_blank"><HiOutlineMail size={50} color='black'/></a>
                </Card>
                <Card>
                    <a href="https://dev.to/ken025" target="_blank"><FaDev size={50} color='black'/></a>
                </Card>
            </CardGroup>
            </>
     );
}
 
export default Footer;