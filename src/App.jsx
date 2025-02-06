import { useState, useEffect } from 'react';
import Logo from '/logo.png';
import './App.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from 'lucide-react';
function App() {

  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [leftPosition, setLeftPosition] = useState(0);
  const [rightPosition, setRightPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const faqs = [
    {
      question: "What services does MN Programming offer?",
      answer:
        "We provide custom software development, web and mobile app development, enterprise solutions, and more to help businesses grow.",
    },
    {
      question: "Can you create a custom solution for my business?",
      answer:
        "Yes! We specialize in developing tailored technology solutions to meet your specific needs and goals.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "The timeline varies based on project complexity, but we work efficiently to deliver high-quality solutions within the agreed timeframe.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Absolutely! We provide post-launch support, updates, and maintenance to ensure your system runs smoothly.",
    },
  ];
  const services = [
    {
      title: "Software Development",
      description: "Custom and efficient software solutions designed to meet your unique business challenges",
      image: "/Title.png"
    },
    {
      title: "Web Development",
      description: "Create scalable web solutions that activate your brand and engage your audience",
      image: "/Title1.png"
    },
    {
      title: "Mobile App Development",
      description: "Cutting-edge mobile applications built for seamless user experience on iOS and Android",
      image: "/Title2.png"
    },
    {
      title: "Enterprise Solutions",
      description: "Drive business growth with our comprehensive enterprise solutions",
      image: "/Title3.png"
    }
  ];
  const Insights = [
    {
      title: "The Future of AI in Software Development",
      description: "Explore how artificial intelligence is revolutionizing the way software is built and optimized.",
      image: "/insights1.png"
    },
    {
      title: "Top Web Development Trends to Watch in 2025",
      description: "Stay ahead with the latest design and development trends shaping the future of websites.",
      image: "/insights2.png"
    },
    {
      title: "How Custom Software Can Transform Your Business",
      description: "Discover the benefits of tailored software solutions and how they improve efficiency and scalability.",
      image: "/insights3.png"
    },
    {
      title: "Cybersecurity Best Practices for Businesses in the Digital Age",
      description: "Learn essential strategies to protect your business from online threats and data breaches.",
      image: "/insights4.png"
    }
  ];
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  const TestimonialCard = ({ testimonial }) => (
    <div className="p-6 mx-4 w-80 bg-white shadow-lg rounded-xl hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-sm">{testimonial.name}</h3>
          <RatingStars rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-gray-600 text-sm">{testimonial.text}</p>
    </div>
  );

  const service = [
    { title: "Expertise in Diverse Technologies", desc: "We specialize in a wide range of programming languages and frameworks to deliver top-notch solutions.", img: "/icon1.png" },
    { title: "Custom Solutions for Every Business", desc: "Tailored software solutions designed to solve your unique challenges.", img: "/icon2.png" },
    { title: "Dedicated Support and Collaboration", desc: "Working closely with clients for a seamless experience.", img: "/icon3.png" },
    { title: "Commitment to Innovation", desc: "Staying ahead of the curve with cutting-edge technology.", img: "/icon4.png" }
  ];

  const testimonials1 = [
    { name: "RUTHS GUTMANN", image: "/girl.png", rating: 4, text: "Ipsum adipisicing id. Aenean atque vel specilationem phasell elit split tempus est. Quam diam eu fugiat sus all cum maximilability." },
    { name: "MARLEE MACLAKOVIC", image: "/girl.png", rating: 5, text: "Quod tristert entpsuling nectrium lutien sapce ut at. Et suos sed consectetuer sus split et, sid rotularess tempus phasell ut sad." },
    { name: "TEVIS WIZA", image: "/girl.png", rating: 4, text: "Excepturi incidening et maximus sed incidense ut quishe ta. Quam dui aqua sed split et, sid maximus tempus phasell ut sed." }
  ];

  const testimonials2 = [
    { name: "MCLAGUREN", image: "/girl.png", rating: 4, text: "Qui ut. Aliquam atque sed tempusbus sus split tempus est. Qut fugiat sus et cum necessitatibus." },
    { name: "LAVINA BLANCA", image: "/girl.png", rating: 4, text: "Quod incidunt empsuling nectrium lutien sapce ut at. Et suos sed consectetuer sus split et, sid rotularess tempus phasell ut sad." },
    { name: "JOANIE KEELING", image: "/girl.png", rating: 5, text: "Laudantium inventore voluptat distinctio non maximus. Tempus ipsumet phasell lorem amet, nam amet volupt. Quos dui aqua sed split et, sid aquat." }
  ];

  const handlePrevious = () => {
    setLeftPosition((prev) => (prev > 0 ? prev - 1 : testimonials1.length - 1));
    setRightPosition((prev) => (prev > 0 ? prev - 1 : testimonials2.length - 1));
  };

  const handleNext = () => {
    setLeftPosition((prev) => (prev + 1) % testimonials1.length);
    setRightPosition((prev) => (prev + 1) % testimonials2.length);
  };




  const RatingStars = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-${i < rating ? 'yellow' : 'gray'}-400`}>★</span>
      ))}
    </div>
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(Insights.length / itemsPerSlide);



  const getVisibleInsights = () => {
    const start = currentSlide * itemsPerSlide;
    return Insights.slice(start, start + itemsPerSlide);
  };

  return (
    <>
      {/* Responsive Navbar */}
      <header className="font-figtree flex justify-between items-center px-4 md:px-10 py-5 bg-white shadow-md relative">
        {/* Logo */}
        <div className="absolute bg-[#06C1C0] top-0 left-3 p-2 shadow-lg z-10">
          <img className="md:h-[100px] md:w-[100px] w-[50px] h-[50px]" src={Logo} alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto z-20 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden '} md:flex flex-1 justify-center  md:relative top-full left-0 w-full sm:w-full bg-white md:bg-transparent`}>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row text-center gap-4 md:gap-6 text-gray-600 font-semibold p-4 md:p-0">
              <li className="cursor-pointer text-black underline decoration-black hover:text-[#06C1C0] text-sm">HOME</li>
              <li className="cursor-pointer hover:text-[#06C1C0] text-sm">SERVICES</li>
              <li className="cursor-pointer hover:text-[#06C1C0] text-sm">FAQ</li>
              <li className="cursor-pointer hover:text-[#06C1C0] text-sm">CONTACT</li>
              <li className="cursor-pointer hover:text-[#06C1C0] text-sm">BLOG</li>
              <li className="cursor-pointer hover:text-[#06C1C0] text-sm">ABOUT</li>
            </ul>
          </nav>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-5 py-2 bg-[#06C1C0] text-white font-bold rounded-lg text-sm">
          GET STARTED
        </button>
      </header>

      {/* Responsive Hero Section */}
      <section className="p-4 md:p-10 flex flex-col items-center justify-center text-center min-h-[50vh] md:h-[70vh] bg-[url('/home.png')] bg-cover bg-center rounded-b-[60px] md:rounded-b-[120px] relative">
        <h1 className="text-3xl md:text-5xl font-light text-white leading-tight">
          Innovative Programming <br /> Solutions for
        </h1>
        <h1 className="text-3xl md:text-5xl text-[#06C1C0] font-extrabold mt-2">
          Tomorrow's Challenges
        </h1>
        <p className="max-w-lg mt-4 text-gray-200 text-base md:text-lg px-4 md:px-0">
          Empowering businesses with innovative programming solutions. From web development to custom software, we create the tools that shape the future.
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-md hover:bg-gray-100 w-full md:w-auto">
            LEARN MORE
          </button>
          <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-md w-full md:w-auto">
            GET A FREE QUOTE
          </button>
        </div>
      </section>

      {/* Responsive Services Section */}
      <section className="py-10 md:py-20 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {service.map((service, index) => (
          <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
            <img src={service.img} height={50} width={50} className="pb-4" alt="" />
            <h3 className="text-xl font-bold pt-3 pb-3">{service.title}</h3>
            <img src="/line.png" className="pb-3 pt-3" alt="" />
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Responsive Technologies Section */}
      <section className="py-10 text-center px-4">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Our Technologies and Platforms
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center w-max animate-scroll">
          {/* Duplicated images for smooth infinite scrolling */}
          <img src="/Group1.png" alt="Technology 1" className="w-auto h-auto mx-4" />
          <img src="/Group2.png" alt="Technology 2" className="w-auto h-auto mx-4" />
          <img src="/Group3.png" alt="Technology 3" className="w-auto h-auto mx-4" />
          {/* Duplicate the same images */}
          <img src="/Group1.png" alt="Technology 1" className="w-auto h-auto mx-4" />
          <img src="/Group2.png" alt="Technology 2" className="w-auto h-auto mx-4" />
          <img src="/Group3.png" alt="Technology 3" className="w-auto h-auto mx-4" />
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </section>

      {/* Responsive About Section */}
      <section className="relative pb-20 md:pb-40 bg-white rounded-t-[60px] md:rounded-t-full overflow-hidden">
        <div className="flex flex-col mt-10 md:mt-40 h-auto md:h-[30vh] text-center justify-center items-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crafting Tomorrow's <span className="text-teal-500">Solutions</span>, Today
          </h2>
          <p className="text-gray-600 max-w-lg">
            Building custom solutions that evolve with your business. We blend innovation,
            expertise, and creativity to craft powerful digital experiences.
          </p>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center p-4 md:p-20">
            {/* Text Content */}
            <div className="z-10">
              <h1 className="font-thin mb-2 text-xl md:text-2xl">
                We are passionate about building innovative solutions that drive business growth.
              </h1>
              <p className="font-thin text-xs">
                With a team of experienced developers and tech enthusiasts, we specialize in creating
                custom software, web, and mobile applications designed to meet the evolving needs of
                today's businesses. Whether you're a startup or an established company, we partner
                with you to turn your vision into reality.
              </p>
              <div className="translate-x-0 md:translate-x-40 z-10 translate-y-10 md:translate-y-60 bg-[#06C1C0] rounded-xl p-6">
                <div className="flex items-center z-20 gap-4 mb-4">
                  <div className='flex gap-3 items-center'>
                    <div className="w-8 h-8 z-20 bg-[#06C1C0] rounded-lg flex items-center justify-center">
                      <span className="text-white"><img src="/mission.png" alt="" /></span>
                    </div>
                    <h3 className="font-semibold text-white border-b border-white">OUR MISSION</h3>
                  </div>
                  <div className='flex gap-3'>
                    <div className="w-8 h-8 z-20 bg-[#06C1C0] rounded-lg flex items-center justify-center">
                      <span className="text-white"><img src="/goal.png" alt="" /></span>
                    </div>
                    <h3 className="font-semibold text-gray-200 items-center">OUR VISSION</h3>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our mission is to deliver innovative, high-quality technology solutions that
                  empower businesses to thrive in an ever-evolving digital world. We are committed
                  to providing customized software, web, and mobile applications that drive
                  efficiency, foster growth, and solve real-world challenges for our clients.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative mt-10 md:mt-0">
              <div className="absolute top-0 left-0 w-48 h-48 bg-teal-200 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
              <img
                src="/about.png"
                alt="Team working"
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-blue-200 rounded-full opacity-20 translate-x-1/2"></div>
        <div className=" z-0 absolute -bottom-96 w-full h-full">
          <img src="/wave.png" alt="Wave" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* Responsive Services Slider */}
      <section className="service mt-10 md:mt-20">
        <div className="relative w-full px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Custom Tech Solutions to
              <span className="text-[#06C1C0] ml-2">Drive Your Success</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto px-4">
              From web development to custom software, we provide scalable and
              innovative solutions designed to meet your business needs.
            </p>
          </div>

          <div className="rounded-b-full bg-white">
            <div className="relative mt-10 md:mt-20 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="min-w-full md:min-w-[calc(50%-1rem)] lg:min-w-[calc(25%-1rem)] flex justify-center px-4">
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                      <div
                        className={`relative w-full bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-xl mb-6 md:mb-0
                    ${index === currentSlide ? 'scale-105' : 'scale-100'}`}
                      >
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-96 md:h-72 lg:h-96 object-cover" // Adjusted height for all screens
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-white rounded-lg text-black m-4 px-4 py-3">
                          <h3 className="text-lg font-semibold">{service.title}</h3>
                          <p className="text-sm">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 
              ${currentSlide === index ? 'bg-[#06C1C0]' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* View All Services Button */}
            <div className="text-center mt-8">
              <button className="bg-[#06C1C0] text-white px-6 py-2 rounded-md font-medium hover:bg-[#05a8a7] transition-colors">
                VIEW ALL SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>





