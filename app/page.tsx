'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import bcmsHome from "../bcms-content/home.json";
import { bcms, bcmsStyle } from "../src/bcms-content";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const headphoneRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !headphoneRef.current) return

    const isShortHeight = window.screen.height < 1050

    const mm = gsap.matchMedia()

    mm.add("(min-width: 991px)", () => {
      const headphone = headphoneRef.current
      if (!headphone) return

      // Headphone animations - using scrub: true for smooth continuous animation
      gsap.to(headphone, {
        scrollTrigger: {
          trigger: '#section2',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
        y: '85vh',
        x: '18vw',
        width: '32vw',
        rotate: 90,
        ease: 'power1.inOut',
        immediateRender: false
      })

      gsap.to(headphone, {
        scrollTrigger: {
          trigger: '#section3',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
        y: '218vh',
        x: '0',
        width: '35vw',
        rotate: 35,
        ease: 'power1.inOut',
        immediateRender: false
      })

      gsap.to(headphone, {
        scrollTrigger: {
          trigger: '#section4',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
        y: '308vh',
        width: '42vw',
        rotate: 0,
        ease: 'power1.inOut',
        immediateRender: false
      })

      gsap.to(headphone, {
        scrollTrigger: {
          trigger: '#section5',
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
        y: isShortHeight ? '360vh' : '344vh',
        width: '28vw',
        ease: 'power1.inOut',
        immediateRender: false
      })

      gsap.to(headphone, {
        scrollTrigger: {
          trigger: '#section5',
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: true,
        },
        y: isShortHeight ? '432vh' : '419vh',
        width: '300px',
        ease: 'power1.inOut',
        immediateRender: false
      })

      // Content animations
      gsap.from('#section2 .content-wrapper', {
        scrollTrigger: {
          trigger: '#section2',
          start: '-50% bottom',
          end: 'center center',
          scrub: true,
        },
        y: '140%',
        ease: 'power1.inOut',
      })

      gsap.from('#section3 .heading', {
        scrollTrigger: {
          trigger: '#section3',
          start: 'top bottom',
          end: 'center bottom',
          scrub: true,
        },
        y: '140%',
        ease: 'power1.inOut',
      })

      gsap.from('#section4 img', {
        scrollTrigger: {
          trigger: '#section4',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
        width: 0,
        opacity: 0,
        ease: 'power1.inOut',
      })

      gsap.from('#section6 .content-wrapper', {
        scrollTrigger: {
          trigger: '#section6',
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
        y: '40%',
        duration: 2,
        ease: 'power1.inOut',
      })

      // Hero section text animation (simplified without SplitText)
      const heading = document.querySelector('#section1 .heading')
      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          scale: 0.8,
          y: 50,
          duration: 1.5,
          ease: 'back.out(1.5)',
        })
      }

      // Initial headphone animation
      gsap.from(headphone, {
        opacity: 0,
        scale: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power1.inOut'
      })
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <>
      <Header />
      
      <div className="smooth-scroll">
        <div id="main" className="w-full overflow-hidden">
          <img 
            ref={headphoneRef}
            src={bcms(bcmsHome, "img-audira-headphones", "/images/brown.png")} 
            alt="Audira Headphones" 
            id="headphone" data-bcms-field="img-audira-headphones" data-bcms-kind="image" data-bcms-style="2" style={bcmsStyle(bcmsHome, "img-audira-headphones")}
          />

          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>

        <Section6 />
        <Footer />
      </div>
    </>
  )
}
