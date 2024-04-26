import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import flowerSVG from "../assets/elements/flower.svg";
import heroIMage from "../assets/images/hero-image.jpeg";
import image4 from "../assets/images/image-4.jpeg";
export default function InvitationsPage() {
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <section className=" h-screen bg-cover bg-center flex justify-center items-center">
      <img
        src={heroIMage}
        alt=""
        className="absolute w-full h-screen object-cover"
      />
      <div className="relative bg-[rgb(255,246,239)] py-4 w-[302px] h-[502px] rounded-[14px] border-4 border-[#3D634C] flex items-center flex-col gap-1">
        <img
          src={flowerSVG}
          alt="flower"
          className="absolute -top-32 w-[406.65px] h-[260.42px]"
        />
        <img
          className="w-[194px] h-[194px] rounded-full border border-white object-cover z-10"
          src={image4}
        />
        <div className="text-center">
          <p className="text-black text-base font-normal font-['Raleway'] uppercase tracking-[2.56px]">
            Save the date
          </p>
          <p className="text-black text-base font-normal font-['Raleway'] uppercase tracking-[2.56px]">
            For the wedding of
          </p>
        </div>

        <h1 className="w-[183px] text-center text-neutral-600 text-5xl font-normal font-Lavishly leading-[61.21px]">
          Arinata And Sulastriani
        </h1>
        <p className="text-black text-sm font-normal font-['Raleway'] uppercase tracking-widest">
          17 / 05 / 2024
        </p>

        <Link
          to={"/home"}
          className="text-orange-50 text-base font-normal font-['Raleway'] uppercase tracking-widest absolute -bottom-9 bg-[#3D634C] border-white border-2 px-4 py-2"
        >
          Open the invitation{" "}
        </Link>
      </div>
    </section>
  );
}
