export default function ProductCard({offerCardImg}: {offerCardImg: string}) {
  return (
    <div id="offerCard" className="h-[150px] md:h-[188px] rounded-lg bg-gray-200 flex items-center justify-center w-full shrink-0">
      <img className="rounded p-1 object-contain" src={offerCardImg} alt="offerCard" width={"120px"} height={"150px"}/>
    </div>
  )
}
