"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from 'lucide-react'

const MENU_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/apply", label: "Apply" },
  { href: "/jobs", label: "Jobs" },
  { href: "/result", label: "Result" },
  { 
    href: "#", 
    label: "Courses", 
    subItems: {
      coreCourses: [
        { href: "/courses/programming-fundamentals", label: "Programming Fundamentals" },
        { href: "/courses/web2-using-nextjs", label: "Web2 Using NextJS" },
        { href: "/courses/earn-as-you-learn", label: "Earn as You Learn" },
      ],
      advancedCourses: [
        { href: "/courses/web3-and-metaverse", label: "Web 3 and Metaverse" },
        { href: "/courses/cloud-native-computing", label: "Cloud-Native Computing" },
        { href: "/courses/ai-and-deep-learning", label: "Artificial Intelligence (AI) and Deep Learning" },
        { href: "/courses/ambient-computing-and-iot", label: "Ambient Computing and IoT" },
        { href: "/courses/genomics-and-bioinformatics", label: "Genomics and Bioinformatics" },
        { href: "/courses/network-programmability-and-automation", label: "Network Programmability and Automation" },
      ]
    }
  },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
  }, [isMobileMenuOpen])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#004477] px-4 lg:px-14">
      <div className="container flex h-20 items-center  gap-8">
        <div className="flex items-center gap-8">
          <div className="relative z-20 mt-20">
            <Image
              src="/logo-giaic.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-120"
            />
          </div>
          <h1 className="text_shadow hidden text-[10px] font-extrabold text-[#b9d8f3] lg:block lg:text-sm xl:text-base">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <li key={item.href} className="relative">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-white hover:text-white/90"
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute right-0 mt-2 w-64 rounded-md bg-white py-2 shadow-lg">
                        <div>
                          <h3 className="px-4 py-2 font-semibold text-gray-900">Core Courses</h3>
                          <ul>
                            {item.subItems.coreCourses.map((subItem) => (
                              <li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-2">
                          <h3 className="px-4 py-2 font-semibold text-gray-900">Advanced Courses</h3>
                          <ul>
                            {item.subItems.advancedCourses.map((subItem) => (
                              <li key={subItem.href}>
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-white hover:text-white/90"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-white p-2 focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#004477] z-50 overflow-y-auto lg:hidden">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-10 w-10" />
            </button>
          </div>
          <nav className="px-4 py-8">
            <ul className="space-y-4">
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={item.href}
                  className="animate-slide-in"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex w-full items-center justify-between py-4 text-2xl font-medium text-white transition-colors hover:text-white/90"
                      >
                        {item.label}
                        <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="mt-2 space-y-2 pl-4">
                          <div>
                            <h3 className="py-2 font-semibold text-white">Core Courses</h3>
                            <ul className="space-y-2">
                              {item.subItems.coreCourses.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-2 text-xl text-white/90 transition-colors hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="py-2 font-semibold text-white">Advanced Courses</h3>
                            <ul className="space-y-2">
                              {item.subItems.advancedCourses.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-2 text-xl text-white/90 transition-colors hover:text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 text-2xl font-medium text-white transition-colors hover:text-white/90"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

