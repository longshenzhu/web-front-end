import { helloworld, addPreStr } from './helloworld';

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import logo from './images/logo.png';
// import './search.less';


class Search extends React.Component {
    render(){
        return <div class='search-text'>
            Search Text
            <img src={ logo } />
        </div>
    }
}

ReactDom.render(
    <Search />,
    document.getElementById('root')
);

document.writeln(helloworld());
document.writeln(addPreStr("赝品"));