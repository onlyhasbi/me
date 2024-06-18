import Image from "next/image";

const Info = ({ filename }) => {
  return (
    <div className="w-full flex justify-center items-center mx-auto">
      <div className="relative w-full h-[25rem]">
        <Image src={`/${filename}.svg`} alt={`${filename}-image`} fill />
      </div>
    </div>
  );
};

export default Info;
