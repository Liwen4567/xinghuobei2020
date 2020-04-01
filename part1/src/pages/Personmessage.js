import React, { Component } from 'react';
import './Personmessage.css'
import userimg from '../img/userimg.jpg'
import personmessage_logo1 from '../img/personmessage_logo1.png'
import userphoto1 from '../img/userphoto1.png'
import userphoto2 from '../img/userphoto2.png'
import userphoto3 from '../img/userphoto3.png'



class Personmessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /////////////////////////
            userimg: userimg,
            sex: "",
            likenum: "",
            username: "admin",
            tag: "",
            qq: "",
            tel: "",
            birthdata: "",
            registdata: "",
            message: "",
            e_mail: "",
            userphoto: [
                userphoto1, userphoto2, userphoto3
            ],
            //////////////////////////
            oldpsw: "",
            newpsw1: "",
            newpsw2: "",

        }
    }
    render() {
        return (
            <div id="personmessage">
                <div id="personmessage_bg">
                    <div className="personmessage_head">
                        <a className="personmessage_head_a1">主页</a>
                        <a className="personmessage_head_a2">个人信息</a>
                        <a className="personmessage_head_a3">日迹</a>
                        <a className="personmessage_head_a4">退出</a>
                    </div>
                    <div id="personmessage_message">
                        <div className="personmessage_userimg"
                            style={{
                                backgroundImage: 'url(' + this.state.userimg + ')'
                            }}
                        ></div>
                        <p className="personmessage_p1">性别：{this.state.sex}</p>
                        <p className="personmessage_p2">累计获赞数：{this.state.likenum}</p>
                        <p className="personmessage_p3">{this.state.username}</p>
                        <p className="personmessage_p4">QQ：{this.state.qq}</p>
                        <p className="personmessage_p5">Tel：{this.state.tel}</p>
                        <p className="personmessage_p6">个性标签：{this.state.tag}</p>
                        <p className="personmessage_p7">出生日期：{this.state.birthdata}</p>
                        <p className="personmessage_p8">注册日期：{this.state.registdata}</p>
                        <button className="personmessage_changrmessage" onClick={this.personmessagechangeOut.bind(this)}>修改个人信息</button>
                        <button className="personmessage_quit">退出登录</button>
                        <button className="personmessage_cancel">注销</button>
                        <button className="personmessage_changepsw" onClick={this.changepswOut.bind(this)}>修改密码</button>
                        <img src={personmessage_logo1} />
                        <textarea type="text" value={"自我描述:" + " \n " + this.state.message} readOnly></textarea>
                        <button className="personmessage_changecolor">修改主题颜色</button>
                    </div>
                    <div id="personmessage_photo">
                        {
                            this.state.userphoto.map((item, index) => {
                                return (
                                    <div className={"personmessage_photo" + index} key={index}
                                        style={{
                                            backgroundImage: 'url(' + this.state.userphoto[index] + ')' 
                                        }}
                                    ></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id="changepsw">
                    <div className="changepsw_body">
                        <p className="changepsw_body_p1">请输入原密码:</p>
                        <input className="changepsw_body_input1" type="password" value={this.state.oldpsw} onChange={this.changeInput1.bind(this)} />
                        <p className="changepsw_body_p2">请输入新密码:</p>
                        <input className="changepsw_body_input2" type="password" value={this.state.newpsw1} onChange={this.changeInput2.bind(this)} />
                        <p className="changepsw_body_p3">请再次输入新密码:</p>
                        <input className="changepsw_body_input3" type="password" value={this.state.newpsw2} onChange={this.changeInput3.bind(this)} />
                        <button className="changepsw_body_btn1" onClick={this.changePsw.bind(this)}>确定</button>
                        <button className="changepsw_body_btn2" onClick={this.changepswBack.bind(this)}>返回</button>
                    </div>
                </div>
                <div id="personmessage_change">
                    <div className="personmessage_change_body">
                        <p className="personmessage_change_body_p1">性别：</p>
                        <input className="personmessage_change_body_input1_a" type="radio" name="sex" onChange={this.personmessageChange1.bind(this)} value="男" />   男
                        <br />
                        <input className="personmessage_change_body_input1_b" type="radio" name="sex" onChange={this.personmessageChange1.bind(this)} value="女" />   女
                        <p className="personmessage_change_body_p2">用户名：</p>
                        <input className="personmessage_change_body_input2" type="text" value={this.state.username} onChange={this.personmessageChange2.bind(this)} />
                        <p className="personmessage_change_body_p3">个性标签：</p>
                        <input className="personmessage_change_body_input3" type="text" value={this.state.tag} onChange={this.personmessageChange3.bind(this)} />
                        <p className="personmessage_change_body_p4">QQ：</p>
                        <input className="personmessage_change_body_input4" type="text" value={this.state.qq} onChange={this.personmessageChange4.bind(this)}/>
                        <p className="personmessage_change_body_p5">出生日期：</p>
                        <input className="personmessage_change_body_input5" type="text" value={this.state.birthdata} onChange={this.personmessageChange5.bind(this)} />
                        <p className="personmessage_change_body_p6">注册时间：</p>
                        <input className="personmessage_change_body_input6" type="text" value={this.state.registdata} onChange={this.personmessageChange6.bind(this)} />
                        <p className="personmessage_change_body_p7">电话：</p>
                        <input className="personmessage_change_body_input7" type="text" value={this.state.tel} onChange={this.personmessageChange7.bind(this)} />
                        <p className="personmessage_change_body_p8">邮箱：</p>
                        <input className="personmessage_change_body_input8" type="text" value={this.state.e_mail} onChange={this.personmessageChange8.bind(this)} />
                        <p className="personmessage_change_body_p9">自我描述：</p>
                        <textarea className="personmessage_change_body_input9" type="text" value={this.state.message} onChange={this.personmessageChange9.bind(this)} />
                        <button className="personmessage_change_body_btn1" onClick={this.personmessagechangeBack.bind(this)}>返回</button>
                        <button className="personmessage_change_body_btn2" onClick={this.personmessageChange.bind(this)}>确定</button>
                    </div>
                </div>
            </div>
        );
    }
    
    homewordBack() {
        document.querySelector("#Homeword_bg").style.display = "none"
    }

    changepswBack() {
        document.querySelector("#changepsw").style.display = "none"
    }
    changepswOut() {
        document.querySelector("#changepsw").style.display = "block"
    }
    changeInput1(e) {
        this.setState({
            oldpsw: e.target.value
        })
    }
    changeInput2(e) {
        this.setState({
            newpsw1: e.target.value
        })
    }
    changeInput3(e) {
        this.setState({
            newpsw2: e.target.value
        })
    }



    personmessagechangeBack() {
        document.querySelector("#personmessage_change").style.display = "none"
    }
    personmessagechangeOut() {
        document.querySelector("#personmessage_change").style.display = "block"
    }


    personmessageChange1(e) {
        this.setState({
            sex: e.target.value
        })
    }
    personmessageChange2(e) {
        this.setState({
            username: e.target.value
        })
    }
    personmessageChange3(e) {
        this.setState({
            tag: e.target.value
        })
    }
    personmessageChange4(e) {
        this.setState({
            qq: e.target.value
        })
    }
    personmessageChange5(e) {
        this.setState({
            birthdata: e.target.value
        })
    }
    personmessageChange6(e) {
        this.setState({
            registdata: e.target.value
        })
    }
    personmessageChange7(e) {
        this.setState({
            tel: e.target.value
        })
    }
    personmessageChange8(e) {
        this.setState({
            e_mail: e.target.value
        })
    }
    personmessageChange9(e) {
        this.setState({
            message: e.target.value
        })
    }
    

    componentDidMount() {
        let This = this

        //照片墙轮换
        let Length = This.state.userphoto.length
        let i = 0
        let photoes = document.querySelector("#personmessage_photo").childNodes
        try {
            clearInterval(time)
        } catch{

        }
        let time = setInterval(() => {
            if (i >= Length) {
                i = 0
            }
            photoes[i].style.opacity = 0
            if (i >= Length - 1) {
                i = -1
            }
            photoes[i + 1].style.opacity = 1
            i++

        }, 4000)
    }

    changePsw() {
        //////////////修改密码
        let This = this
        if (This.state.newpsw1 != This.state.newpsw2) {
            alert("两次输入密码不一致。请重新输入")
            This.setState({
                newpsw2: ""
            })
        } else if (This.state.newpsw1 == "" || This.state.newpsw2 == "" || This.state.oldpsw == "") {
            alert("密码不能为空")
        } else {
            // axios.post("user/updatePassword", {
            //     newpw: This.state.newpsw1,
            //     oldpw: This.state.oldpsw1
            // }).then(function (response) {
            //     console.log(response.data)
            //     if (response.data.code == 200) {
            //         alert("修改成功")
            //         document.querySelector("#changepsw").style.display = "none"
            //     } else {
            //         alert("修改失败")
            //     }
            // }).catch(function (error) {
            //     console.log(error)
            //     alert("修改失败！！！  原密码错误或服务器异常")
            // })
        }

    }


    personmessageChange() {
        /////////////////////修改个人信息
        let This = this
        //console.log(this.state.sex)
        // axios.post("/user/updateUser", {
        //     "birthday": this.state.birthday,
        //     "jointime": this.state.jointime,
        //     "mail": this.state.e_mail,
        //     "major": this.state.major,
        //     "phone": this.state.tel,
        //     "platform": this.state.platform,
        //     "prjHistory": this.state.prjHistory,
        //     "qq": this.state.qq,
        //     "realname": this.state.realname,
        //     "school": this.state.school,
        //     "sex": this.state.sex,
        //     "skills": this.state.skill,
        //     "title": this.state.title,
        //     "unam": this.state.username,
        //     "upath": this.state.userimg,
        //     "weibo": this.state.weibo
        // })
        //     .then(function (response) {
        //         console.log(response.data)
        //         if(response.data.code == 200){
        //             alert("修改成功")
        //             document.querySelector("#personmessage_change").style.display = "none"
        //         }else{
        //             alert(response.data.code)
        //         }
                
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //         alert("修改失败！！！  未找到用户信息或服务器异常，请刷新页面重试")
        //     })
    }

}

export default Personmessage;


// //import axios form 'axios'

// axios.get("这里填地址?参数1=sss&参数2=ssss")
//     .then(function(response){
//         请求成功就执行这里面的东西
//     }).catch(function(error){
//         请求失败就执行这里面的东西
//     })


// axios.post("这里填地址",{
//     参数1: adaaw,
//     参数2: sadad
// })
//     .then(function(response){
//         请求成功就执行这里面的东西
//     }).catch(function(error){
//         请求失败就执行这里面的东西
//     })
