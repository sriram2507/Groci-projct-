import React from 'react';

const fruit = () => {
    return (
        <div>
             <img src='header_bg.png' height={'350px'} width={'1500px'}></img>
             <div className='headertitle'>Fruit's</div>
            <div className='vegtable'>
                <div className='outerbox2'><img src="f1.png" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Strawberry</p>
                <label for="strawberry">Choose Quantity:</label>
                <select name="strawberry" id="strawberry">
                <option value="500g">500g - &#8377;288</option>
                    <option value="250g">250g - &#8377;170</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f2.png" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Pineapple</p>
                <label for="Pineapple">Choose Quantity:</label>
                <select name="Pineapple" id="Pineapple">
                <option value="500g">1 pcs (700 - 800g) - &#8377;80</option>
                    <option value="250g">1 pcs (1000g) - &#8377;100</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f3.jpg" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Apple</p>
                <label for="Apple">Choose Quantity:</label>
                <select name="Apple" id="Apple">
                <option value="500g">4 pcs 500g - &#8377;248</option>
                    <option value="250g">9 pcs 1kg(Aprox) - &#8377;520</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f4.png" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Grapes</p>
                <label for="Grapes">Choose Quantity:</label>
                <select name="Grapes" id="Grapes">
                <option value="1kg">1kg - &#8377;100</option>
                <option value="500g">500g - &#8377;38</option>
                    <option value="250g">250g - &#8377;20</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f8.jpg" height={'300px'} width={'325px'}></img>
                <div className='productdetail'>
                <p>Mango</p>
                <label for="Mango">Choose Quantity:</label>
                <select name="Mango" id="Mango">
                <option value="500g">5 pcs 500g - &#8377;358</option>
                    <option value="250g">10 pcs 1kg(Aprox) - &#8377;659</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f6.png" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>pomegranate</p>
                <label for="pomegranate">Choose Quantity:</label>
                <select name="pomegranate" id="pomegranate">
                <option value="500g">3 to 4 pcs 500g - &#8377;210</option>
                    <option value="250g">7 pcs 1kg(Aprox) - &#8377;430</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f7.jpg" height={'300px'} width={'320px'}></img>
                <div className='productdetail'>
                <p>Orange</p>
                <label for="Orange">Choose Quantity:</label>
                <select name="Orange" id="Orange">
                <option value="500g"> 4 pcs 500g - &#8377;190</option>
                    <option value="250g">9 pcs 1kg(Aprox) - &#8377;330</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f9.png" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Banana</p>
                <label for="Banana">Choose Quantity:</label>
                <select name="Banana" id="Banana">
                <option value="500g"> 500g - &#8377;30</option>
                    <option value="250g">1kg(Aprox) - &#8377;60</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="f10.png" height={'300px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Watermelon</p>
                <label for="Watermelon">Choose Quantity:</label>
                <select name="Watermelon" id="Watermelon">
                <option value="1kg">1 pcs (1 - 1.5kg) - &#8377;93</option>
                    <option value="2kg">1 pcs (2 - 2.5kg) - &#8377;135</option>
                    
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="fruits-basket.jpg" height={'300px'} width={'340px'}></img>
                <div className='productdetail'>
                <p>All Type of fruits available in 1 basket at just <del>&#8377;1599</del> <mark>&#8377;1440</mark></p>
                <br></br>
                <button>Add cart</button>
                </div>
                </div>
            
            </div>
        </div>
    );
};

export default fruit;