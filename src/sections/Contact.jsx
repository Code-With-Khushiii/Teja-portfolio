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
                  +1-312-459-1817
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
                  tejasunkara.jobs@gmail.com
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
                  Austin, TX, USA
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
                  href="https://www.linkedin.com/in/tejasunkara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors duration-200 font-medium text-sm md:text-base"
                >
                 tejasunkara
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
                  Cloud & IT Support Engineer 
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
    </section>
  );
};

export default Contact;
