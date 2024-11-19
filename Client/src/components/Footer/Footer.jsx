import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

const items = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://twitter.com/",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/irfanmuriaa/",
  },
  {
    name: "Tiktok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@irpanzy",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-custom-black text-custom-white h-auto font-karla mt-10">
        <div className="footer container mx-auto p-20 gap-x-14 text-left">
          <aside>
            <a className="flex justify-center items-center gap-6 mb-6">
              <img
                src="public/images/isi perut.png"
                alt="Logo"
                className=""
                width="64px"
              />
              <p className="text-4xl font-bold text-orange-400">ISI PERUT</p>
            </a>
            <p className="text-base font-cambay mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
              Suspendisse blandit placerat ex, vitae accumsan enim<br></br>
              semper eget.
            </p>
            <nav>
              <div className="grid grid-flow-col gap-4">
                {items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-custom-orange h-6 w-6 rounded-md flex justify-center items-center"
                      aria-label={item.name}
                    >
                      <Icon size={14} className="text-custom-white" />
                    </a>
                  );
                })}
              </div>
            </nav>
          </aside>

          <nav>
            <h6 className="text-custom-orange text-2xl font-medium mb-8">
              Our Outlet
            </h6>
            <p className="text-lg font-bold mb-8">
              KLLG st, No.99th, PKU City,<br></br>
              ID 28289
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="/src/assets/clock.svg"
                alt="Clock Icon"
                className="h-6 w-6"
              />
              <p className="text-lg font-semibold">
                Monday - Friday: 8AM - 9PM<br></br>
                Saturday: 8AM - 12PM
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <img
                src="/src/assets/mail.svg"
                alt="Mail Icon"
                className="h-6 w-6"
              />
              <p className="text-lg font-semibold">
                customer.service@isiperut.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="/src/assets/phone.svg"
                alt="Phone Icon"
                className="h-6 w-6"
              />
              <p className="text-lg font-semibold">+62 111-222-3344</p>
            </div>
          </nav>

          <nav>
            <h6 className="text-custom-orange text-2xl font-medium mb-8">
              Company
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Homepage
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Testimonials
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <h6 className="text-custom-orange text-2xl font-medium mb-8">
              Alternative Links
            </h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Menus
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Outlets
                </a>
              </li>
              <li>
                <a href="#" className="link link-hover text-lg font-bold">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="divider divider-neutral m-0"></div>
        <div className="footer footer-center p-5 bg-custom-black text-custom-white">
          <p className="text-sm text-custom-gray font-cambay">
            Copyright © 2024 Haidezign. All Right Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
