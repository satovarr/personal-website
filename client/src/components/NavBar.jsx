import React, { useState } from 'react'

export default function NavBar() {
    
    const [current, setCurrent] = useState("Home");

    const navigation = [
        { name: "Home", href: "#", current: true },
        { name: "Blog", href: "#blog", current: false },
        { name: "Projects", href: "#", current: false },
        { name: "Skills", href: "#skills", current: false },
    ];

  return (
      <>

          <nav className="px-2 sm:px-4 py-1.5 fixed w-full z-50 top-0 left-0">
              <div className="container flex flex-wrap items-center justify-between ml-1">
                  <div className="flex md:order-2">
                      {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
                      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                          <span className="sr-only">Open main menu</span>
                          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                      </button>
                  </div>
                  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-10 md:mt-0 md:text-lg md:font-normal md:border-0  dark:bg-gray-800 md:dark:bg-black dark:border-gray-700 bg-black">
                          {navigation.map((el, index) => (
                              <li key={index}>
                                  <a href={el.href} className={"block py-2 pl-3 pr-4  rounded md:p-0 " + (current == el.name ? "text-[#8CA085]" : "text-white")} aria-current="page">{el.name}</a>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </nav>

      </>
  )
}
