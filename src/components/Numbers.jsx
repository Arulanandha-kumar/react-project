import { numbers } from "../constants/contents"

const Numbers = () => {
  return (
    <section className='flex flex-row sm:px-16 px-6'>
        <div className="w-full flex flex-row items-center justify-between sm:mb-20 mb-6 mt-3">
        {numbers.map((num) => (
            <div key={num.id} className="flex items-center">
                <h4 className="font-semibold text-[30px] text-white">{num.value}</h4>
                <p className="text-cyan-300 text-[20px]">{num.title}</p>
            </div>
        )) }
        </div>
    </section>
  )
}

export default Numbers