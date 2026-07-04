import PaymentImage from '../assets/asset 125.svg'

export default function CopyRight() {
  return (
    <div className='flex justify-between items-center py-1 px-4 bg-gray-900 text-white'>
        <p>© 2007 - 2024 Flipkart.com</p>
        <img src={PaymentImage} alt="Payment Image" />
    </div>
  )
}
