import React, { Component } from 'react';
import './part4.css'
import part4_logo1 from '../img/part4_logo1.png'
import part4_logo2 from '../img/part4_logo2.png'

class part4 extends Component {
    constructor(props){
        super(props);
            this.state={
                part4_historyvalue:[
                    "捷克斯洛伐克","黑暗深邃幻想","^_^","凸(艹皿艹 )","┌(。Д。)┐","Thanks♪(･ω･)ﾉ","淦淦淦"
                ],
                part4_historyid:[
                "1","2","3","4","5","6"
                ],
                part4_hotvalue:[
                    "捷克斯洛伐克","黑暗深邃幻想","^_^","凸(艹皿艹 )","┌(。Д。)┐","Thanks♪(･ω･)ﾉ","淦淦淦"
                ],
                part4_hotid:[
                "1","2","3","4","5","6"
                ],
            }
    }
    render() { 
        return (  
            <div id="part4">
                <div id="part4_bg">
                    <div className="part4_head">
                        <a className="part4_head_a1">主页</a>
                        <a className="part4_head_a2">个人信息</a>
                        <a className="part4_head_a3">日迹</a>
                        <a className="part4_head_a4">退出</a>
                    </div>
                    <img className="part4_logo1" src={part4_logo1} />
                    <div className="part4_body">
                        <div className="part4_body_top">
                            <div style={{position:"absolute",left:"60px",zIndex:"10"}}>
                                <div className="chooseType" onClick={this.chooseType.bind(this)}>
                                    <input type="text" value="  选择日记类型" className="chooseType_input" readOnly="readonly"/>
                                    <div className="chooseType_div1"></div>
                                    <div className="chooseType_div2"></div>
                                </div>
                                <div className="diary_type">
                                    <ul className="diary_type_ul">
                                        <li>
                                            <p className="diary_type_p">校园</p>
                                        </li>
                                        <li>
                                            <p className="diary_type_p">情感</p>
                                        </li>
                                        <li>
                                            <p className="diary_type_p">旅途</p>
                                        </li>
                                        <li>
                                            <p className="diary_type_p">求职</p>
                                        </li>
                                        <li>
                                            <p className="diary_type_p">美食</p>
                                        </li>
                                        <li>
                                            <p className="diary_type_p">其他</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="part4_body_top_choosepic">上传图片</button>
                        </div>
                        <div className="part4_body_body" style={{zIndex:"1"}}>
                            <textarea className="diary_text" placeholder="    开始日记吧..." type="file"></textarea>
                        </div>
                        <div className="part4_body_bottom">
                            <button className="part4_body_bottom_submit">发布日记</button>
                            <div style={{position:"absolute",left:"490px",top:"408px"}}>
                                <div className="chooseState" onClick={this.chooseState.bind(this)}>
                                    <input type="text" value="  日记权限" className="chooseState_input" readOnly="readonly"/>
                                    <div className="chooseState_div1"></div>
                                    <div className="chooseState_div2"></div>
                                </div>
                                <div className="diary_state">
                                    <ul className="diary_state_ul">
                                        <li>
                                            <p className="diary_state_p">  公开</p>
                                        </li>
                                        <li>
                                            <p className="diary_state_p">  隐私</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part4_right">                       
                        <img className="part4_right_logo1" src={part4_logo2} />
                        <div className="part4_history">
                        <p className="part4_history_p1">我的历史</p>
                            <ul>
                                {
                                    this.state.part4_historyid.map((item, index) => {
                                        return (
                                            <li key={index}>
                                               <p>{index+1}.{this.state.part4_historyvalue[index]}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="part4_hot">
                            <p className="part4_hot_p1">热榜</p>
                            <ul>
                                {
                                    this.state.part4_hotid.map((item, index) => {
                                        return (
                                            <li key={index}>
                                               <p>{index+1}.{this.state.part4_hotvalue[index]}</p>
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
    chooseState(){
        let This=this;
        var chooseState_input = document.querySelector('.chooseState_input');
        var diary_state=document.querySelector('.diary_state');
        var chooseState_div1=document.querySelector('.chooseState_div1');
        var chooseState_div2=document.querySelector('.chooseState_div2');
        var diary_state_p=document.querySelector('.diary_state_p')
        chooseState_input.onfocus=function(){
            diary_state.style.display=('block');
            chooseState_div1.display=('none');
            chooseState_div2.display=('block');
        }
        chooseState_div1.onclick=function(){
            diary_state.style.display=('block');
            chooseState_div1.style.display=('none');
            chooseState_div2.style.display=('block');
        }
        chooseState_div2.onclick=function(){
            diary_state.style.display=('none');
            chooseState_div1.style.display=('block');
            chooseState_div2.style.display=('none');
        }
        var diary_state_ul=document.querySelector('.diary_state_ul');
        var Li=diary_state_ul.getElementsByTagName('li');
        for(var i=0;i<Li.length;i++){
            Li[i].onmouseover = function(){
                this.style.backgroundColor = '#aaaaaa';
            }
            Li[i].onmouseout = function(){
                this.style.backgroundColor = '#ffffff';
            }
            Li[i].onclick = function(){
                chooseState_input.value = this.querySelector('.diary_state_p').innerHTML;
                diary_state.style.display = ('none');
                chooseState_div1.style.display = ('block');
                chooseState_div2.style.display = ('none');
            }
        }
    }
    chooseType(){
        let This=this;
        var chooseType_input = document.querySelector('.chooseType_input');
        var diary_type=document.querySelector('.diary_type');
        var chooseType_div1=document.querySelector('.chooseType_div1');
        var chooseType_div2=document.querySelector('.chooseType_div2');
        var diary_Type_p=document.querySelector('.diary_Type_p')
        chooseType_input.onfocus=function(){
            diary_type.style.display=('block');
            chooseType_div1.style.display=('none');
            chooseType_div2.style.display=('block');
        }
        chooseType_div1.onclick=function(){
            diary_type.style.display=('block');
            chooseType_div1.style.display=('none');
            chooseType_div2.style.display=('block');
        }
        chooseType_div2.onclick=function(){
            diary_type.style.display=('none');
            chooseType_div1.style.display=('block');
            chooseType_div2.style.display=('none');
        }
        var diary_type_ul=document.querySelector('.diary_type_ul');
        var Li=diary_type_ul.getElementsByTagName('li');
        for(var i=0;i<Li.length;i++){
            Li[i].onmouseover = function(){
                this.style.backgroundColor = '#aaaaaa';
            }
            Li[i].onmouseout = function(){
                this.style.backgroundColor = '#ffffff';
            }
            Li[i].onclick = function(){
                chooseType_input.value = this.querySelector('.diary_type_p').innerHTML;
                diary_type.style.display = ('none');
                chooseType_div1.style.display = ('block');
                chooseType_div2.style.display = ('none');
            }
        }
    }
}
 
export default part4;