'use client'

import Button from '@/components/Button'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  const onButtonClick = () => {
    router.back()
  }

  return (
    <main className="p-24 flex min-h-screen flex-col items-center justify-center">
      <div>
        <Image src="/404.svg" alt="404 image" width={298} height={220} priority />
      </div>
      <h1 className="my-2 text-18">This page does not exist!</h1>
      <Button onClick={onButtonClick}>hlavní stránka</Button>
    </main>
  )
}
