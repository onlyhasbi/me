import { footerList } from "@/model/footer.model";

const Footer = ({ isVisible }) => {
  if (!isVisible) return null;

  const linkedToStyle = 'text-slate-800'

  const linkedTo = (value) => {
    if (!value) return null;

    const linkedList = {
      Email: <a className={linkedToStyle} href={`mailto:${value}`}>{value}</a>,
      Phone: <a className={linkedToStyle} href={`https://wa.me/62${value.slice(3, value.length)}`}>{value}</a>,
      Location: <a className={linkedToStyle} href={`https://maps.google.com/?q=${value}`}>{value}</a>
    }

    return linkedList[value]
  }

  return (
    <div className="flex flex-wrap lg:justify-between justify-start items-center">
      <div className="flex flex-wrap gap-x-10 lg:w-auto w-full md:divide-x divide-x-0 md:divide-y-0 divide-y">
        {footerList.map(({ name, value }) => {
          return (
            <div
              className="md:w-auto w-full md:py-0 py-5 md:pl-10 md:first:pl-0"
              key={name}
            >
              <h3 className="text-sm text-slate-600">{name}</h3>
              {linkedTo(name)}
            </div>
          );
        })}
      </div>
      <h5 className="text-sm text-slate-500 lg:mt-0 mt-20">
        &#64;2022 Hasbi Portfolio
      </h5>
    </div>
  );
};

export default Footer;
