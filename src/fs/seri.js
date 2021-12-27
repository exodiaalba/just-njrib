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
            P:"https://www.leparisien.fr/resizer/gGWX5PWAnML9mKavSb6bu0nLnnc=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/KCQCVRECAAEGVVL3X25XLC7MOA.jpg",
            v:"vaiking",
            vi:"https://www.journaldugeek.com/content/uploads/2020/05/assassin-creed-valhalla-wallpaper-640x360.jpg",
            j:"John Wick",
            jw:"https://i.egycdn.com/pic/WmFwZndlY21ZRW1Fdk5qbWptRUVjY3dhbUVtbW1wSWFL.jpg",
            ti:"TITANS",
            ta:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_G5bB4ZYH8CbFXii-FRXzxn9h83rw5Yiyw&usqp=CAU",
            sp:"The Amizing Zpider Man",
            ma:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UEk2yVw40nHkbzqP5cAlNhPVzFLn4FWYvQ&usqp=CAU"
        }
    }
    render() {
        return (
            <div>
                <Tjrib sp={this.state.sp} ma={this.state.ma} ti={this.state.ti} ta={this.state.ta} jw={this.state.jw} j={this.state.j} v={this.state.v} vi={this.state.vi} Img={this.state.Img} name={this.state.name} N={this.state.N} I={this.state.I} L={this.state.L} P={this.state.P} />
                
            </div>
        )
    }
}
