"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { SiHiveBlockchain } from "react-icons/si";

const MintFooter = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center">
              <SiHiveBlockchain className="text-white text-[24px]" />
              &nbsp;&nbsp;
              <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
                LeXar Domains
              </h2>
            </div>
          </div>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 LeXar Domains. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default MintFooter;
