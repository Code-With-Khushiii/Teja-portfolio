import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-gray c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-gold/30 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p className="hover:text-gold transition-colors cursor-pointer">Terms & Conditions</p>
        <p className="text-gold">|</p>
        <p className="hover:text-gold transition-colors cursor-pointer">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} className="hover:opacity-80 transition-opacity">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Teja Sunkara. All rights reserved.</p>
    </section>
  );
};

export default Footer;
