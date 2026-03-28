import Logo from '../components/Logo'

export default function HomePage() {
  return (
    <div className="mx-auto flex flex-grow flex-col items-center justify-between gap-6">
      <div className="hero-wrap bg-card-blur mt-4 w-full">
        <div className="hero-content">
          <h2 className="font-header text-primary mb-2 font-bold">
            <Logo size="text-2xl sm:text-4xl md:text-6xl" />
          </h2>
          <p className="text-secondary text-md md:text-2xl">
            hardware + software engineer, portland or
          </p>
        </div>
      </div>
    </div>
  )
}
