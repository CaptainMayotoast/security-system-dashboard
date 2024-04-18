import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from '@material-ui/core';
import {Link} from 'react-router-dom';

export default function DashboardMenuItem(props) {

    // const [name,setName] = useState(0)
    // const setMyName = ()=>{ 
    //     setName(name + 1)
    // }
    // const nameArray = ["John", "Alex", "Shai"]

    // useEffect(()=>{

    //     if(name === nameArray.length) {
    //         setName(0)
    //     }

    // }, [name])

    return (
<div class="square">
          <div class="content">
            <Link to={props.link}>
              <Button
                variant="contained"
                color="primary"
                className="route-btn table-cell"
              >
                {props.name}
              </Button>
            </Link>
          </div>
        </div>
    );
}
