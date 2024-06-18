import { footerList } from "@/model/footer.model";
import dayjs from "dayjs";

const Footer = ({ isVisible }) => {
  const currentYear = dayjs(new Date()).year();
  const linkedToStyle = "text-slate-800 hover:underline";

  if (!isVisible) return null;

  const linkedTo = (name, value) => {
    if (!value) return null;

    const linkList = {
      Email: (
        <a
          title="connect with email"
          className={linkedToStyle}
          target="_blank"
          href={`mailto:${value}`}
          rel="noreferrer"
        >
          {value}
        </a>
      ),
      Phone: (
        <a
          title="connect to whatsapp"
          className={linkedToStyle}
          target="_blank"
          href={`https://wa.me/62${value
            .substring(3, value.length)
            .replace(/ /g, "")}`}
          rel="noreferrer"
        >
          {value}
        </a>
      ),
      Location: (
        <a
          className={linkedToStyle}
          target="_blank"
          href={`https://maps.google.com/?q=Moncongloe Lappara, Moncong Loe, Maros Regency, South Sulawesi`}
          rel="noreferrer"
        >
          {value}
        </a>
      ),
    };

    return linkList[name];
  };

  return (
    <div className="flex flex-wrap lg:justify-between justify-start items-center">
      <div className="flex flex-wrap gap-x-10 lg:w-auto w-full md:divide-x divide-x-0 md:divide-y-0 divide-y">
        {footerList.map(({ name, value }) => {
          return (
            <div
              className="md:w-auto w-full md:py-0 py-5 md:pl-10 md:first:pl-0"
              key={name}
            >
              <h3 className="text-xs text-slate-600">{name}</h3>
              {linkedTo(name, value)}
            </div>
          );
        })}
      </div>
      <h5 className="text-sm text-slate-500 lg:mt-0 mt-20">
        &#64;{currentYear} Hasbi Portfolio
      </h5>
    </div>
  );
};

export default Footer;
