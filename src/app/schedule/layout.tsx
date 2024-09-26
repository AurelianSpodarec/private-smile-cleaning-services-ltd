function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="flex items-center justify-center h-full"
      style={{
        backgroundImage: "url('https://www.marthastewart.com/thmb/NLI4rM1tiYNOecGZMs0hoqcnhEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-living-rooms-wb-7-f005bbeda775431fa002ce2bd40bacd4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </main>
  )
}

export default ScheduleLayout
