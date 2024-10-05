interface IPageHeader {
  kicker?: string | React.ReactNode
  title: string | React.ReactNode
  subheader?: string
  color?: "normal" | "inverted"
  className?: string
  textAlign?: string
}

function PageHeader({ kicker, title, subheader, color, className, textAlign = "text-center" }: IPageHeader) {
  return (
    <header className={`flex flex-col justify-center items-center mx-auto mb-20 ${textAlign} ${className} ${color === "inverted" ? "text-gray-50" : "text-[#2d2d2d]"} `}>
      {kicker && <span className="font-montserrat">{kicker}</span>}
      {title && <h2 className="text-3xl lg:text-6xl font-extrabold font-teko flex gap-2">{title}</h2>}
      {subheader && <p className="max-w-3xl">{subheader}</p>}
    </header>
  )
}

export default PageHeader
