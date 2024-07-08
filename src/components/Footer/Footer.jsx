import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-stone-200 border-t-2 flex flex-row border-t-sky-800">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-row align-start">
                            <div>
                                <p className="text-m text-sky-800">
                                    &copy; Copyright 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer