import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6iF0V8qXuNDVmoDlqCOhq2fglsXWTvphow&usqp=CAU"
            alt=""
            className="home_img"
          />

          <div className="home_row">
            <Product 
            id='123'
            title="Satya ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
            price={14.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71S8U9VzLTL._AC_SY200_.jpg"
            />
            <Product
                    id='1234'
                    title="Sham ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                    price={16.96}
                    rating={3}
                    image="https://rukminim1.flixcart.com/image/200/200/xif0q/refrigerator-new/i/r/g/-original-imagmrsabfmqmh5n.jpeg?q=70" />
          </div>

          <div className="home_row">
            <Product 
                    id='12345'
                    title="kalpana ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                    price={15.96}
                    rating={2}
                    image="https://rukminim1.flixcart.com/image/200/200/xif0q/instant-camera/e/2/u/-original-imagk4myz37c3dtx.jpeg?q=70"/>
            <Product 
                    id='123456'
                    title="pooja ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                    price={19.96}
                    rating={1}
                    image="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"/>
            <Product 
                    id='1234567'
                    title="hbk ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
                    price={10.96}
                    rating={3}
                    image="https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70"/>
          </div>

          <div className="home_row">
            <Product         
            id='12345678'
            title="pallavi ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
            price={11.96}
            rating={2}
            image="https://rukminim1.flixcart.com/image/200/200/kfmv9u80/monitor/9/n/v/ha220q-um-ww0si-a01-acer-original-imafwfjq3gzgjvz5.jpeg?q=70"/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
