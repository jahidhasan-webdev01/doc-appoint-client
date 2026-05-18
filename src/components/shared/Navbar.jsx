"use client"

import { useState } from "react";
import { Button } from "@heroui/react";
import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-40 border-b border-separator bg-background/70 backdrop-blur-lg">
      <nav className="max-w-7xl mx-auto">
        <header className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <Logo />
          </div>
          <ul className="hidden items-center gap-4 md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/appointments">All Appointments</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <div className="flex flex-row gap-2">
            <ThemeToggle />
            <Link href="/register" className="[text-decoration:none]">
              <Button variant="outline" size="sm">Register</Button>
            </Link>
            <Link href="/login" className="[text-decoration:none]">
              <Button size="sm">Login</Button>
            </Link>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/appointments">All Appointments</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;