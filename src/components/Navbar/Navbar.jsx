import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav>
      
        <Link href="/">Accueil</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}
