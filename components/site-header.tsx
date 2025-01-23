import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Style Finder AI</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between space-x-2">
          <div className="flex items-center space-x-4">
            <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">
              Sign up
              <LogIn className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

