

import { Button } from "@/components/ui/button";
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" py-8 border-t border-border bg-background ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold  ">
            Daily News
            </h2>
            <p className="mt-2 ">
              Building a better digital experience for everyone.
            </p>
          </div>

      
          <div className="flex space-x-6  ">
            <a href="/about" className=" ">
              About Us
            </a>
            <a href="/services" >
              Services
            </a>
            <a href="/contact"  >
              Contact
            </a>
            <a href="/privacy"  >
              Privacy Policy
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-white "
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-white "
            >
              <AiOutlineInstagram size={24} />
            </a>
            <a
              href="https://github.com"
              aria-label="Github"
              className="text-white"
            >
              <AiOutlineGithub size={24} />
            </a>
          </div>
        </div>

  
        <div className="mt-8 text-center md:flex md:justify-between md:items-center">
          <p >
            &copy; 2024 YourCompany. All rights reserved.
          </p>

          <Button variant="outline" className="mt-4 md:mt-0 ">
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;