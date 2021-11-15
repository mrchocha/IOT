import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import car from '../media/clip.png'
import DistLogo from '../media/dist.png'
import TempLogo from '../media/temp.png'
import '../css/home.css'
import ArrowKeysReact from 'arrow-keys-react';
import submitdata from "./submitData";
import getCarData from './getCarData'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            left: Infinity,
            top: Infinity,
            right: Infinity,
            bottom: Infinity,
            temperature: 0,
            key_pressed: null,
            content: "none"
        }
        ArrowKeysReact.config({
            left: () => {
                this.setState({
                    content: "⬅ "
                });
                submitdata(4);

            },
            right: () => {
                this.setState({
                    content: '➡'
                });
                submitdata(2);
            },
            up: () => {
                this.setState({
                    content: '⬆'
                });
                submitdata(1);
            },
            down: () => {
                this.setState({
                    content: '⬇'
                });
                submitdata(3);
            }
        });
    }
    componentDidMount() {
        document.onkeydown = this.checkKey();
        this.interval = setInterval(async () => {
            const d = await getCarData(this);
            console.log(d);

        }, 100);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    checkKey(e) {
        e = e || window.event;
        console.log(e);
    }

    isDanger(val) {
        if (parseInt(val) < 10) return "danger"
        else return ""
    }


    render() {
        if (!localStorage.getItem("isLogedIn")) {
            return <Redirect to="/login" />
        }

        return (
            <div className="Home"  {...ArrowKeysReact.events} tabIndex="1">
                <div className="car_div">

                    <div className="car_img">
                        <img src={car} alt="" srcset="" />
                    </div>
                </div>

                <div className="top__dict ">

                    <div className={"dist__box " + this.isDanger(this.state.top)}>
                        <span className="dist_logo">
                            <img src={DistLogo} alt="" srcset="" />
                        </span>
                        Top:  {this.state.top} cm
                    </div>
                </div>

                <div className="left__dict ">

                    <div className={"dist__box " + this.isDanger(this.state.left)}>
                        <span className="dist_logo">
                            <img src={DistLogo} alt="" srcset="" />
                        </span>
                        Left: {this.state.left} cm
                    </div>
                </div>

                <div className="right__dict ">

                    <div className={"dist__box " + this.isDanger(this.state.right)}>
                        <span className="dist_logo">
                            <img src={DistLogo} alt="" srcset="" />
                        </span>
                        Right: {this.state.right} cm
                    </div>
                </div>

                <div className="bottom__dict ">

                    <div className={"dist__box " + this.isDanger(this.state.bottom)}>
                        <span className="dist_logo">
                            <img src={DistLogo} alt="" srcset="" />
                        </span>
                        Bottom: {this.state.bottom} cm
                    </div>
                </div>

                <div className="temperature__div">

                    <div className="temp__img">
                        <img src={TempLogo} alt="" srcset="" />
                    </div>
                    <div className="temp_text">
                        {this.state.temperature} C
                    </div>
                </div>
                <div className="key_pressed">
                    Key pressed {this.state.content}
                </div>
            </div >
        )
    }
}
