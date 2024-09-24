function Schedule() {
  return (
    <div>
      <img src="https://www.doforms.com/wp-content/uploads/2023/10/professional-house-cleaning-checklist.jpeg%E2%80%8B.jpg"
        className="absolute object-cover h-full w-full" />

      <div className="h-full max-w-xl mx-auto">
        <div className="relative z-10 flex min-h-full flex-1 flex-col justify-center py-12">
          <div className="px-4">
            <div className="mb-6 lg:mb-10 px-4">
              <span className="font-bold text-lg uppercase">Schedule a Cleaner(draft page)</span>
            </div>
            <div className="sm:mx-auto w-full">
              <div
                className="
      rounded-md overflow-hidden border border-stroke border-gray-100 bg-white p-4 lg:p-6 mb-6
      py-10 lg:py-16 px-5 md:px-8 lg:px-16 shadow-xl 
  "
              >
                <div className="sm:mx-auto sm:w-full sm:max-w-md mb-4">
                  <div className="text-left">
                    <h2 className="font-bold text-xl lg:text-2xl text-[#020100] mb-2">
                      Choose Property type - coded in 3minutes
                    </h2>
                  </div>
                </div>
                <form action="#" method="POST">
                  <div className="space-y-6 mb-10">
                    <div>
                      <div className="relative inline-flex w-full items-center justify-center">
                        <input
                          className="
              bg-white
              w-full
              py-3 px-4
              border border-gray-300 rounded-md
              undefined 
              undefined
          "
                          label="text"
                          placeholder="Your name"
                          id="email"
                          name="email"
                          type="text"
                          autoComplete="email"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div>
                      <div className="relative inline-flex w-full items-center justify-center">
                        <input
                          className="
              bg-white
              w-full
              py-3 px-4
              border border-gray-300 rounded-md
              undefined 
              undefined
          "
                          label="Password"
                          placeholder="Your Address"
                          id="password"
                          name="password"
                          type="text"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full
          button button-solid
          button-primary
          button-md
          undefined"
                    type="submit"
                  >
                    <div className="inline-flex gap-1 leading-4 items-center flex-row-reverse">
                      <button className="hidden lg:flex items-center gap-1 nav-cta bg-[#a283ab] rounded-xl py-2 px-4 text-sm text-white border border-[gold] font-semibold">
                        Next (£234.50)
                      </button>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Schedule;