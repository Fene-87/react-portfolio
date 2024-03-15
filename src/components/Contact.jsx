import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey:  YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }

  return (
    <div className='h-full w-full flex flex-col md:flex-row p-5 md:p-20 gap-20 items-start md:items-center justify-center'>
      <div>
        <p className='text-[#091e42] w-[455px] text-4xl leading-[52px] font-bold text-center md:text-start'>
            I'm always interested in hearing about new projects, so
            if you'd like to chat please get in touch.
        </p>
      </div>

      <form 
        ref={form}
        action="" 
        className='flex flex-col'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='hidden' htmlFor="full_name">Full name</label>
        <input 
          type="text" 
          name="user_name" 
          id="full_name"
          {...register("user_name", {
            required: {
              value: true,
              message: "Full name cannot be blank",
            }
          })}
          placeholder='Full name'
          className='w-[327px] h-[48px] text-[15px] md:w-[652px] border-b-2 border-dotted border-[#dbd8d7] outline-none'
        />

        <label className='hidden' htmlFor="email">Email address</label>
        <input
          type="email" 
          name="user_email" 
          id="email" 
          {...register("user_email", {
            required: {
              value: true,
              message: "Email cannot be blank",
            }
          })}
          placeholder='Email address'
          className='w-[327px] h-[48px] text-[15px] md:w-[652px] border-b-2 border-dotted border-[#dbd8d7] outline-none'
        />

        <textarea
          name="message" 
          id="message"
          {...register("message", {
            required: {
              value: true,
              message: "Message cannot be blank",
            }
          })}
          placeholder='Your message...'
          className='w-[327px] h-[114px] text-[15px] md:w-[652px] bg-[#fbf8f7] pt-2 mt-5 outline-none'
        ></textarea>
        <button type='submit' className='w-[131px] h-[48px] bg-[#ff6b00] hover:bg-[#091e42] text-white text-[17px] font-bold leading-[24px] mt-5 rounded-md'>Get in touch</button>
      </form>
    </div>
  )
}

export default Contact;
