import {
  HiOutlineShieldCheck,
  HiOutlineMagnifyingGlass,
  HiOutlineBriefcase,
  HiOutlineMapPin,
} from "react-icons/hi2";

function HeroSection() {
  return (
    <div className="max-w-xl text-white">

      <p className="uppercase tracking-[6px] text-blue-300 font-semibold mb-4">
        Welcome to
      </p>

      <h1 className="text-6xl font-extrabold leading-tight">
        Campus
        <br />
        Lost & Found
      </h1>

      <p className="mt-8 text-xl text-gray-200 leading-8">
        A secure platform that helps students report, search,
        and recover lost belongings quickly and efficiently.
      </p>

      <div className="mt-12 space-y-6">

        <div className="flex items-center gap-4">
          <HiOutlineMapPin className="text-3xl text-blue-400" />
          <span className="text-lg">Report Lost Items</span>
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineBriefcase className="text-3xl text-blue-400" />
          <span className="text-lg">Report Found Items</span>
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineMagnifyingGlass className="text-3xl text-blue-400" />
          <span className="text-lg">Search Instantly</span>
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineShieldCheck className="text-3xl text-blue-400" />
          <span className="text-lg">Secure Student Access</span>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;