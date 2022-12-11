import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './Footer';
import Popup from './pages/popup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cart from './pages/popup';
import {  useNavigate } from "react-router-dom";
const Fetch = () => {

  // const naviagate = useNavigate();
  
//   coursesPage = () => {
//      history.push("/")
//  }
    
   const[posts,setPosts]=useState([]);
   const [isOpen, setIsOpen] = useState(false);


   const handleBtnClick = (e) => {
    setIsOpen((prev) => !prev);
  };
 
  

   useEffect(()=>{
      axios.get('http://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
      .then(response=>{
          console.log(response.data);
          setPosts(response.data);
          })
   })
  return (
    <>
      
      <div className='container my5'>
          <div className='row'>
              {
                posts.map((value)=>{
                  return(
                      <div className='col-4' >
                        <div className="card  text-black" style={{width:"17rem"}}>
                          
                        <img className="card-img-top" src={value.img_url}  alt="Card image cap"></img>
                          <div className="card-body my2">
                            <h2 className="card-title">{value.name}</h2>
                            <h5 className="card-text">Rating:{value.rating}</h5>
                            <h5 className="card-text">price:{value.price}</h5>
                            <p className="card-text">{value.description}</p>
                            <p className="card-text">{value.ve}</p>
                           <Button className="btn btn-success" onClick={handleBtnClick}> Add to Cart</Button>
                          </div>
                        </div>
                      </div>

                    //   <Card style={{ width: '18rem' }}>
                    //   <Card.Img variant="top" src={value.img_url} />
                    //   <Card.Body>
                    //     <Card.Title>{value.name}</Card.Title>
                    //     <Card.Text>
                    //       Some quick example text to build on the card title and make up the
                    //       bulk of the card's content.
                    //     </Card.Text>
                    //     <Button variant="primary">Go somewhere</Button>
                    //   </Card.Body>
                    // </Card>

                      
    
                  )
                })
              }
          </div>



         
     
      </div>

    
    </>
    
  )
}


export default Fetch
