import Header from '../Components/layout/Header'
import Footer from '../Components/layout/Footer'
import Navbar from '../Components/layout/Navbar'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';



import { useEffect, useState, useMemo } from 'react';
import { getProducts } from '@/services/products';
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@/Components/ui/combobox';
import { BiHeadphone } from 'react-icons/bi';

function Home() {



  // const catagories = ["All Categories", "Men's Fashion", "Laptops", "Mobiles", "Consumer Electronics", "Televisions", "Watches", "Fashion", "Home Appliances", "Backpacks", "Tablets", "Headphones"];
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
      .then(data => {
        if (data && data.products && data.products.length > 0) {
          setProducts(data.products)
          console.log("All Products (from service):", products);
        } else {
          console.log("No data available to set products");
        }
      })
      .catch(err => console.log("Error fetching products", err))

  }, [])
  const [selectedCategory, setSelectedCategory] = useState("");


  const categories = useMemo(() => {
    if (!products || products.length === 0) return [];

    const map = new Map()
    products.forEach(product => {
      if (product.category) {
        map.set(product.category, product.category);

      } else {
        console.log("Product has no categories:", product);
      }
    })
    console.log("Unique Categories:", Array.from(map.keys()));
    return Array.from(map.values());


  }, [products])

  return (
    <>
      <Navbar />
      <Header />
      {/* Main content */}
      <div className="max-w-7xl mx-auto flex px-4 justify-between border">
        {/* Body Header */}
        <Combobox items={categories} value={selectedCategory} onValueChange={setSelectedCategory} >
          <ComboboxInput placeholder='Please seect a category' showClear />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {categories.map((item, index) => (
                <ComboboxItem key={index} value={item}>
                  {item}
                </ComboboxItem>
              ))}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <ul className="flex gap-6 text-sm ml-2 mt-2">
          <li>Shope</li>
          <li>Brands</li>
          <li>About Us</li>
          <li>TOS</li>
          <li>FAQ</li>
          <li>Buy Theme</li>
        </ul>
        <p className="ml-4 text-sm text-orange-500 mt-2">Free Shipping over $100+</p>
      </div >

      {/* Product card carousal */}
      <Swiper
        style={{ "--swiper-pagination-color": "#1212" }}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Pagination, Pagination]}
        className="mySwiper"

      >

        <SwiperSlide className='my'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className="border-gray-300 border flex max-w-7xl mt-4 gap-16 flex-wrap justify-center mx-auto p-4">
        <div className="">
          <BiHeadphone className=' text-blue-500' />
          <h6>24/7 SUPPORT</h6>
          <p>Support every time</p>
        </div>
        <div className="">
          <h6>Accept Payment</h6>
          <p>Paypal,Visa,Master</p>
        </div>
        <div className="">
          <h6>Secured Payment</h6>
          <p>100% Secure</p>
        </div>
        <div className="">
          <h6>Free Shiping</h6>
          <p>Order over $100</p>
        </div>
        <div className="">
          <h6>30 Days Return</h6>
          <p>Return within 30 days</p>
        </div>
      </div>



      <Footer />
    </>
  )
}

export default Home