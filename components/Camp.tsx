import React from 'react'

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Campsite = ({backgroundImage, title, subtitle, peopleJoined}: CampProps) => {
  return (
    <div>
      Camp Site 1
    </div>
  )
}

const Camp = () => {
  return (
    <section className='border-2 border-green-500 2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <Campsite
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='50+ Joined'
        />
        <Campsite />
      </div>

    </section>
  )
}

export default Camp