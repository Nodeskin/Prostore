import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Menu from "./menu";


const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        {/* LEFT */}
        <div className="flex-start">

          <Link href="/" className="flex items-center gap-2">
            <div className="bg-emerald-700 text-amber-400 font-black text-xl p-2 rounded-lg">
              MS
            </div>
            <div>
              <span className="text-xl font-extrabold text-gray-900 block leading-none">
                Mumsy Seun <span className="text-emerald-700">Prostore</span>
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-wide">
                FRESH GROCERIES & FOODSTUFFS
              </span>
            </div>
          </Link>
        </div>
        {/* RIGHT */}

        <Menu />
      </div>
    </header>
  );
};

export default Header;
