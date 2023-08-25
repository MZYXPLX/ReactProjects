// /* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { services } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { SectionWrapper } from "../hoc";

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <motion.div
//       variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//       classNameName="xs:w-[230px] w-full card-gradient p-[1px] rounded-[20px] shadow-card className">
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         classNameName="bg-jetLight rounded-[20px] py-5 px-12 min-h-[390px] flex justify-evenly items-center flex-col">
//         <img src={icon} alt={title} classNameName="w-16 h-16 object-contain" />
//         <h3 classNameName="text-taupe text-[18px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };

// const About = () => {
//   return (
//     <div classNameName="-mt-[6rem] ">
//       <div classNameName="about">
//         <motion.div variants={textVariant()}>
//           <p classNameName={styles.sectionSubText}>
//             Welcome to my corner of the internet!
//           </p>
//           <h2 classNameName={styles.sectionHeadText}>Great to have you here</h2>
//         </motion.div>

//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           classNameName="mt-4 text-taupe text-[14px] max-w-3xl leading-[30px]">
//           I&apos;m a Computer Science enthusiast who&apos;s passionate about bringing
//           creative ideas to life through web development. You can think of me as
//           a digital artist who paints with code, turning blank screens into
//           vibrant and user-friendly websites.
//           <br /> <br />
//           As a CS student, I&apos;m constantly exploring new ways to make the virtual
//           world more engaging and meaningful. I believe in the power of
//           storytelling through design and functionality. Whether you&apos;re a small
//           business owner with a vision or an individual looking to showcase your
//           online presence, I&apos;m here to collaborate and create a digital space
//           that truly reflects your identity.
//           <br /> <br />
//           From crafting intuitive user interfaces to weaving the threads of code
//           that make websites come alive, I&apos;ve got a knack for all things
//           frontend. But beyond the technicalities, I&apos;m dedicated to ensuring
//           that every website I work on tells a unique story, captures attention,
//           and leaves a lasting impression. <br />
//           <br />
//           So, if you&apos;re looking to establish your digital footprint or enhance
//           your online business, let&apos;s team up and make your ideas shine on the
//           web! Feel free to explore my work and reach out for a chat. Together,
//           we can turn your aspirations into captivating digital realities.
//         </motion.p>
//       </div>
//       <div classNameName="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(About, "about");

import "../assets/CSS/components.css";