{/* Testimonial */}
<section>
  <div className="w-full px-4 md:px-10 py-12">
    <div className="flex justify-between items-center flex-wrap">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">With Our Experience We</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-teal-500">Will Serve You</h3>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setLeftPosition((prev) => (prev > 0 ? prev - 1 : testimonials1.length - 1));
            setRightPosition((prev) => (prev > 0 ? prev - 1 : testimonials2.length - 1));
          }}
          className="p-2 rounded-full text-white bg-[#989898] hover:bg-gray-200 transition-colors"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            setLeftPosition((prev) => (prev + 1) % testimonials1.length);
            setRightPosition((prev) => (prev + 1) % testimonials2.length);
          }}
          className="p-2 rounded-full text-white bg-[#06C1C0] hover:bg-gray-200 transition-colors"
          aria-label="Next testimonials"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>

    <div className="overflow-hidden relative">
      <div
        className="flex mb-5 gap-2 justify-start transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${leftPosition * 100}%)` }}
      >
        {testimonials1.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-full  md:w-80 px-2">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      <div
        className="flex gap-2 justify-end transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${rightPosition * 100}%)` }}
      >
        {testimonials2.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-80 px-2">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      <div>
        {/* banner Section */}
        <section className=" rounded-lg sm:p-0 p-10 bg-[#00504F] mb-20 md:mb-40 min-h-[60vh] py-10 relative text-white">

          <div className="absolute w-full opacity-7 top-0">
            <img src="/wave.png" alt="wave" className="w-full" />
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto ">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl font-semibold ">
                Get Inspiration for Future Offers Weekly
              </h1>
              <ul className="space-y-2">
                {["Exclusive Industry Trends", "Custom Offer Ideas", "Expert Tips & Insights", "Early Access to New Services"].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-white text-xl">✓</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <div className="sm:flex hidden  items-center bg-white text-black border-black border-2 px-4 py-2 mt-4 w-fit">
                <p className="text-black-500">Please enter your email</p>
                <span className="ml-10 border-black border-2 rounded-full p-1 text-black text-xl">➝</span>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="/banner.png" alt="Banner" className="rounded-lg -translate-y-10" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 md:px-20 bg-[#EFFFFA] text-black">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md cursor-pointer transition duration-300 hover:shadow-lg"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-xl transform transition-transform duration-300"
                    style={{ transform: openFAQ === index ? "rotate(180deg)" : "rotate(0)" }}>
                    ▼
                  </span>
                </div>
                {openFAQ === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition">READ MORE</button>
          </div>
        </section>
      </div>

      {/* Latest Insights */}
      <section className="relative z-20">
        <div className="z-20 relative mt-20 overflow-hidden px-4">
          <div className="max-w-7xl mx-auto">
            <div className="transition-transform duration-500 ease-in-out">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {getVisibleInsights().map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:shadow-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 
              ${currentSlide === index ? 'bg-[#06C1C0]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute z-10 w-full top-0 overflow-hidden">
  <img src="/wave.png" alt="wave" className="w-full object-cover" />
</div>
      </section>

      {/* CTA Section */}
      <section className="p-4 md:p-10 z-20 mt-20 flex flex-col items-center justify-center text-center min-h-[70vh] py-20 relative rounded-t-[120px] overflow-hidden">

{/* Background Image */}
        <div className="absolute inset-0">
          <img src="/CTA.png" alt="Background" className="w-full h-full object-cover" />
        </div>



        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-light text-white leading-tight">
            Innovative Programming <br /> Solutions for
          </h1>
          <h1 className="text-5xl text-[#06C1C0] font-extrabold mt-2">
            Tomorrow's Challenges
          </h1>
          <p className="max-w-lg mt-4 text-gray-200 text-lg">
            Empowering businesses with innovative programming solutions. From web development to custom software, we create the tools that shape the future.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-md hover:bg-gray-100">
              LEARN MORE
            </button>
            <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold shadow-md">
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </section>


      <footer className="bg-[#06C1C0] text-black py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <img src="/logo.png" width={150} height={150} alt="" />
            <p className="mt-2 text-sm">
              MN Programming delivers innovative, high-quality software and web solutions tailored to your business needs. With a commitment to excellence and cutting-edge technology, we help businesses grow and stay ahead in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-5 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="mt-2 space-y-5 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Client Testimonials</a></li>
              <li><a href="#" className="hover:underline">Support Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className='space-y-5'>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-sm">📍 123 Tech Avenue, Suite 456, San Francisco, CA 95107</p>
            <p className="text-sm">📞 (654) 478-9900</p>
            <p className="text-sm">📧 info@mnprogramming.com</p>

            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-[#00504F] bg-white p-1 rounded-full"><FaFacebookF /></a>
              <a href="#" className="text-[#00504F] bg-white p-1 rounded-full"><FaTwitter /></a>
              <a href="#" className="text-[#00504F] bg-white p-1 rounded-full"><FaInstagram /></a>
              <a href="#" className="text-[#00504F] bg-white p-1 rounded-full"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-sm border-t border-teal-500 pt-4">
          © 2025 MN Programming. All Rights Reserved.
        </div>
      </footer>

    </>
  );
}

export default App;
