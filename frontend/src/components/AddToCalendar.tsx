'use client'

import { useState } from 'react'

interface Event {
  title: string
  description: string
  startDate: string // ISO format
  endDate: string // ISO format
  location: string
}

interface AddToCalendarProps {
  event: Event
  buttonClassName?: string
}

export default function AddToCalendar({ event, buttonClassName = "" }: AddToCalendarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const formatDateForGoogle = (date: string) => {
    return new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }

  const formatDateForOutlook = (date: string) => {
    return new Date(date).toISOString()
  }

  const generateGoogleCalendarUrl = () => {
    const startDate = formatDateForGoogle(event.startDate)
    const endDate = formatDateForGoogle(event.endDate)
    
    const params = new URLSearchParams({
      action: 'TEMPLATE',
      text: event.title,
      dates: `${startDate}/${endDate}`,
      details: event.description,
      location: event.location,
      trp: 'false'
    })

    return `https://calendar.google.com/calendar/render?${params.toString()}`
  }

  const generateOutlookUrl = () => {
    const params = new URLSearchParams({
      subject: event.title,
      body: event.description,
      startdt: formatDateForOutlook(event.startDate),
      enddt: formatDateForOutlook(event.endDate),
      location: event.location
    })

    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`
  }

  const generateICSFile = () => {
    const formatICSDate = (date: string) => {
      return new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//BSM//BSM Events//EN',
      'BEGIN:VEVENT',
      `DTSTART:${formatICSDate(event.startDate)}`,
      `DTEND:${formatICSDate(event.endDate)}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      `UID:${Date.now()}@bsm.org.au`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `${event.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`
    link.click()
    URL.revokeObjectURL(link.href)
  }

  const calendarOptions = [
    {
      name: 'Google Calendar',
      icon: '📅',
      action: () => window.open(generateGoogleCalendarUrl(), '_blank')
    },
    {
      name: 'Outlook',
      icon: '📧',
      action: () => window.open(generateOutlookUrl(), '_blank')
    },
    {
      name: 'Apple Calendar / Other',
      icon: '🗓️',
      action: generateICSFile
    }
  ]

  return (
    <div className="relative z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClassName || "bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors flex items-center space-x-2"}
      >
        <span>📅</span>
        <span>Add to Calendar</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[9998]"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border z-[9999] min-w-48 max-w-xs">
            <div className="py-2">
              {calendarOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    option.action()
                    setIsOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-3"
                >
                  <span>{option.icon}</span>
                  <span className="text-sm text-gray-700">{option.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}