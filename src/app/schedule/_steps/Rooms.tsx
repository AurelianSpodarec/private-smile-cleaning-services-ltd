// // pricing parameters

// Per Room
const rooms = [
  {
    id: 6,
    name: "Bedrooms",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-8 h-8"
      viewBox="0 0 640 512"
    >
      <path d="M32 32c17.7 0 32 14.3 32 32v256h224V160c0-17.7 14.3-32 32-32h224c53 0 96 43 96 96v224c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H64v32c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-17.7 14.3-32 32-32zm144 96a80 80 0 110 160 80 80 0 110-160z"></path>
    </svg>
  },
  {
    id: 3,
    name: "Bathrooms",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M64 131.9C64 112.1 80.1 96 99.9 96c9.5 0 18.6 3.8 25.4 10.5l16.2 16.2c-21 38.9-17.4 87.5 10.9 123L151 247c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L345 121c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-1.3 1.3c-35.5-28.3-84.2-31.9-123-10.9l-16.3-16.2C151.8 42.5 126.4 32 99.9 32 44.7 32 0 76.7 0 131.9V448c0 17.7 14.3 32 32 32s32-14.3 32-32V131.9zM256 352a32 32 0 100-64 32 32 0 100 64zm64 64a32 32 0 10-64 0 32 32 0 1064 0zm0-128a32 32 0 100-64 32 32 0 100 64zm64 64a32 32 0 10-64 0 32 32 0 1064 0zm0-128a32 32 0 100-64 32 32 0 100 64zm64 64a32 32 0 10-64 0 32 32 0 1064 0zm32-32a32 32 0 100-64 32 32 0 100 64z"></path>
    </svg>
  },
  {
    id: 4,
    name: "Kitchens",
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
      <path d="M7 4v17M4 4v3a3 3 0 106 0V4M14 8a3 4 0 106 0 3 4 0 10-6 0M17 12v9"></path>
    </svg>
  },
  {
    id: 2,
    name: "Reception / Office / Dining Rooms",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0l267.9 107.1c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32v264c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24H152c-13.3 0-24-10.7-24-24v-56h384v56c0 13.3-10.7 24-24 24zM128 400v-64h384v64H128zm0-96v-80h384v80H128z"></path>
    </svg>
  },
  {
    id: 5,
    name: "Other Rooms",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="w-8 h-8"
      viewBox="0 0 16 16"
    >
      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"></path>
      <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117M11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5M4 1.934V15h6V1.077z"></path>
    </svg>
  }
]

function StepRooms() {
  return (
    <div>
      {rooms.map((item) => {
        return (
          <div>
            {item.name}
          </div>
        )
      })}
    </div>
  );
}

export default StepRooms
