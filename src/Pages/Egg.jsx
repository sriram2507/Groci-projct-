import React from 'react';

const Egg = () => {
    return (
        <div>
             <img src='header_bg.png' height={'350px'} width={'1500px'}></img>
             <div className='headertitle'>Eggs & Meat</div>
            <div className='vegtable'>
                <div className='outerbox2'><img src="egg.jpg" height={'200px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>White Egg</p>
                <label for="egg">Choose Quantity:</label>
                <select name="egg" id="egg">
                <option value="1dozen">1 Dozen - &#8377;150</option>
                    <option value="1\2dozen">1\2 Dozen - &#8377;80</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>

                <div className='outerbox2'><img src="egg1.jpg" height={'200px'} width={'340px'}></img>
                <div className='productdetail'>
                <p>Brown Egg</p>
                <label for="egg1">Choose Quantity:</label>
                <select name="egg1" id="egg1">
                <option value="1dozen">1 Dozen - &#8377;170</option>
                    <option value="1\2dozen">1\2 Dozen - &#8377;90</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>

                <div className='outerbox2'><img src="chicken.jpeg" height={'200px'} width={'300px'}></img> 
                <div className='productdetail'>
                <p>Whole Chicken Meat</p>
                <p>At Just <del>&#8377;400</del> &#8377;349</p>
                <button>Add cart</button>
                </div>
                </div>
                
                <div className='outerbox2'><img src="chickenbreast.avif" height={'200px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Chicken Breast</p>
                <label for="meat1">Choose Quantity:</label>
                <select name="meat1" id="meat1">
                <option value="1kg">1kg - &#8377;600</option>
                    <option value="500gm">500gm - &#8377;300</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>

                <div className='outerbox2'><img src="legmeat.jpg" height={'200px'} width={'300px'}></img>
                <div className='productdetail'>
                <p>Chicken Leg</p>
                <label for="meat2">Choose Quantity:</label>
                <select name="meat2" id="meat2">
                <option value="10p">10 pieces - &#8377;350</option>
                    <option value="6p">6 pieces - &#8377;230</option>
                    <option value="4p">4 pieces - &#8377;190</option>
                </select><br></br>
                <button>Add cart</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Egg;