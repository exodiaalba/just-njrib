import React, { Component } from 'react'

import Tjrib from './tjrib'
export default class seri extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:"The Witcher",
            Img : "https://oblikon.net/wp-content/uploads/poster-the-witcher.jpg",
            N:"The last Kingdom",
            I:"https://upload.wikimedia.org/wikipedia/en/7/75/The_Last_Kingdom_TV_series_titlecard.jpg",
            L:"LA CASA DE PAPLE",
            P:"https://www.leparisien.fr/resizer/gGWX5PWAnML9mKavSb6bu0nLnnc=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/KCQCVRECAAEGVVL3X25XLC7MOA.jpg"
        }
    }
    render() {
        return (
            <div>
                <Tjrib Img={this.state.Img} name={this.state.name} N={this.state.N} I={this.state.I} L={this.state.L} P={this.state.P} />
                
            </div>
        )
    }
}
