
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

function StepExtra() {

  return (
    <div>
      StepExtra
      {
        servicesData.map((item) => {
          return (
            <div>
              {item.name}
            </div>
          )
        })
      }
    </div>
  );
}

export default StepExtra