export default function About() {
  return (
    <div id="about">
      <div className="aboutSection " id="crt">
        <div className="comments index">
          <p>
            01
            <br />
            02
            <br />
            03
            <br />
            04
            <br />
            05
            <br />
            06
            <br />
            07
            <br />
            08
            <br />
            09
            <br />
            10
            <br />
            11
            <br />
            12
            <br />
            13
            <br />
            14
            <br />
            15
            <br />
            16
            <br />
            17
            <br />
            18
            <br />
            19
            <br />
            20
            <br />
            21
            <br />
            22
            <br />
            23
            <br />
            24
            <br />
            25
            <br />
            26
            <br />
            27
            <br />
            28
            <br />
            29
            <br />
            30
            <br />
            31
            <br />
            32
            <br />
            33
            <br />
            34
            <br />
            35
            <br />
            36
            <br />
          </p>
        </div>
        <p className="codeByteAbout codeByte subtext">
          About<span>/&gt;</span>
        </p>
        <div className="codeImpression default">
          <code className="default">
            <div className="">
              <span className="magenta">className</span>
              <span className="turqoise"> AbdullahFawad </span>
              {"{"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . </span>
              <span className="comments">/ / I like to create things.</span>
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . </span>
              <span className="magenta">constructor </span>() {"{"}
              <br />
            </div>

            <span className="magenta">
              <div className="">
                <span className="semiTransparent"> . . . . </span>this.
                <span className="green">name</span>={" "}
                <span className="brightGreen">
                  {" "}
                  &apos; Abdullah Fawad &apos;{" "}
                </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>this.
                <span className="turqoise">dayOfBirth </span>={" "}
                <span className="brightGreen"> &apos; 30/11/2001 &apos; </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>this.
                <span className="turqoise">email </span>=
                <span className="brightGreen">
                  {" "}
                  &apos; mzyxplx@gmail.com &apos;
                </span>
              </div>
            </span>
            <div className="">
              <span className="semiTransparent"> . . </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . </span>
              <span className="blue">workExperience </span>() {"{"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . </span>
              <span className="magenta">return</span> [<br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . . . . . </span>
              {"{"}
              <span className="brightGreen">
                &apos; 2023-now &apos; <span className="default"> : </span>{" "}
                &apos; Frontend developer @ Claystone Tech &apos;{" "}
              </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . . . . . </span> {"{"}
              <span className="brightGreen">
                &apos; 2023-now &apos; <span className="default"> : </span>{" "}
                &apos; Web Developer Intern @ Codsoft &apos;
              </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . . . . . </span> {"{"}
              <span className="brightGreen">
                &apos; 2023-now &apos; <span className="default"> : </span>{" "}
                &apos; Software Developer and Database handler @ Thermcity
                &apos;
              </span>
              {"}"}
              <br />
            </div>

            <div className="">
              <span className="semiTransparent"> . . . . . . . . </span> {"{"}
              <span className="brightGreen">
                &apos; 2023-now &apos; <span className="default"> : </span>{" "}
                &apos; React.js Intern @ Internee.pk &apos;
              </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . </span>]<br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . </span>
              <span className="blue">education</span> () {"{"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . </span>
              <span className="magenta">return</span> [<br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . . . </span>
              {"{"}
              <span className="brightGreen">
                &apos; 2020-now &apos; <span className="default"> : </span>{" "}
                &apos; Pakistan Institute of Engineering And Applied Sciences
                <br />
                <span className="semiTransparent">
                  . . . . . . . . . . . . . . . . . . . . . .{" "}
                </span>
                - Bachelor&apos;s Degree, Computer Science &apos;
              </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . . . </span>
              {"{"}
              <span className="brightGreen">
                &apos; 2018-2020 &apos; <span className="default"> : </span>{" "}
                &apos; Beaconhouse School System
                <br />
                <span className="semiTransparent">
                  . . . . . . . . . . . . . . . . . . . . . .{" "}
                </span>
                - Cambrige Advanced Levels, Major Computer Science &apos;
              </span>
              {"}"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . </span>]<br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . </span>
              {"}"}
              <br />
            </div>

            <div className="">
              <span className="semiTransparent"> . . </span>
              <span className="blue">skills</span> () {"{"}
              <br />
            </div>
            <div className="">
              <span className="semiTransparent"> . . . . </span>
              <span className="magenta">return</span> [
            </div>
            <span className="brightGreen">
              <div className="">
                <span className="semiTransparent"> . . . . </span>{" "}
                &apos;React.js&apos;
                <span className="default">,</span>
                &apos;ReactNative&apos;<span className="default"> , </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>
                &apos;HTML/CSS/JS&apos;<span className="default"> , </span>{" "}
                &apos;Node.js&apos;
                <span className="default">, </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span> &apos;Android
                Studio&apos;<span className="default"> , </span>{" "}
                &apos;JAVA&apos;
                <span className="default">, </span>&apos;XML&apos;
                <span className="default"> , </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>{" "}
                &apos;Parallel Processing (CUDA)&apos;
                <span className="default"> , </span> <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>
                &apos;Bootstrap/Tailwind&apos;
                <span className="default"> , </span>
                &apos;SCSS/Less&apos;<span className="default"> , </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>
                &apos;npm/yarn/pnpm&apos;<span className="default">
                  {" "}
                  ,{" "}
                </span>{" "}
                &apos;Firebase&apos;
                <span className="default">, </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>
                &apos;MySQL/MongoDB&apos;<span className="default"> , </span>
                &apos;Canva&apos;
                <span className="default">, </span>
                <br />
              </div>
              <div className="">
                <span className="semiTransparent"> . . . . </span>{" "}
                &apos;UX/UI&apos;
                <span className="default">,</span>
                &apos;TypeScript&apos;<span className="default"> , </span>
              </div>
            </span>
            <div className="">
              <span className="semiTransparent"> . . . . . . . . . . </span>]
              <br />
              <span className="semiTransparent"> . . . . . </span> {"}"}
              <br />
              {"}"}
              <br />
            </div>
          </code>
        </div>
      </div>
    </div>
  );
}
