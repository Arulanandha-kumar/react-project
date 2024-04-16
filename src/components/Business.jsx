import { features } from "../constants/contents"
// import star from '../assets/images/Star.svg';
// import shield from '../assets/images/Shield Done.svg';
// import send from '../assets/images/Send.svg';

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:px-16 sm:py-6">
        <div className="flex flex-col">
            <h2 className="text-white font-semibold text-[40px] w-full mb-2">You do the business,<br className="hidden sm:block"/> we'll handle the money.</h2>
            <p className="text-white text-[20px] w-full">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className='bg-slate-300 w-[150px] p-3 mt-3 rounded-[10px]'>Get started</button>
        </div>
        <div className="flex flex-col">
            {features.map((feature,index) => (
                <div className={`p-3 mb-3 rounded-[20px] ${index === features.length-2 ? 'bg-slate-800': 'mb-0'}`}>
                    <img src={feature.icon} alt=""/>
                    <h4 className="text-white font-semibold mb-2">{ feature.title}</h4>
                    <p className="text-slate-300 leading-[20px]">{ feature.content }</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Business