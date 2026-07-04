interface ServicesBoxsProps {
    img: string;
    heading: string;
}

export default function ServicesBoxs({img, heading}: ServicesBoxsProps) {
  return (
    <div className='flex flex-col items-center shrink-0 min-w-[60px] md:min-w-[80px] cursor-pointer hover:opacity-80 transition-opacity'>
        <img src={img} alt="Services" className='w-10 h-10 md:w-12 md:h-12 object-contain' />
        <p className='text-xs md:text-sm mt-1 text-center'>{heading}</p>            
    </div>
  )
}
