import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDna} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Link = styled.div`
        margin:auto;
        position:sticky;
    .dna{
        color:palevioletred;
        rotate:90deg;
        animation: color-change 7s ease-in infinite;
        width:2rem;
    }
    @keyframes color-change{
        14%{
            color:crimson;
        }
        28%{
            color:coral;
        }
        42%{
            color:goldenrod;
        }
        56%{
            color:seagreen;
        }
        70%{
            color:steelblue;
        }
        84%{
            color:#4c00b5;
        }
        100%{
            color:mediumorchid;
        }
    }
`;

const element = <FontAwesomeIcon icon={faDna} />

const DNA = (props) => {
    return (
    <Link>
        <FontAwesomeIcon className="dna" icon={faDna}/>
    </Link>
    )
  }
  
  export default DNA
