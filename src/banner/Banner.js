import React from 'react';

class Banner extends React.Component {

    constructor(props){
        super(props);
        this.state = {welldone: false};
    }

    render() {
        if(this.state.welldone === false){
            return <h1>you gotta work</h1>
        }else{
            return <h1>Well Done !</h1>
        }
    }

}

export default Banner;