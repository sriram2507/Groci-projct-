import React from 'react';
import Time from "./timer"
const Home = () => {
    return (
        <main>
        <div>
            <img src="Banner-1.jpg" className='pdts'></img>
            <span className='pdts-description'><b>100% Organic</b></span>
            <span className='pdts-descriptions'>Fresh & Natural Vegitables</span>
           
            
            <button className='shop-now'>Shop Now !</button>
            <div className='of'>Our Features</div>
            <div className='featurealign'>
            <div className='outerbox'><img src="vegtablebag.jpg" className='deliveryimg' width={'350px'} height={'400px'}></img><p>Combo Offer</p></div>
            <div className='outerbox'><img src="paymentpic.jpg" className='deliveryimg' width={'350px'} height={'400px'}></img><p>Easy Payment</p></div>
            <div className='outerbox'><img src="delivery.jpg" className='deliveryimg' width={'350px'} height={'400px'}></img><p>Free Delivery</p></div>
            </div>

        </div>
        <div className='offer'>Our Offers</div>
        <p className='offertime'>Limited Offer End's With In  <Time/></p>
        <div className='offercontent'>
            <div className='outerbox1'><img src="basket-full-vegetables.jpg" width={'450px'} height={'300px'}></img><div className='offertitle'>Vegtables Combo</div><p className='offersubcnt'>All type of vegetables available at <b> 10% </b> Save.</p></div>
            <div className='outerbox1'><img src="fruits-basket.jpg" width={'450px'} height={'300px'}></img><div className='offertitle'>Fruits Combo</div><p className='offersubcnt'>All type of fruits available at <b> 10% </b> Save.</p></div>
            <div className='outerbox1'><img src="dairy.jpg" width={'450px'} height={'300px'}></img><div className='offertitle'>Dairy Products </div><p className='offersubcnt'>All type of Dairy Products available at <b> 20% </b> Save.</p></div>
            <div className='outerbox1'><img src="goldoil.jpg" width={'375px'} height={'300px'}></img><div className='offertitle'>5L + 1L</div><p className='offersubcnt'>Buy 5L oil + 1L oil free available at just <b>&#8377; 899 </b>.</p></div>
            <div className='outerbox1'><img src="hen-egg.jpg" width={'450px'} height={'300px'}></img><div className='offertitle'>Eggs</div><p className='offersubcnt'>1 Dozne Egg available at just<b>&#8377; 150  </b>.</p></div>
            <div className='outerbox1'><img src="chips.jpeg" width={'450px'} height={'300px'}></img><div className='offertitle'> 1 + 1 offer</div><p className='offersubcnt'> Buy pepsi and get free chips.</p></div>
        </div>
        </main>
    );
};

export default Home;