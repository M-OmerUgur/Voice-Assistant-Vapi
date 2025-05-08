import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>Sesli yapay zeka danışmanınız &apos;Atmaca&apos;</h2>
          <p className='text-lg'>Cevap mı arıyorsunuz ? Sormanız yeterli !</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Kullanmaya Başla</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className='max-sm:hidden'/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Geçmiş işlemler</h2>
        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
          
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Soru Sor</h2>
        <div className='interviews-section'>
        {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
          {/* <p>Henüz yapmış olduğunuz bir işlem yok!</p> */}
        </div>
      </section>
    </>
  )
}

export default page