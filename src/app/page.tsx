import Image from "next/image";
import { Layout } from "@/components";

const Home = () => {
  return (
    <Layout>
      <main className="sm:grid sm:grid-flow-col grid-flow-row sm:grid-cols-6 gap-[32px] row-start-2 sm:items-start mt-4">
        <div className="col-span-4 sm:leading-tight text-light-text-primary dark:text-dark-text-primary p-4 sm:p-12">
          <p className="text-[24px] md:text-[72px]">
            Hi,
          </p>
          <p className="text-[48px] md:text-[100px] md:-mt-8 font-bold">
            I&apos;m Varen
          </p>
          <p className="md-[36px] text-light-text-secondary dark:text-dark-text-secondary text-justify">
            Passionate developer with expertise in frontend web and mobile development, machine learning, and AI. Currently pursuing a Master's in Artificial Intelligence at Nanjing University of Information Science and Technology. Experienced in ReactJS, React Native, and TensorFlow, with a strong foundation in agile methodologies and RESTful API integration. Possesses excellent communication skills, adaptability, and problem-solving abilities. Demonstrates strong teamwork and collaboration capabilities, with a proven track record of leadership in student organizations. Committed to continuous learning and staying updated with the latest technological trends.
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
    </Layout>
  );
}

export default Home