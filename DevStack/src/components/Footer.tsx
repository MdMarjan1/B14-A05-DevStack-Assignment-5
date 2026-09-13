import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-4">
          {/* Brand */}
          <div className="max-w-xs grid  md:col-span-auto ">
            <div className="flex items-center gap-2 ">
              <img src={Logo} alt="" />
            </div>
            <p className="mt-3 text-sm text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-4 flex gap-4 text-sm font-medium text-gray-900">
              <a href="#" className="hover:text-[#D81B7E]">
                GitHub
              </a>
              <a href="#" className="hover:text-[#D81B7E]">
                Twitter
              </a>
              <a href="#" className="hover:text-[#D81B7E]">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 ">
              PRODUCT
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 ">
              PRODUCT
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 ">
              PRODUCT
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D81B7E]">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 text-sm text-[#64748B] sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D81B7E]">
              Privacy
            </a>
            <a href="#" className="hover:text-[#D81B7E]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
