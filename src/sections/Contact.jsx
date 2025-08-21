import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      // emailjs.send(...)  -> keep your logic
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center px-4 py-12 md:py-20 c-space section-spacing"
    >
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Contact Details */}
      <div className="flex flex-col w-full max-w-3xl p-6 mb-10 border border-gold/30 rounded-2xl bg-black/50 backdrop-blur-sm">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-gold">
          Get In Touch
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">📞</span>
              </div>
              <div>
                <p className="text-sm text-gray">Phone</p>
                <p className="text-white font-medium text-sm md:text-base">
                  +1 (227) 218-8477
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray">Email</p>
                <p className="text-white font-medium break-words text-sm md:text-base">
                  grandhisaikrishna3@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">📍</span>
              </div>
              <div>
                <p className="text-sm text-gray">Location</p>
                <p className="text-white font-medium text-sm md:text-base">
                  Washington, DC, USA
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">💼</span>
              </div>
              <div>
                <p className="text-sm text-gray">LinkedIn</p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors duration-200 font-medium text-sm md:text-base"
                >
                  saikrishna-grandhi
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">👩‍💻</span>
              </div>
              <div>
                <p className="text-sm text-gray">Role</p>
                <p className="text-white font-medium text-sm md:text-base">
                  Data Analyst
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                <span className="text-gold text-lg">⚡</span>
              </div>
              <div>
                <p className="text-sm text-gray">Available</p>
                <p className="text-gold font-medium text-sm md:text-base">
                  Open to Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form
      <div className="flex flex-col w-full max-w-md p-6 border border-gold/30 rounded-2xl bg-black/50">
        <div className="flex flex-col items-start w-full gap-5 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gold">Let's Talk</h2>
          <p className="text-sm md:text-base text-gray">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus w-full"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus w-full"
              placeholder="johndoe@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus w-full"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-3 text-base md:text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation ${
              isLoading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default Contact;
