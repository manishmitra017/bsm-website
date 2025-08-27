'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string // ISO date string
  eventName: string
  eventNameBengali: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate, eventName, eventNameBengali }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isEventStarted, setIsEventStarted] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const eventTime = new Date(targetDate).getTime()
      const difference = eventTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
        setIsEventStarted(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsEventStarted(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (isEventStarted) {
    return (
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-xl text-center">
        <h3 className="text-xl font-bold mb-2">🎉 {eventName} is Here!</h3>
        <p className="text-red-100" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
          {eventNameBengali} শুরু হয়েছে!
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-xl">
      <h3 className="text-xl font-bold mb-2 text-center">🪔 {eventName} Countdown</h3>
      <p className="text-red-100 text-center mb-4" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>
        {eventNameBengali} গণনা
      </p>
      
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs text-red-100">DAYS</div>
          <div className="text-xs text-red-100" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>দিন</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs text-red-100">HOURS</div>
          <div className="text-xs text-red-100" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>ঘন্টা</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs text-red-100">MINUTES</div>
          <div className="text-xs text-red-100" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>মিনিট</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs text-red-100">SECONDS</div>
          <div className="text-xs text-red-100" style={{ fontFamily: 'Noto Sans Bengali, sans-serif' }}>সেকেন্ড</div>
        </div>
      </div>
    </div>
  )
}