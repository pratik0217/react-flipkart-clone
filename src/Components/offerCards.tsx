export default function offerCards({offerCardImg}: {offerCardImg: string}) {
  return (
    <div id="offerCard" className="w-full">
      <img className="rounded-2xl w-full h-auto" src={offerCardImg} alt="offerCard" />
    </div>
  )
}
