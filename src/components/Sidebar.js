import {useState, useEffect} from 'react';
import {fetchSidebar} from "../actions";


function Sidebar(){

    const [sidebar, setSidebar] = useState('');

    useEffect(()=>{
        fetchSidebar('sidebar-1')
            .then( data => setSidebar(data))
    }, [])

    return(
        <aside>
            <div dangerouslySetInnerHTML={{__html: sidebar.rendered}} />
        </aside>
    )
}

export default Sidebar;