"use client"

import Link from "next/link"
// import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
// import { supabase } from "@/lib/supabase"

export function Header() {
  // const { user } = useAuth()
  const user = null

  const handleSignOut = async () => {
    // await supabase.auth.signOut()
  }

  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between px-6 sm:px-12">
        <Link href="/" className="text-xl font-bold">
        FractureTrack
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="border-0 hover:border-b-black hover:border-b transition-all" href="/about">About</Link>
          <Link className="border-0 hover:border-b-black hover:border-b transition-all" href="/libraries">Libraries</Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/create-board">
                <Button variant="outline">Create board</Button>
              </Link>
              <Button variant="ghost" onClick={handleSignOut}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

