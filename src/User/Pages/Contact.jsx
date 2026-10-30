import React, { useRef } from 'react'
import Header from '../Components/Header'
import { IoLocationSharp } from 'react-icons/io5'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaLyft, FaPaperPlane } from 'react-icons/fa'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    const {name,email,message}=form.current
    if(name.value && email.value && message.value){
      emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID , form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS');
          
          toast.success("Thank you for Contacting us !")
          name.value=""
          email.value=""
          message.value=""
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    }else{
      toast.warning("Please fill inputs...")
    }
  };

  return (
    <div>
      <Header/>
      <div className='md:px-20 p-5 my-5'>
        <h1 className='text-center my-5 font-medium text-3xl'>Contact Us</h1>
        <p className='text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste odit qui iure, reiciendis, at mollitia veniam reprehenderit ab quasi nesciunt voluptates pariatur ullam vitae dolore esse impedit est doloribus! Amet.
        Exercitationem, et debitis rerum, at cum suscipit nesciunt eum libero iure ex perferendis nulla, iusto laborum tempore fuga nemo quo. Possimus nemo voluptatibus et animi eos officia doloremque illo voluptatem!
        Nostrum laboriosam, adipisci velit aut culpa libero alias atque vel maxime harum autem itaque consequatur aspernatur, eveniet sed ex ratione, natus architecto minima minus consectetur tempore? Odit hic vero quibusdam.</p>
      </div>
      <div className='grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0'>

        <div className="flex items-center">
          <div className=' p-2 rounded-full bg-gray-400'>
            <IoLocationSharp className='text-2xl' />
          </div>
          <div>
            <p className='ms-5'>123 Street Callifornia</p>
            <p className='ms-5'>USA,4342</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className=' p-2 rounded-full bg-gray-400'>
            <MdPhone className='text-2xl' />
          </div>
          <div>
            <p className='ms-5'>+91 7845123265</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className=' p-2 rounded-full bg-gray-400'>
            <MdEmail className='text-2xl' />
          </div>
          <div>
            <p className='ms-5'>bookstre@gmail.com</p>
          </div>
        </div>

      </div>
      {/* Form and Google Map */}
      <div className='md:grid grid-cols-2 gap-10 my-5 md:px-40 items-center'>
         <div className='bg-gray-200 p-5 text-center'>
            <p className='font-semibold text-xl mb-5'>Send US Message</p>
            <form ref={form} onSubmit={sendEmail} className=''>
              <input name='name' className='bg-white w-full py-2 px-3 mb-3' type="text" placeholder='Name' />
              <input name='email' className='bg-white w-full py-2 px-3 mb-3' type="text" placeholder='Email' />
              <input name='message' className='bg-white w-full py-2 px-3 mb-3' type="text" placeholder='Message' />
              <div className='w-full'>
                <button type='submit' className='bg-black text-white  w-full py-2 rounded mt-3 flex justify-center gap-2 items-center'><FaPaperPlane/>Submit</button>
              </div>
            </form>
         </div>
         <div className='w-fit '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113635!3d10.008813464705796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1789542908566!5m2!1sen!2sin" width="600" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
         </div>
      </div>
       {/* Toast Container */}
      <ToastContainer
      position="top-center"
      autoClose={3000}
      theme="colored"
      transition={Bounce}
      />
    </div>
  )
}

export default Contact