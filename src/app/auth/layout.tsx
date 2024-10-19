function LayoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div classNameName="h-full w-full">
      {/* {children} */}
      <section
        className="py-10 bg-gray-50 overflow-hidden"
        x-data="{ activeSlide: 1 }"
      >
        <div className="container mx-auto px-4">
          <div className="p-10 bg-white rounded-3xl">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="py-12 md:max-w-md mx-auto">
                  <div className="flex flex-wrap items-center justify-between -m-2 mb-24">
                    <div className="w-auto p-2">
                      <img src="zanrly-assets/logos/zanrly-logo-xl.svg" alt="" />
                    </div>
                    <div className="w-auto p-2">
                      <a
                        className="text-blue-500 hover:text-blue-600 font-bold"
                        href="#"
                      >
                        Create your account
                      </a>
                    </div>
                  </div>
                  <div className="mb-10">
                    <h3 className="font-heading mb-3 text-3xl text-black font-black tracking-tight">
                      Sign In to Zanrly
                    </h3>
                    <p className="text-gray-500 font-bold">
                      Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
                      tempor to the condim entum.
                    </p>
                  </div>
                  <form>
                    <div className="flex flex-wrap -m-3">
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-500 font-bold"
                          htmlFor="signInLightReverseInput4-1"
                        >
                          Email Address
                        </label>
                        <input
                          className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none border border-gray-200 focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="signInLightReverseInput4-1"
                          type="email"
                          placeholder="Enter email address"
                        />
                      </div>
                      <div className="w-full p-3">
                        <label
                          className="block mb-2 text-sm text-gray-500 font-bold"
                          htmlFor="signInLightReverseInput4-2"
                        >
                          Password
                        </label>
                        <input
                          className="appearance-none px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 placeholder-gray-500 outline-none border border-gray-200 focus:ring-4 focus:ring-blue-200 rounded-full"
                          id="signInLightReverseInput4-2"
                          type="password"
                          placeholder="*************"
                        />
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap items-center justify-between -m-3">
                          <div className="w-auto p-3">
                            <div className="flex items-center">
                              <input
                                className="opacity-0 absolute h-6 w-6"
                                id="signInLightReverseCheckbox4-1"
                                type="checkbox"
                              />
                              <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 mr-4 text-transparent bg-gray-100 border border-gray-200 border-neutral-200 rounded-md">
                                <svg
                                  width={9}
                                  height={7}
                                  viewBox="0 0 9 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.603516 3.77075L2.68685 5.85409L7.89518 0.645752"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                              <label
                                className="text-gray-500 font-bold"
                                htmlFor="signInLightReverseCheckbox4-1"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="w-auto p-3">
                            <a
                              className="text-blue-500 hover:text-blue-600 font-bold"
                              href="#"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <a
                              className="block px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                              href="#"
                            >
                              Sign In
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <a
                              className="flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
                              href="#"
                            >
                              <img
                                className="mr-2.5"
                                src="zanrly-assets/images/sign-in/google-play.svg"
                                alt=""
                              />
                              <span className="text-lg text-gray-900 text-center font-bold">
                                Sign in with Google
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-3">
                        <div className="flex flex-wrap md:justify-end -m-2">
                          <div className="w-full p-2">
                            <a
                              className="flex items-center justify-center px-8 py-3.5 bg-white hover:bg-gray-50 focus:ring-4 focus:ring-blue-200 rounded-full"
                              href="#"
                            >
                              <img
                                className="mr-2.5"
                                src="zanrly-assets/images/sign-in/twitter.svg"
                                alt=""
                              />
                              <span className="text-lg text-gray-900 text-center font-bold">
                                Sign in with Twitter
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <div
                  className="flex flex-col justify-end py-16 px-8 text-center h-full rounded-3xl"
                  style={{
                    backgroundImage:
                      'url("https://c8.alamy.com/comp/2G53HNK/trees-and-water-at-bushy-park-east-molesay-london-uk-2G53HNK.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  <div className="md:max-w-md mx-auto">
                    <div className="overflow-hidden">
                      <div
                        className="whitespace-nowrap transition-transform duration-500 ease-in-out"
                        style={{ transform: "translateX(-0%)" }}
                      >
                        <div className="inline-block w-full whitespace-normal">
                          <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                            Pure enjoyment with Zanrly
                          </h3>
                          <p className="mb-9 text-blue-100 font-bold">
                            Lorem ipsum dolor sit amet, to the con adipiscing.
                            Volutpat tempor to the condim entum.
                          </p>
                        </div>
                        <div className="visibility-item inline-block w-full whitespace-normal">
                          <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                            Lorem ipsum dolor sit amet
                          </h3>
                          <p className="mb-9 text-blue-100 font-bold">
                            Lorem ipsum dolor sit amet, to the con adipiscing.
                            Volutpat tempor to the condim entum.
                          </p>
                        </div>
                        <div className="visibility-item inline-block w-full whitespace-normal">
                          <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                            Adipisicing elit non at
                          </h3>
                          <p className="mb-9 text-blue-100 font-bold">
                            Lorem ipsum dolor sit amet, to the con adipiscing.
                            Volutpat tempor to the condim entum.
                          </p>
                        </div>
                        <div className="visibility-item inline-block w-full whitespace-normal">
                          <h3 className="font-heading mb-3 text-3xl text-white font-black tracking-tight">
                            Fugit vitae libero recusandae
                          </h3>
                          <p className="mb-9 text-blue-100 font-bold">
                            Lorem ipsum dolor sit amet, to the con adipiscing.
                            Volutpat tempor to the condim entum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LayoutAuth
