import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-6">
        <div className="mx-auto px-4 text-center">
            <p className="mb-4">&copy; 2025 Mondilla Connect. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <FaXTwitter />
                <FaLinkedinIn />
                <FaInstagram />
            </div>
        </div>
    </footer>
  )
}

export default Footer