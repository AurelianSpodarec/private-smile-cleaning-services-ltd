function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className="flex items-center justify-center h-full"
      style={{
        backgroundImage: "url('https://assets.blackandmilk.co.uk/1920x1080/aedb7aacb4/modern-new-build-home-in-hampstead-03.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {children}
    </main>
  )
}

export default ScheduleLayout
