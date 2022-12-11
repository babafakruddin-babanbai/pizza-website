import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem";
class HomePage extends React.Component
{
    constructor(){
        super()
        this.state = {mdata: []}
    }
    componentDidMount(){
        const url = "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
        fetch(url).then((response) => response.json()).then((data)=> {
            console.log(data);
            this.setState({mdata : data})
        })
        
    }
    render(){
        return (
            <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {this.state.mdata.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.img_url}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
        );
    }
}

export default HomePage