'use client';

// const a = [
//   {
//     id: "service-type",
//     services: [
//       {
//         "Residential Property": 5,
//         "End of Tenancy": 4,
//         "Ironing": 4
//       }
//     ]
//   }
// ]


// [
//   {
//     id: "service-type",
//     services: [
//       {
//         "Residential Property": 5,
//         "End of Tenancy": 4,
//         "Ironing": 4
//       }
//     ]
//   },
//   {
//     services: [
//       ""
//     ]
//   }
// ]




// BookingCard Component
function BookingCard({ children }) {

  return (
    <article className="overflow-hidden rounded-lg bg-white shadow p-6 px-40">
      <header>
        <h2 className="text-3xl mb-6 font-semibold">Choose a Cleaning Service</h2>
      </header>
      <section>
        {children}
      </section>
    </article>
  );
}

export default BookingCard;
