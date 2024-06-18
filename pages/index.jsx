import Layout from "@/components/layout.component";
import TypedAnimation from "@/components/typed.component";
import { greeting } from "utils/greeting";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="mb-10">
        <div className="text-5xl my-5 inline-block origin-[70%_70%] animate-wave">👋</div>
        <h5 className="text-2xl mb-5 text-slate-700">{`Good ${greeting()}.`}</h5>
        <h1 className="text-5xl mb-3 relative">
          <span className="font-bold text-slate-800">Hello I&#96;am </span>
          <div className="font-base text-slate-500 inline-block md:w-[15.5rem] w-full md:text-center md:-top-2 md:left-2 left-0 relative after:content-[''] after:block after:absolute after:-bottom-3 after:left-0 after:w-[15.5rem] after:h-[2px] after:bg-slate-600">
            <TypedAnimation strings={["Freelancer", "Designer", "Frontend"]} />
          </div>
        </h1>
        <h2 className="text-6xl font-bold text-slate-800">Muhammad Hasbi</h2>
      </div>
      <a
        className="border-l-4 border-l-slate-400 text-slate-600 pl-4 font-medium hover:text-slate-800 hover:border-l-red-600"
        target="_blank"
        href="https://drive.google.com/file/d/1zrIaBrSOgBmYN_DkY3XBQsZhxhrJTot8/view?usp=sharing"
        download
        rel="noreferrer"
      >
        Download CV
      </a>
    </Layout>
  );
}
