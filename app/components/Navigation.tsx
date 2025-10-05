"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Portfolio
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm hover:text-white/80 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm hover:text-white/80 transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm hover:text-white/80 transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-sm hover:text-white/80 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90">
              Resume
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
