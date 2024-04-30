import React from 'react';
import {Link} from 'react-router-dom';
import "./CatCard.scss";
const CatCard = ({item}) => {
  return (
    <Link to="/gigs?cat=design">
    <div className='catCard'>
        <img src={item.img} alt=""/>
        <div className="desc">{item.desc}</div>
        <div className="title">{item.title}</div>
    </div>
    </Link>
    
  )
}
export default CatCard
