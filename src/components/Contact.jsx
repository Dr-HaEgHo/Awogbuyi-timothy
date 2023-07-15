import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion as m } from 'framer-motion';
import { styles } from '../style';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { experiences } from '../constants';
import { Contacts } from './Hero';
import Earth from './canvas/Earth';
import { StarsCanvas } from './canvas';
// import { SMTPClient } from "emailjs";
import cogoToast from "cogo-toast";


const Contact = () => {

  const [message, setMessage] = useState();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email:"",
    message: ""
  })

  const postData = async () => {
    
    const res = await fetch(
      "https://portfolio-3cc8e-default-rtdb.firebaseio.com/portfolio-form.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          form,
        }),
      }
    );

  }

  const handleProceed = (e) => {
    e.preventDefault();
    if (
      form.firstName !== "" &&
      form.lastName !== "" &&
      form.email !== "" &&
      form.message !== "") {
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      postData()
      cogoToast.success("Message sent!")
      console.log(form)
    } else {
      cogoToast.error("Please fill all fields");
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name] : e.target.value});
  }

  // const client = new SMTPClient({
  //   user: "awogbuyitimothy@gmail.com",
  //   password: "Secret@c0d3.",
  //   host: "smtp.awogbuyitimothy@gmail.com",
  //   ssl: true,
  // });

  // send the message and get a callback with an error or details of the message that was sent
  // const handleSendMessage = () => {
  //   client.send(
  //     {
  //       text: message,
  //       from: "you <username@your-email.com>",
  //       to: "someone <someone@your-email.com>, another <another@your-email.com>",
  //       cc: "else <else@your-email.com>",
  //       subject: "testing emailjs",
  //     },
  //     (err, message) => {
  //       console.log(err || message);
  //     }
  //   );

  // }

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      exit={{ opacity: 0 }}
      className="mt-[3rem]"
    >
      <StarsCanvas />
      <m.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WANT TO WORK WITH ME?</p>
        <h2 className={styles.sectionHeadText}>Contact Me.</h2>
      </m.div>
      <m.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full xl:w-[40%] max-w-3xl leading-[30px] "
      >
        I create stunning digital experiences tailored to ensuring that your
        brand stands out.
      </m.p>
      <div className="w-full mt-[3rem] z-[2234567898765432] flex flex-col-reverse md:flex-row items-stretch justify-evenly p-8">
        {/* designs */}
        <div className="w-full md:w-[40%] flex flex-col items-center gap-4 ">
          <m.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="h-full w-full hidden md:block overflow-hidden"
          >
            <Earth />
          </m.div>
          <m.div className="z-[76543]" variants={fadeIn("", "", 0.1, 1)}>
            <Contacts />
          </m.div>
        </div>

        {/* Form */}
        <m.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full md:w-[50%] max-w-[400px]"
        >
          <form action="" className="w-full flex flex-col gap-4 ct-form">
            <div className="w-full flex items-center justify-between gap-4 ">
              <input
                onChange={handleChange}
                type="text"
                value={form.firstName}
                name="firstName"
                placeholder="First Name"
                className="w-full rounded-[6px] text-[#ffffff90] bg-[#ffffff20] focus:outline-none focus:bg-[#ffffff30] text-sm font-[300] px-[10px] py-[12px] placeholder:text-[#ffffff60]"
              />
              <input
                onChange={handleChange}
                type="text"
                value={form.lastName}
                name="lastName"
                placeholder="Last Name"
                className="w-full rounded-[6px]  text-[#ffffff90] bg-[#ffffff20] focus:outline-none focus:bg-[#ffffff30] text-sm font-[300] px-[10px] py-[12px] placeholder:text-[#ffffff60]"
              />
            </div>
            <input
              onChange={handleChange}
              type="email"
              value={form.email}
              name="email"
              placeholder="Email"
              className="w-full rounded-[6px] text-[#ffffff90] bg-[#ffffff20] focus:outline-none focus:bg-[#ffffff30] text-sm font-[300] px-[10px] py-[12px] placeholder:text-[#ffffff60]"
            />
            <textarea
              onChange={handleChange}
              name="message"
              value={form.message}
              placeholder="How can I be of help?"
              id=""
              cols="30"
              rows="7"
              className="bg-[#ffffff20] backdrop:blur-lg text-[#ffffff90] text-sm font-[300] focus:bg-[#ffffff30] focus:outline-none rounded-[6px] p-[10px] placeholder:text-[#ffffff60]"
            ></textarea>
            <button onClick={handleProceed}>Send</button>
          </form>
        </m.div>
      </div>

      <p className="text-[#66ffe7] pointer-events-none fatface text-[250px] 2xl:text-[300px] z-0 fixed leading-[240px] bottom-0 left-1/2 transform -translate-x-1/2 opacity-[0.03] whitespace-nowrap">
        Contact Me.
      </p>
    </m.div>
  );
}

export default SectionWrapper(Contact, 'contact')