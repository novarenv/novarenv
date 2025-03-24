import Image from "next/image";
import { Navbar, Footer } from "@/components";

export default function Home() {
  const styles = {
    "main": "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 font-[family-name:var(--font-geist-sans)] bg-light-bg dark:bg-dark-bg"
  }

  return (
    <div className={styles.main}>
      <Navbar />

      <main className="sm:grid sm:grid-flow-col grid-flow-row sm:grid-cols-6 gap-[32px] row-start-2 sm:items-start">
        <div className="col-span-4 sm:leading-tight text-light-text-primary dark:text-dark-text-primary p-4 sm:p-12">
          <p className="text-[24px] md:text-[72px]">
            Hi,
          </p>
          <p className="text-[48px] md:text-[100px] sm:-mt-8 font-bold">
            I&apos;m Varen
          </p>
          <p className="md-[36px] text-light-text-secondary dark:text-dark-text-secondary text-justify">
            I&apos;m an AI graduate student at NUIST, passionate about mobile and web development.
            I excel in machine learning and have a strong background in AI technologies.
            Beyond my technical expertise, I&apos;m actively involved in leadership roles within academic communities
            and organizations, balancing my technical pursuits with organizational responsibilities.
          </p>
        </div>

        <div className="col-span-2 flex justify-center items-center w-full h-full p-4">
          <Image
            src="hello.gif"
            alt={"Hello"}
            unoptimized={true}
            width={200}
            height={200}
          />
        </div>

      </main>

      <Footer />
    </div>
  );
}
