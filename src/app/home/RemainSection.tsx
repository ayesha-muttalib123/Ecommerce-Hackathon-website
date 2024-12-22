 import Image from 'next/image';
const features = [
    {
      image: "/aboutlogo1.png",
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders above $50.",
    },
    {
      image: "/aboutlogo2.png",
      title: "100% Cash Back",
      description: "Guaranteed refunds if not satisfied.",
    },
    {
      image: "/aboutlogo3.png",
      title: "Quality Product",
      description: "We provide high-quality products for all needs.",
    },
    {
      image: "/aboutlogo4.png",
      title: "24/7 Support",
      description: "Contact our team anytime for assistance.",
    },
  ];
export default function RemainSection() {
  return (
    <div className="">
        
{/* Features Section */}
        <section className="py-12 px-6">
          <h3 className="text-center text-2xl font-bold mb-8">What Shopex Offer!</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 shadow-md rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>








      {/* Hero Section */}
      <section className="bg-[#F1F0FF] py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            {/* Left Column: Content */}
            <div className="flex-1 flex justify-center">
              <div className="text-center">
                <Image
                  src="/uniqueFeature.png"
                  alt="B&B Italian Sofa"
                  width={300}
                  height={300}
                  className="object-contain"
                />
                
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                Unique Features Of Latest &<br />
                Trending Products
              </h1>
              <ul className="text-gray-700 mb-6 list-disc list-inside">
                <li>
                  All frames constructed with hardwood solids and laminates.
                </li>
                <li>
                  Reinforced with double wood dowels, glue, screw-nails, corner
                  blocks, and machine nails.
                </li>
                <li>Arms, backs, and seats are structurally reinforced.</li>
              </ul>
             <div className='flex gap-10'>
             <button className="bg-pink-500  text-white p-5 rounded-md hover:bg-pink-600">
                Add To Cart
              </button>
      <div>
      <p className="text-gray-800 font-bold text-xl mt-4">
                  B&B Italian Sofa
                </p>
                <p className="text-pink-500 text-lg">$32.00</p>
      </div>
             </div>
            </div>

            {/* Right Column: Product Image */}
           
          </div>
        </div>
      </section>

        {/* Header Promotions */}
        <section className="grid grid-cols-2 gap-6 px-4 max-w-6xl mx-auto mt-10">
        <div className="bg-pink-100 p-4 text-center rounded-lg">
          <h3 className="font-bold text-lg mb-2">15% off on all products</h3>
         
          <p className='text-pink-600 hover:underline text-left pl-[30%]'>Shop Now</p>
          <Image
            src="/trending6.png"
            alt="Black Chair"
            width={220}
            height={220}
            className="mx-auto mt-4"
          />
          
        </div>
       
        <div className="bg-[#EEEFFB] p-4 text-center rounded-lg">
          <h3 className="font-bold text-lg mb-2">23% off on all products</h3>
         
          <p className='text-pink-600 hover:underline text-left pl-[30%]'>Shop Now</p>
          <Image
            src="/trending7.png"
            alt="Black Chair"
            width={220}
            height={220}
            className="mx-auto mt-4"
          />
          
        </div>
      </section>

    {/* Discount Item */}
<section className="py-10 px-5  text-center lg:text-left lg:pl-[10%]">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
    {/* Text Content */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Discount Item</h2>
      <div className="text-gray-500 mb-6">
        <span className="text-pink-500 font-semibold">Wood Chair</span> ·{' '}
        <span className="text-pink-500 font-semibold">Plastic Chair</span> ·{' '}
        <span className="text-pink-500 font-semibold">Sofa Collection</span>
      </div>
      <div className="text-center lg:text-left ">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">20% Discount Of All Products</h3>
        <p className="text-pink-500 mb-6">Eames Sofa Compact</p>
        <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto lg:mx-0 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          <span className="inline-block mr-2 text-green-500">✔</span> Eu eget feugiat habitasse nec, bibendum condimentum.
          <br />
          <span className="inline-block mr-2 text-green-500">✔</span> Material expose like metals.
          <br />
          <span className="inline-block mr-2 text-green-500">✔</span> Clear lines and geometric figures.
          <br />
          <span className="inline-block mr-2 text-green-500">✔</span> Simple neutral colors.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600">
          Shop Now
        </button>
      </div>
    </div>
    {/* Image Section */}
    <div>
      <Image
        src="/discountitem.png"
        alt="Discount Chair"
        width={700}
        height={600}
        className="mx-auto w-full max-w-md lg:max-w-full"
      />
    </div>
  </div>
</section>


      {/* Top Categories */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-[5%]">
          <span className="px-4 py-2 border-b-4 border-blue-500 ">Top Categories</span>
        </h2>
        <div className="flex justify-center gap-6 px-4 max-w-6xl mx-auto">
          {[
            { name: 'Mini LCW Chair', price: '$42', img: '/top1.png' },
            { name: 'Mini DSW Chair', price: '$38', img: '/top2.png' },
            { name: 'Mini LCW Chair', price: '$42', img: '/top3.png' },
            { name: 'Mini LCW Chair', price: '$45', img: '/top4.png' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col  items-center">
              <div className="w-269 h-345 rounded-full bg-gray-100 flex items-center justify-center shadow-md">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={270}
                  height={350}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-semibold text-gray-700">{item.name}</h3>
              <p className="text-pink-500 font-bold mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Subscribe Section */}
      <section className="bg-gray-200 py-10 text-center relative">
  <div className="absolute inset-0 z-0">
    <Image src={"/final.png"} width={2000} alt="Shop Now Image" layout='responsive' height={500} />
  </div>
  <div className="relative z-10 max-w-4xl mx-auto px-4 mb-10 mt-[10%]">
    <h2 className="text-2xl font-bold mb-4 text-black">Get Latest Update By Subscribe Our Newsletter</h2>
    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 mb-6">
      Shop Now
    </button>
  </div>

  

</section>



{/* Latest Blog */}
<section className="py-10">
  <div className="text-center mb-6">
    <h2 className="text-3xl font-bold">Latest Blog</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
    {[
      {
        title: 'Blog Post 1',
        date: 'Jan 10, 2024',
        image: "/latblog1.png",
        content: 'More off this less hello samlande lied much over tightly circa horse taped mightly'
      },
      {
        title: 'Blog Post 2',
        date: 'Jan 12, 2024',
        image: "/latblog2.png",
        content: 'Top essential Trends in 2021 that could reshape the industry.'
      },
      {
        title: 'Blog Post 3',
        date: 'Jan 14, 2024',
        image: "/latblog3.png",
        content: 'Exploring the impact of new technology on everyday life.'
      },
    ].map((post, index) => (
      <div key={index} className="border p-4 rounded-lg shadow-md">
       
        <Image src={post.image} width={255} height={270} className='w-full mb-5' alt={"Blog post image for ${post.title}"} />
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-600 mt-2">{post.date}</p>
        <p className="text-gray-700 mt-2">{post.content}</p>
        <button className="text-blue-500 mt-4">Read More</button>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}