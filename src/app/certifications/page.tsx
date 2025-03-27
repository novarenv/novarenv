import { Layout, Gallery } from "@/components";

const Certifications = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-start text-light-text-primary dark:text-dark-text-primary md:mt-12 text-justify">
        <div className="flex justify-center text-3xl font-bold">
          Certifications
        </div>

        <Gallery />
      </div>
    </Layout>
  )
}

export default Certifications