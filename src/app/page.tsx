'use client'
import Button from '@/common/components/Button'
import CloseIcon from '@/common/components/CloseIcon'
import Logo from '@/common/components/Logo'

export default function Home() {
  function onClick() {
    window.open('https://edgy.digital/', '_ blank')
  }

  return (
    <main className="p-24 flex min-h-screen flex-col items-center justify-center">
      <h2>This app was created by</h2>
      <Logo />
      <Button intent="primary" size="medium" onClick={onClick}>
        Website
      </Button>
      <CloseIcon color="red" />
    </main>
  )
}
