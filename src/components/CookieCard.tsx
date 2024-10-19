function CookieCard() {
  return (
    <div className="fixed bottom-0 right-0 z-50 p-6">
      <div className="relative max-w-2xl px-8 md:px-14 pt-6 pb-9 bg-white rounded-7xl shadow-3xl z-50">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img className="mr-8" src="uinel-assets/images/cookies/cookies-image.svg" alt="" />
              <h3 className="font-heading font-medium text-3xl leading-loose">Cookies</h3>
            </div>
            <p className="text-base leading-6">By clicking “Accept”, you agree to the storing of cookies on your device to enhance (...)</p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col lg:flex-row lg:justify-end items-center px-4">
            <a className="inline-block py-1 mb-4 lg:mb-0 lg:mr-9 lg:mt-10 font-bold text-xl leading-7 border-b border-black" href="#">
              <span className="tracking-tight">More</span>
            </a>
            <a className="lg:max-w-max py-3 px-10 lg:mt-10 w-full text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Accept</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieCard
