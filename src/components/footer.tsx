"use client"
import React, { useState } from "react";
import { useTheme } from 'next-themes'
import { FaLinkedin, FaInstagram, FaMedium, FaWeixin, FaWhatsapp, FaMoon, FaSun } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from 'next/image';

export const Footer = () => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    "icons": "flex gap-[24px] items-center justify-center col-span-4",
    "iconContainer": "flex items-center gap-2 hover:underline hover:underline-offset-4",
    "instagram": {
      "link": "https://www.instagram.com/novarenv/"
    },
    "linkedin": {
      "link": "https://www.linkedin.com/in/novarenv/"
    },
    "medium": {
      "link": "https://medium.com/@novarenv"
    },
    "mail": {
      "link": "mailto:novarenv@gmail.com"
    },
    "icon": "h-6 w-6 fill-current text-light-text-primary dark:text-dark-text-primary",
    "toggle": "flex items-center justify-end w-full fixed bottom-10 right-8"
  }

  const handleDownload = async () => {
    try {
      const response = await fetch('/cv.pdf');
      if (response.status !== 200) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Novaren Veraldo CV.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const modalWeChat = () => {
    return (
      <div className="fixed inset-0 z-100 shadow-large bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 md:p-0 cursor-default">
        <div className="flex flex-col items-center bg-light-accent dark:bg-dark-accent p-24 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Scan Here!</h2>

          <Image
            src="/nvvWeixin.png"
            alt="Weixin Scan"
            width={300}
            height={120}
            priority
          />
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 dark:text-dark-text-primary px-4 py-2 rounded hover:bg-light-hover cursor-pointer"
          >
            Close QR
          </button>
        </div>
      </div>
    )
  }

  const checkWhatsapp = () => {
    const phoneNumber = '6281239461122';
    const message = "Hi Varen! I'm pleased to meet you!";

    // Check if on mobile
    if (/Android|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) {
      window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    }
  }

  return (
    <footer className="grid grid-flow-col w-full h-12 hover:cursor-pointer">
      <div className={styles.icons}>
        <a
          className={styles.iconContainer}
          href={styles.instagram.link}
          target="_blank"
        >
          <FaInstagram className={styles.icon} />
        </a>
        <a
          className={styles.iconContainer}
          href={styles.linkedin.link}
          target="_blank"
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          className={styles.iconContainer}
          href={styles.medium.link}
          target="_blank"
        >
          <FaMedium className={styles.icon} />
        </a>
        <a
          className={styles.iconContainer}
          onClick={() => setIsOpen(true)}
        >
          <FaWeixin className={styles.icon} />
        </a>
        <a
          className={styles.iconContainer}
          onClick={checkWhatsapp}
        >
          <FaWhatsapp className={styles.icon} />
        </a>
        <a
          className={styles.iconContainer}
          href={styles.mail.link}
          target="_blank"
        >
          <IoMdMail className={styles.icon} />
        </a>
        <a
          onClick={handleDownload}
          className={"h-6 w-6 relative aspect-square"}>
          <Image
            src="pdf.gif"
            alt={"Hello"}
            unoptimized={true}
            layout="fill"
            objectFit="cover"
          />
        </a>
      </div>


      <div
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={styles.toggle}
      >
        {
          theme === 'dark'
            ? <FaSun className={styles.icon} />
            : <FaMoon className={styles.icon} />
        }
      </div>

      {
        isOpen && modalWeChat()
      }
    </footer>
  )
}

export default Footer