import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-top">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <h1 className="font-semibold text-lg">EventUs</h1>
        </Link>
        <p className="text-sm font-thin">2024 Conventus. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer