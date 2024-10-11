## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# Services Used

Ideal Postcodes
https://docs.ideal-postcodes.co.uk/docs/api/postcodes

Launch 27 
Website: https://www.launch27.com/
Docs: https://bitbucket.org/awoo23/api-2.0/wiki/Home
CMS: https://smile.launch27.com/admin/bookings







Bookings




# Account View Bookings


Past Bookings
Upcoming


<!-- Once job is confirrmed, then invoice is avilable -->
Invoice


emphasis enviromental stuff











Schedule
- Select Service: Residentual Cleaning, End of tenancy, Ironing
- Pricing Parameters: Rooms
- Extras (don't show: cleaning products, premium booking slot) Adding time to extra
- Estimate hours (recommended - 4) - can't select less hours than what it adds up
- Additional Supplies: Yes/No (cleaning products - max 1/true/false, same with booking slot)
  
  
- Frequency
- CHoose date
- Slots (can't book withing 3days) - multiple per week etc

Hours of cleaning











Extra: Additional Extras

(Cleaning Products, Premium Booking)



Pricing Paramenters: Rooms

Services(pricing parameters - rooms) - Residential Cleaning

Ironing: 





- Rooms: Kitchen

Customers Home Owers or renters: 40avg age, children, busy in the lifes to clean - appriciate time
Maybe dont have time to clean, busy family, elder people - 

















// handleNextStep
// handlePrevStep
// handleCustom Step

// stepComplete

// Initial
// ------------------------
// Location (search in an input and then select from one result)
// Choose Property Type [Residential Property][End of Tennancy][Ironing]

// Rooms
// -------------------------

// Bedrooms
// Bathrooms
// Kitchens
// Reception
// Other Rooms

// Deep Cleaning: yes/no (recommended forfirsttimers)

// Pets: yes/no

// Services
// --------------------------
// Fridges: 1-2
// [1-4/5-8/9-12/13-16] Windows
// 5 Shirt: Ironing (Equivalant of 5 shirts Equivalant of 5shirts)
// Walls per room

// Bring cleaning products: boolean
// [Cleaner will bring (+6)] [I have my own]

// Move in OUt : boolean

// Select time
//----------------------


// Checkout
// -----------------

// Cleaner parking spot
// Private parking spot
// n street   - no parking restrictoin

// i will prove permit
// pay and display (separate charrge)













// Pets/Move in/out - less important

// our cleaners are the best not contractos, other businesses hire cotnractss

// Push Deep Cleaning yes/
// Push Eco yes/no

// pets: boolean
//   Deep Cleaning Boolean
// Move in OUt : boolean

// Fridges:

// windows: 0 - 4, 4 - 8
// ironing: Equivalant of 5 shirts Equivalant of 5shirts
// walls: per room

// How clean is your house:
// Deep cleaning: Upsell the deep cleaning, for the first clean: If its dirty the standard might be bad

// Estimate your work
// This is just estimation: analisis needs to be done
// If less time, refund the money



const servicesData = [

  // {
  //   id: 15,
  //   name: "Premium Time Slot"
  // },


  // {
  //   id: 16, // standarlone 
  //   name: "Do you have pets?"
  // },



  // {
  //   id: 11,
  //   name: "Deep Cleaning"
  // },
  // {
  //   id: 13,
  //   name: "Move In / Move Out",
  // },

  // Higher end of cleaning calss
  // 2 frdiges, two owens is normal
  // High end middle-up, man wife, both working, high/mid end earning

  // Money: Higher end 
  // Work: 

  // Persona---
  // Couple
  // Values time working in career than having to clean the house, doeons' tmin pyaing because its the conviencience rather than doing the clening, she can do socialising rather than cleaning
  // Mum/dad: Above high end earners, maybe investmne banking, have child care, value more their time than mundance tasks, easier for the cleaner becaue its not thre as well


  // Bad customer
  // People on benefits or people who are on min wage or who can't afford it

  // Pages -
  // Blog
  // Careers
  // Policy


  // Mobile Users 80%

  // Avg: Mobile
  // Coporate: Majority Desktop

  // Quantity: 
  // Fridge Cleaning: [5] [4] [3] [2] [1]
  // Owens: [5] [4] [3] [2] [1]
  // Air Frier: [2] [1]
  // Walls Per Room [10] [9] [8] [7] [6] [5] [4] [3] [2] [1]
  // Inside Windowws 1-4 5-8 9-12 13-16


  // Kitchen Cabinets: Per kitchen
  // Ironing: 


  // Walls: Per room
  // Inside windows: 1-4 5-8

  // +-
  {
    id: 1,
    name: "Fridge Cleaning" // 1 = 30minutes; 
  },
  {
    id: 9,
    name: "Oven Cleaning", // 1 = 1hours
  },
  {
    id: 14,
    name: "Kitchen Cabinet Cleaning" // avg 1kitchen cabinets = 1hours
  },
  {
    id: 12,
    name: "Ironing (30min)", // 5 shirt equivalant 
  },

]


// {
//   id: 17,
//   name: "ECO-Friendly Cleaning Products",
// }
>>>>>>> origin/staging
