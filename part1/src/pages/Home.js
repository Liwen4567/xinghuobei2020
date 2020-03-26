import React, { Component } from 'react';
import './Home.css'
import home_logo1 from '../img/home_logo1.png'
import home_logo2 from '../img/home_logo2.png'
import diary_like1 from '../img/diary_like1.png'
import diary_like2 from '../img/diary_like2.png'
import diary_collect1 from '../img/diary_collect1.png'
import diary_collect2 from '../img/diary_collect2.png'
import userimg from '../img/userimg.jpg'
import home_add from '../img/home_add.png'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            ////////////////////////////
            diary_userimg: [
                userimg, userimg, userimg, userimg, userimg
            ],
            diary_username: [
                "张三", "张三", "张三", "张三", "张三"
            ],
            diary_time: [
                "2020.1.1", "2020.1.1", "2020.1.1", "2020.1.1", "2020.1.1"
            ],
            diary_value: [
                "巴拉巴拉巴拉", "巴拉巴拉巴拉", "巴拉巴拉巴拉", "巴拉巴拉巴拉", "巴拉巴拉巴拉"
            ],
            diary_bgcolor: [
                "#f8ede8", "#c5e4cc", "#e5dcf1", "#a8e2e4", "#ffffff"
            ],
            diary_islike: [
                "false", "false", "false", "ture", "ture"
            ],
            diary_iscollect: [
                "ture", "false", "false", "ture", "ture"
            ],
            diary_id: [
                "1", "2", "3", "4", "5"
            ],
            diary_kind: [
                "校园", "校园", "校园", "校园", "校园"
            ],
            ///////////////////
            home_year: "",
            home_month: "",
            home_day: "",
            home_hour: "",
            home_min: "",
            home_week: "",
            //////////////////
            home_hotvalue: [
                "巴拉巴拉巴拉","巴拉巴拉巴拉","巴拉巴拉巴拉","巴拉巴拉巴拉","巴拉巴拉巴拉","黑暗深邃幻想"
            ],
            home_hotid: [
                "1","2","3","4","5","6"
            ],


        }
    }
    render() {
        return (
            <div id="home">
                <div id="home_bg">
                    <div className="home_head">
                        <a className="home_head_a1">主页</a>
                        <a className="home_head_a2">个人信息</a>
                        <a className="home_head_a3">日迹</a>
                        <a className="home_head_a4">退出</a>
                    </div>
                    <div className="home_choose">
                        <ul>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#b9dcec",
                                    color: "#0000ff"
                                }}
                                onClick={this.homeChoose.bind(this, "全部")}
                            >全部</li>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#cde5f1"
                                }}
                                onClick={this.homeChoose.bind(this, "校园")}
                            >校园</li>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#d5eaf3"
                                }}
                                onClick={this.homeChoose.bind(this, "感情")}
                            >感情</li>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#e1f0f7"
                                }}
                                onClick={this.homeChoose.bind(this, "路途")}
                            >路途</li>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#eff7fb"
                                }}
                                onClick={this.homeChoose.bind(this, "求职")}
                            >求职</li>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#fafcfd"
                                }}
                                onClick={this.homeChoose.bind(this, "美食")}
                            >美食</li>
                            <li
                                className="home_choose_li"
                                style={{
                                    backgroundColor: "#feffff"
                                }}
                                onClick={this.homeChoose.bind(this, "其他")}
                            >其他</li>
                        </ul>
                    </div>
                    <img className="home_logo1" src={home_logo1} />
                    <div className="home_body">
                        <button className="home_search_btn" onClick={this.homeSearch.bind(this)}>搜索</button>
                        <input className="home_search" type="text" onChange={(e) => { this.setState({ search: e.target.value }) }} />
                        <button className="home_refresh" onClick={this.homeRefresh.bind(this)}>刷新</button>
                        <div className="home_ul_hidden">
                            <ul>
                                {
                                    this.state.diary_id.map((item, index) => {
                                        return (
                                            <li key={index}
                                                style={{
                                                    backgroundColor: this.state.diary_bgcolor[index]
                                                }}
                                            >
                                                <div className="home_diary_userimg"
                                                    style={{
                                                        backgroundImage: 'url(' + this.state.diary_userimg[index] + ')'
                                                    }}
                                                ></div>
                                                <p className="home_diary_username">{this.state.diary_username[index]}</p>
                                                <p className="home_diary_time">{this.state.diary_time[index]}</p>
                                                <p className="home_diary_value">{this.state.diary_value[index]}</p>
                                                <img className="home_diary_islike" src={this.state.diary_islike[index] == "ture" ? diary_like2 : diary_like1} onClick={this.homediaryLike.bind(this, index)} />
                                                <img className="home_diary_iscollect" src={this.state.diary_iscollect[index] == "ture" ? diary_collect2 : diary_collect1} onClick={this.homediaryCollect.bind(this, index)} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="home_right">
                        <img className="home_add" src={home_add} />
                        <a className="home_add_a">发布</a>
                        <div className="home_right_div1">
                            <p className="home_time_p1">{this.state.home_day}</p>
                            <p className="home_time_p2">{this.state.home_week}</p>
                        </div>
                        <p className="home_time_p3">{this.state.home_year}/{this.state.home_month}/{this.state.home_day}</p>
                        <p className="home_time_p4">{this.state.home_hour}:{this.state.home_min}</p>
                        <img className="home_right_logo1" src={home_logo2} />
                        <div className="home_hot">
                            <p className="home_hot_p1">热榜</p>
                            <ul>
                                {
                                    this.state.home_hotid.map((item, index) => {
                                        return (
                                            <li key={index}>
                                               <p>{index+1}.{this.state.home_hotvalue[index]}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let This = this
        //////获取当前日期
        let myDate = new Date();
        let week
        if (myDate.getDay() == 0) {
            week = "星期天"
        } else if (myDate.getDay() == 1) {
            week = "星期一"
        } else if (myDate.getDay() == 2) {
            week = "星期二"
        } else if (myDate.getDay() == 3) {
            week = "星期三"
        } else if (myDate.getDay() == 4) {
            week = "星期四"
        } else if (myDate.getDay() == 5) {
            week = "星期五"
        } else if (myDate.getDay() == 6) {
            week = "星期六"
        }
        This.setState({
            home_year: myDate.getFullYear(),
            home_month: myDate.getMonth() + 1,
            home_day: myDate.getDate(),
            home_hour: myDate.getHours(),
            home_min: myDate.getMinutes(),
            home_week: week
        })

    }


    homeChoose(value, e) {
        //根据种类筛选日记
        let This = this
        e.target.parentNode.children[0].style.color = "#02090c"
        e.target.parentNode.children[1].style.color = "#02090c"
        e.target.parentNode.children[2].style.color = "#02090c"
        e.target.parentNode.children[3].style.color = "#02090c"
        e.target.parentNode.children[4].style.color = "#02090c"
        e.target.parentNode.children[5].style.color = "#02090c"
        e.target.parentNode.children[6].style.color = "#02090c"
        e.target.style.color = "#0000ff"
    }

    homeSearch() {
        //搜索日记
        let This = this
        let value = document.querySelector(".home_search").value
        document.querySelector(".home_search").value = ""
    }

    homeRefresh() {
        //刷新页面
        let This = this
    }

    homediaryLike(index, e) {
        //点赞/取消点赞
        let This = this
        if (e.target.src == diary_like2) {
            //取消点赞
            e.target.src = diary_like1
        } else {
            //点赞
            e.target.src = diary_like2
        }
    }

    homediaryCollect(index, e) {
        //收藏/取消收藏
        let This = this
        if (e.target.src == diary_collect2) {
            //取消收藏
            e.target.src = diary_collect1
        } else {
            //收藏
            e.target.src = diary_collect2
        }
    }
}

export default Home;