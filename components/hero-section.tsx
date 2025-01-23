"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PinIcon as BrandPinterest, Upload } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  const [boardUrl, setBoardUrl] = useState("")

  return (
    <div className="relative">
      <div className="container flex flex-col items-center justify-center space-y-8 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Find Your Style Inspiration</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Upload your Pinterest board and discover similar fashion items instantly. Powered by AI.
          </p>
        </div>

        <Card className="mx-auto w-full max-w-2xl p-8">
          <div className="flex flex-col items-center gap-6">
            <Button size="lg" className="w-full max-w-sm gap-2" variant="outline">
              <BrandPinterest className="h-5 w-5" />
              Continue with Pinterest
            </Button>
            <div className="flex w-full items-center gap-2">
              <div className="h-px flex-1 bg-muted" />
              <span className="text-xs text-muted-foreground">OR</span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <div className="flex w-full max-w-sm flex-col gap-4">
              <Input
                type="url"
                placeholder="Paste your Pinterest board URL"
                value={boardUrl}
                onChange={(e) => setBoardUrl(e.target.value)}
                className="h-12"
              />
              <Button size="lg" className="gap-2" disabled={!boardUrl}>
                <Upload className="h-5 w-5" />
                Analyze Board
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-8">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      {/* Decorative elements similar to remove.bg */}
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10">
        <svg
          width="200"
          height="300"
          viewBox="0 0 200 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-yellow-400/20"
        >
          <path
            d="M35.5 0C35.5 0 169.5 67.5 199.5 150C229.5 232.5 35.5 300 35.5 300"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  )
}

