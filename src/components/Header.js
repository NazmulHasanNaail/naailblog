import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {fetchMenu} from "../actions";
import {WP_SITE_TITLE, WP_SITE_DESCRIPTION, WP_SITE_LOGO} from "../constants";

function Header(){

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetchMenu('primary')
            .then( data => setMenu(data))
    }, [])

    return(
        <header className='master-header'>
            <div className='container'>
                <div className='site-branding'>
                    {WP_SITE_LOGO ? <Link to='/' className='Site-logo'><img src={WP_SITE_LOGO[0]}/></Link> : ''}
                    {WP_SITE_TITLE ? <h1 className='site-title'><Link to='/'>{WP_SITE_TITLE}</Link></h1> : ''}
                    {WP_SITE_DESCRIPTION ?  <p>{WP_SITE_DESCRIPTION}</p> : ''}
                </div>
                <div className="navigation">
                    <ul>
                        {menu.map((menuItem, i)=>{

                            if(menuItem.object == 'post'){
                                return <li key={i}  className='menu-item'><Link to={'/archive/'+menuItem.object_id}>{menuItem.title}</Link></li>
                            }
                            if(menuItem.object == 'page'){
                                return <li key={i}  className='menu-item'><Link to={'/'+menuItem.object_id}>{menuItem.title}</Link></li>
                            }
                            if(menuItem.object == 'custom'){
                                return <li key={i}  className='menu-item'><a href={menuItem.url}>{menuItem.title}</a></li>
                            }
                            if(menuItem.object == 'category'){
                                return <li key={i}  className='menu-item'><Link to={'/category/'+menuItem.object_id}>{menuItem.title}</Link></li>
                            }
                        })}
                    </ul>
                </div>
            </div>
        </header>
    )
}
export  default  Header;