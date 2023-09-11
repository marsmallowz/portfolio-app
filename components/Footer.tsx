import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { BiMap } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="flex flex-col gap-3 divide-y pt-5 pb-2 px-3 text-white bg-gray-500 dark:bg-gray-600">
      <div>
        <div className="font-semibold">
          <div>Portfolio</div>
          <div>Alsandy Maulana</div>
        </div>
        <div>Inovasi dan kualitas yang berkelanjutan.</div>
      </div>
      <div className="flex flex-col gap-2 py-1">
        <div className="flex flex-col">
          <div className="font-medium ">Address</div>
          <div className="flex gap-2 items-center">
            <BiMap />
            <div>Tanjungpinang, Kepulauan Riau, Indonesia.</div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col mb-3">
            <div className="font-medium ">Contact Me</div>
            <div className="flex gap-2 items-center">
              <AiFillMail />
              <div>alsandymaulana@gmail.com</div>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineWhatsApp />
              <Link href="https://wa.me/+6281904873006" target="_blank">
                +6281904873006
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-medium ">Follow me</div>
            <div className="flex gap-2 items-center">
              <AiFillLinkedin />
              <Link
                href="https://linkedin.com/in/alsandy-maulana"
                target="_blank"
              >
                LinkedIn
              </Link>
            </div>
            <div className="flex gap-2 items-center">
              <AiFillGithub />
              <Link href="https://github.com/marsmallowz" target="_blank">
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm py-2">
        © 2023 Alsandy Maulana. All rights reserved.
      </div>
    </div>
  );
}
