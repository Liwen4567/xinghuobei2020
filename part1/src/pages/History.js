import React, { Component } from 'react';
import './History.css'
import userimg from '../img/userimg.jpg'
import home_logo1 from '../img/home_logo1.png'
import home_logo2 from '../img/home_logo2.png'
import diary_like1 from '../img/diary_like1.png'
import diary_like2 from '../img/diary_like2.png'
import diary_collect1 from '../img/diary_collect1.png'
import diary_collect2 from '../img/diary_collect2.png'


var a = 0;///用于记录当前为收藏还是历史，1为收藏，0为历史

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //////////////////////
            username: "张三",
            userimg: userimg,
            tag: "123",
            /////////////////////
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
        }
    }
    render() {
        return (
            <div id="history">
                <div id="history_bg">
                    <div className="history_head">
                        <a className="history_head_a1">主页</a>
                        <a className="history_head_a2">个人信息</a>
                        <a className="history_head_a3">日迹</a>
                        <a className="history_head_a4">退出</a>
                    </div>
                    <div className="history_personmessage">
                        <div className="history_userimg"
                            style={{
                                backgroundImage: 'url(' + this.state.userimg + ')'
                            }}
                        ></div>
                        <p className="history_username">{this.state.username}</p>
                        <p className="history_usertag">个性标签:{this.state.tag}</p>
                        <button className="history_mycollect" onClick={this.myCollect.bind(this)}>我的收藏</button>
                        <button className="history_write"></button>
                        <img src={home_logo1} />
                    </div>
                    <div className="history_choose">
                        <ul>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#b9dcec",
                                    color: "#0000ff"
                                }}
                                onClick={this.historyChoose.bind(this, "全部")}
                            >全部</li>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#cde5f1"
                                }}
                                onClick={this.historyChoose.bind(this, "校园")}
                            >校园</li>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#d5eaf3"
                                }}
                                onClick={this.historyChoose.bind(this, "感情")}
                            >感情</li>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#e1f0f7"
                                }}
                                onClick={this.historyChoose.bind(this, "路途")}
                            >路途</li>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#eff7fb"
                                }}
                                onClick={this.historyChoose.bind(this, "求职")}
                            >求职</li>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#fafcfd"
                                }}
                                onClick={this.historyChoose.bind(this, "美食")}
                            >美食</li>
                            <li
                                className="history_choose_li"
                                style={{
                                    backgroundColor: "#feffff"
                                }}
                                onClick={this.historyChoose.bind(this, "其他")}
                            >其他</li>
                        </ul>
                    </div>
                    <div className="history_body">
                        <div className="history_ul_hidden">
                            <ul>
                                {
                                    this.state.diary_id.map((item, index) => {
                                        return (
                                            <li key={index}
                                                style={{
                                                    backgroundColor: this.state.diary_bgcolor[index]
                                                }}
                                            >
                                                <div className="history_diary_userimg"
                                                    style={{
                                                        backgroundImage: 'url(' + this.state.diary_userimg[index] + ')'
                                                    }}
                                                ></div>
                                                <p className="history_diary_username">{this.state.diary_username[index]}</p>
                                                <p className="history_diary_time">{this.state.diary_time[index]}</p>
                                                <p className="history_diary_value">{this.state.diary_value[index]}</p>
                                                <img className="history_diary_islike" src={this.state.diary_islike[index] == "ture" ? diary_like2 : diary_like1} onClick={this.historydiaryLike.bind(this, index)} />
                                                <img className="history_diary_iscollect" src={this.state.diary_iscollect[index] == "ture" ? diary_collect2 : diary_collect1} onClick={this.historydiaryCollect.bind(this, index)} />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <img className="history_logo" src={home_logo2} />
                </div>
            </div>
        );
    }

    historyChoose(value, e) {
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

    historydiaryLike(index, e) {
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

    historydiaryCollect(index, e) {
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

    myCollect(e){
        ///////////////////////切换收藏与历史
        let This = this
        if(a == 0){
            e.target.style.background = "#2996fe"
            a = 1
        }else if(a == 1){
            e.target.style.background = "transparent"
            a = 0
        }
    }
}

export default History;