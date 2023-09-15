import React from 'react';

const Dairy = () => {
    return (
        <div>
             <img src='header_bg.png' height={'350px'} width={'1500px'}></img>
             <div className='headertitle'>Dairy Products</div>
                  <div className='vegtable'>
                <div className='outerbox2'><img src="cowmilk.jpg" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Heritage (Golden)</p>
                <label for="milk1">Choose Quantity:</label>
                <select name="milk1" id="milk1">
                <option value="500ml">500ml - &#8377;30</option>
                    <option value="1l">2x500ml - &#8377;58</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>

                <div className='outerbox2'><img src="dbtoned-milk.jpg" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Heritage (Balance)</p>
                <label for="milk2">Choose Quantity:</label>
                <select name="milk2" id="milk2">
                <option value="500ml">500ml - &#8377;35</option>
                    <option value="1l">2x500ml - &#8377;68</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="fullcream-milk.jpg" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Heritage (Happy)</p>
                <label for="milk3">Choose Quantity:</label>
                <select name="milk3" id="milk3">
                <option value="500ml">500ml - &#8377;40</option>
                    <option value="1l">2x500ml - &#8377;82</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="slim-milk.jpg" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Heritage (Wellness)</p>
                <label for="milk4">Choose Quantity:</label>
                <select name="milk4" id="milk4">
                <option value="500ml">500ml - &#8377;28</option>
                    <option value="1\2dozen">2x500ml - &#8377;55</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="cheese.png" height={'300px'} width={'340px'}></img>
                <div className='productdetail'>
                <p>Cheese</p>
                <label for="cheese">Choose Quantity:</label>
                <select name="cheese" id="cheese">
                <option value="5s">5 Slices(100g)- &#8377;80</option>
                    <option value="10s">10 Slices (200g)- &#8377;135</option>
                    <option value="25s">25 Slices (350g)- &#8377;225</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>

                <div className='outerbox2'><img src="Paneer.jpg" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>panner</p>
                <label for="panner">Choose Quantity:</label>
                <select name="panner" id="panner">
                <option value="500g">500g - &#8377;288</option>
                    <option value="250g">250g - &#8377;170</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>

                <div className='outerbox2'><img src="curd.webp" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>curd</p>
                <label for="curd">Choose Quantity:</label>
                <select name="curd" id="curd">
                <option value="200g">200g - &#8377;30</option>
                    <option value="100g">100g - &#8377;15</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default Dairy;