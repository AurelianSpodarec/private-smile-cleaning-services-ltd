

const serviceType = [
  {
    id: 5,
    slug: "residential-property",
    name: "Residential Property",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8"
      viewBox="0 0 512 512"
    >
      <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"></path>
      <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"></path>
    </svg>
  },
  {
    id: 5,
    slug: "commercial-property",
    name: "Commercial Property",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8"
      data-slot="icon"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  },
  {
    id: 2,
    slug: "end-of-tenancy",
    name: "End of Tenancy",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8"
      viewBox="0 0 640 512"
    >
      <path d="M256 48c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H381.3c1.8-5 2.7-10.4 2.7-16V253.3c18.6-6.6 32-24.4 32-45.3v-32c0-26.5-21.5-48-48-48H256V48zm315.3 299.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7V432c0 8.8 7.2 16 16 16s16-7.2 16-16V310.6l36.7 36.7c6.2 6.2 16.4 6.2 22.6 0zM0 176c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16v-32zm352 80v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V256h320zm-208 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96z"></path>
    </svg>
  },
  {
    id: 3,
    slug: "ironing",
    name: "Ironing",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-8 h-8"
      viewBox="0 0 24 24"
    >
      <path d="M12 15h.01M9 6h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865A1 1 0 0119.82 18H3a7 7 0 017-7h9.8M9 15h.01M15 15h.01"></path>
    </svg>
  }
]

function StepPropertyType() {
  return (
    <div>
      {serviceType.map((item) => {
        return (
          <button type="button" className="bg-white hover:bg-gray-200 border border-gray-100 p-4 flex items-center justify-between">
            <div className="flex items-center align-center space-x-4">
              <span className="h-6 w-6">{item.icon}</span>
              <span>{item.name}</span>
            </div>
            <svg className="w-4 h-4" viewBox="0 0 320 512">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
            </svg>
          </button>
        )
      })}
    </div>
  );
}

export default StepPropertyType
