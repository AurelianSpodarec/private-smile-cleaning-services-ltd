import Link from "next/link";

function MenuMobile() {
  return (
    <div className="lg:hidden flex items-center py-4 justify-between">
      <Link href="/" className="block">
        <span className="sm:hidden text-2xl font-extrabold uppercase tracking-wider font-playFair">Smile Clean.</span>
        <span className="hidden sm:block text-2xl font-extrabold uppercase tracking-wider font-playFair">Smile Clean Spodarec</span>
      </Link>
      <button className=" bg-[#131313] text-xs font-bold rounded-lg border py-2 px-3 text-white">{`${`Let's talk!`}`}</button>
    </div>
  )
}

export default MenuMobile
