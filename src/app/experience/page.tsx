import Image from "next/image";
import { Layout } from "@/components";

const ImageComp = ({ path }: { path: string }) => {
  return (
    <div className="flex flex-cols items-center justify-center p-4">
      <Image
        src={path}
        alt={path}
        unoptimized={true}
        width={80}
        height={80}
      />
    </div>
  )
}

const IMAGE_PATH = {
  "pens": "/images/pens.png",
  "himit": "/images/himit.png",
  "ikkat": "/images/ikkat.png",
  "egeroo": "/images/egeroo.png",
  "bangkit": "/images/bangkit.png",
  "ppitNanjing": "/images/ppitNanjing.png",
  "nuist": "/images/nuist.png",
  "skills": "/images/skills.png",
  "trophy": "/images/trophy.png",
  "education": "/images/education.png",
  "certifications": "/images/certifications.png"
}

const Experience = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-start text-light-text-primary dark:text-dark-text-primary md:mt-12 text-justify">
        <div className="flex justify-center text-3xl font-bold">
          Experience
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 my-4">
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Skills</h1>
            <ImageComp path={IMAGE_PATH.skills} />
            <li>Hard Skills: ReactJS (Redux, Hooks, Saga), Mobile Application Development, Web Development, Machine Learning, TensorFlow, Artificial Intelligence, Information Technology, Frontend Development, Agile Development, LLM fine-tuning, MLOps, GCP, AWS.</li>
            <li>Soft Skills: Organization Skills, Business Acumen, Communication (multilingual: Bahasa Indonesia, English and Chinese), Leadership (experience in student organizations), Teamwork (participation in various projects and competitions), Adaptability (studied and worked in different countries), Continuous Learning (multiple certifications and ongoing education).</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Education</h1>
            <ImageComp path={IMAGE_PATH.education} />
            <li>Applied bachelor of Engineering, Informatics Engineering, SST. 2021. Politenik Elektronika Negeri Surabaya
              <br />GPA: 3.43/4.00
            </li>
            <li>Artificial Intelligence Master Degree, MEng. 2025. Nanjing University of Information Science and Technology
              <br />GPA: 3.92/5.00
            </li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Certifications</h1>
            <ImageComp path={IMAGE_PATH.certifications} />
            <li>HSK 3 score 293/300. (2024)</li>
            <li>IELTS average 6.5. (2022)</li>
            <li>TensorFlow Developer Certificate (08/2021 - 08/2024)</li>
            <li>Certificate of Completion Data Science Club PENS. (03/2021)</li>
            <li>Google IT Automation with Python Specialization. (03/2021)</li>
            <li>Google IT Support Specialization. (03/2021)</li>
            <li>Belajar Dasar Visualisasi Data Dicoding. (02/2021 - 02/2024)</li>
            <li>Mathematics for Machine Learning Specialization. (03/2021)</li>
            <li>DeepLearning.AI TensorFlow Developer Specialization. (04/2021)</li>
            <li>TensorFlow: Data and Deployment Specialization. (05/2021)</li>
            <li>Sertifikat Kelulusan Belajar Dasar-Dasar Azure Cloud Dicoding. (11/2019 - 11/2022)</li>
            <li>Sertifikat Kelulusan Belajar Dasar Pemrograman Web Dicoding. (09/2019 - 09/2022)</li>
            <li>Sertifikat Kelulusan Belajar Membuat Aplikasi Android untuk Pemula Dicoding. (07/2019 - 07/2022)</li>
            <li>Sertifikat Kelulusan Memulai Pemrograman Dengan Kotlin Dicoding. (07/2019 - 07/2022)</li>
            <li>GCP Essentials Qwiklabs</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Achievements</h1>
            <ImageComp path={IMAGE_PATH.trophy} />
            <li>1st Place KMIPN E-Government Field. 2021</li>
            <li>Program Mahasiswa Wirausaha Finalist. 2021</li>
            <li>Front End Programming 1st Rank Software Expo PENS. 2020</li>
            <li>KMIPN Finalist at E-Government Field. 2018</li>
            <li>Best DSC PENS Google Assistance Class. 2018</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">NUIST</h1>
            <h2 className="text-md text-center">Artificial Intelligence Master Degree Thesis</h2>
            <ImageComp path={IMAGE_PATH.nuist} />
            <h2 className="text-md text-center mb-4 -mt-2">09/2023 - 06/2025</h2>
            <li>Developed histopathology image segmentation models using PyTorch, achieving 91% accuracy with Half-UNet architecture, “Automatic Medical Generated Analysis Based on Histopathology Image Segmentation Half UNet”</li>
            <li>Conducted comparative analysis of SAM2, YOLOv8, and UNET models for medical imaging applications</li>
            <li>Integrated BioGPT and BioBERT text generation models for automated image analysis reports</li>
            <li>Awarded full scholarship for AI Master's at NUIST, demonstrating academic excellence and innovation potential</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">PPIT Nanjing</h1>
            <h2 className="text-md text-center"></h2>
            <ImageComp path={IMAGE_PATH.ppitNanjing} />
            <h2 className="text-md text-center mb-4 -mt-2">10/2023 - 06/2024</h2>
            <li>Facilitated funding initiatives through strategic partnerships with external stakeholders</li>
            <li>Coordinated cross-organizational events attracting 150+ participants</li>
            <li>Streamlined communication workflows between 20+ team members and external partners</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">PENS</h1>
            <h2 className="text-md text-center">Applied Bachelor Thesis</h2>
            <ImageComp path={IMAGE_PATH.pens} />
            <h2 className="text-md text-center mb-4 -mt-2">09/2023 - 06/2025</h2>
            <li>Engineered TensorFlow-based plastic waste detection system for river monitoring applications</li>
            <li>Developed web administration portal for real-time environmental data visualization</li>
            <li>Awarded 1st Place at KMIPN E-Government Competition for innovative solution</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Bangkit Academy</h1>
            <h2 className="text-md text-center">Machine Learning Engineer</h2>
            <ImageComp path={IMAGE_PATH.bangkit} />
            <h2 className="text-md text-center mb-4 -mt-2">03/2021 - 07/2021</h2>
            <li>Earned TensorFlow Developer Certification with distinction (top 10% cohort)</li>
            <li>Designed TensorFlow Lite model for cataract detection ranked among Top 50 Capstone Projects</li>
            <li>Implemented MLOps pipelines for mobile deployment of diagnostic AI models</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Egeroo.ai</h1>
            <h2 className="text-md text-center">Frontend Dev Software Expo</h2>
            <ImageComp path={IMAGE_PATH.egeroo} />
            <h2 className="text-md text-center mb-4 -mt-2">05/2021 - Now</h2>
            <li>Debugged and optimized React Native chat/prescription features for healthcare mobile app</li>
            <li>Architected administrative dashboard for AI chatbot management system</li>
            <li>Reduced UI rendering latency by 30% through React performance optimization</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Data Science Club PENS</h1>
            <h2 className="text-md text-center">Community Member</h2>
            <ImageComp path={IMAGE_PATH.pens} />
            <h2 className="text-md text-center mb-4 -mt-2">12/2020 - 02/2021</h2>
            <li>Implemented TensorFlow/Keras image classification models for computer vision projects</li>
            <li>Developed time-series forecasting solution for retail demand prediction</li>
            <li>Conducted workshops on ML fundamentals for 50+ club members</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">IKKAT</h1>
            <h2 className="text-md text-center">Frontend Web Developer Intern</h2>
            <ImageComp path={IMAGE_PATH.ikkat} />
            <h2 className="text-md text-center mb-4 -mt-2">01/2020 - 04/2020</h2>
            <li>Built ReactJS (Redux/Hooks) interfaces for cooperative management system</li>
            <li>Integrated RESTful APIs with Node.js backend using Axios</li>
            <li>Participated in agile sprints delivering 4 production-ready features</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">Software Expo</h1>
            <h2 className="text-md text-center">Frontend Mobile Developer</h2>
            <ImageComp path={IMAGE_PATH.pens} />
            <h2 className="text-md text-center mb-4 -mt-2">10/2019 - 12/2019</h2>
            <li>Developed Android calibration app using Kotlin and RESTful APIs</li>
            <li>Implemented CI/CD pipeline for calibration application</li>
            <li>Collaborated in agile team environment to deliver MVP within 8 weeks</li>
          </div>
          <div className="m-2 md:min-w-0 md:mx-0 bg-white/10 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg p-6 shadow-lg">
            <h1 className="text-xl font-bold text-center">HIMIT PENS</h1>
            <h2 className="text-md text-center">Member of Research and Technology</h2>
            <ImageComp path={IMAGE_PATH.himit} />
            <h2 className="text-md text-center mb-4 -mt-2">01/2018 - 12/2018 </h2>
            <li>Spearheaded technical workshops for 100+ engineering students</li>
            <li>Organized national-level programming competitions with 50+ teams</li>
            <li>Managed community research initiatives</li>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Experience