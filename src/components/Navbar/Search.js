import React from 'react';
import { SearchCss } from './SearchCss.css';
import  useStyles  from './styles.js';

 
const Search = () => {
    const  classes = useStyles();

    return(    
        <div className={classes.brandContainer} >
            <input type="text" placeholder="Search..." className=""/>
        </div>
    );
}

export default Search;
