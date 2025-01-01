'use client'

import { GitHub, Mail, LinkedIn } from '@components/icons'
import Link from '@components/link'
import ThemeSwitcher from '@components/theme-switcher'
import { Button } from '@components/ui/button'

const socialLinks = [
  { icon: GitHub, href: 'https://github.com/wtp43', label: 'GitHub' },
  { icon: LinkedIn, href: 'https://linkedin.com/in/wtp43', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:will.tang@uwaterloo.ca', label: 'Email' },
]

export default function AboutMe() {
  return (
    <div className="space-y-6">
      <div className="pt-0">
        <h1 className="text-5xl font-bold tracking-tight">William Tang</h1>
      </div>
      <p className="text-lg leading-relaxed">
        Software Engineer and part-time pianist.
      </p>
      <div className="flex space-x-3">
        <Button asChild variant="outline" size="icon">
          <ThemeSwitcher className="transition-all hover:bg-muted bg-card border !border-border" />
        </Button>
        {socialLinks.map((social) => (
          <Button
            key={social.label}
            variant="outline"
            size="icon"
            className="transition-all hover:bg-muted bg-card border-border"
            asChild
          >
            <Link href={social.href}>
              <social.icon />
              <span className="sr-only">{social.label}</span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
