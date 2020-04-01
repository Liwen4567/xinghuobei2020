import React, { Component } from 'react';
import './part5.css'

//记住密码那个我并没有写
//忘记密码这个看要不要，要的话..就还要另外写页面，不要的话直接删了


class part5 extends Component {
    //state = {  }
    render() {
        return (
            <div id='part5'>
                <div class="part5-container" style={{paddingTop:"10px"}}>
                    <div class="login-wrap">
                        <div class="login-html">
                            <input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
                                <label for="tab-1" class="tab" style={{cursor:"pointer"}}>登录</label>
                            <input id="tab-2" type="radio" name="tab" class="sign-up"/>
                                <label for="tab-2" class="tab" style={{cursor:"pointer"}}>注册</label>
                            <div class="login-form">
                                <form id="form1" action="" method="post">
                                    <div class="sign-in-htm">
                                        <div class="group">
                                            <label for="si_usermail" class="label">邮箱</label>
                                            <input id="si_usermail" type="text" class="input" placeholder="请输入邮箱" autocomplete="off" name="email"/>
                                        </div>
                                        <div class="group">
                                            <label for="si_password" class="label">密码</label>
                                            <input id="si_password" type="password" class="input" data-type="password" placeholder="请输入密码" autocomplete="off" name="password"/>
                                        </div>
                                        <div class="group">
                                            <input id="check" type="checkbox" class="check"/>
                                            <label for="check"><span class="icon"></span> 记住密码</label>
                                        </div>
                                        <div class="group">
                                            <input type="button" class="button" id="button_si" value="登录" style={{cursor:"pointer"}}/>
                                        </div>
                                        <div class="hr"></div>
                                        <div class="foot-lnk">
                                            <a href="#forgot">忘记密码？</a>
                                        </div>
                                    </div>
                                </form>
                                <form action="#"  id="form2" method="post">
                                    <div class="sign-up-htm">
                                        <div class="group">
                                            <label for="su_username" class="label">用户名</label>
                                            <input id="su_username" type="text" class="input" placeholder="请输入至少1位的用户名" onBlur={this.checkUserName.bind(this)} oninput={this.checkUserName.bind(this)} autocomplete="off" name="username"/>
                                            <span class="default" id="nameErr"></span>
                                        </div>
                                        <div class="group">
                                            <label for="su_password" class="label">密码</label>
                                            <input id="su_password" type="password" class="input" data-type="password" placeholder="请输入4到8位的密码" onBlur={this.checkPassword.bind(this)} oninput={this.checkPassword.bind(this)} autocomplete="off" name="password1"/>
                                            <span class="default" id="passwordErr"></span>
                                        </div>
                                        <div class="group">
                                            <label for="su_password" class="label">确认密码</label>
                                            <input id="su_conpassword" type="password" class="input" data-type="password" placeholder="请再输入一遍密码" onBlur={this.ConfirmPassword.bind(this)} oninput={this.ConfirmPassword.bind(this)} autocomplete="off" name="password2"/>
                                            <span class="default" id="conPasswordErr"></span>
                                        </div>
                                        <div class="group">
                                            <label for="su_usermail" class="label">邮箱</label>
                                            <input id="su_usermail" type="text" class="input" placeholder="请输入邮箱地址" onBlur={this.checkMail.bind(this)} oninput={this.checkMail.bind(this)} autocomplete="off" name="email"/>
                                            <span class="default" id="emailErr"></span>
                                        </div>
                                        <div class="group">
                                            <input type="button" class="button" id="button_su" value="注册" style={{cursor:"pointer"}} />
                                        </div>
                                        <div class="hr"></div>
                                        <div class="foot-lnk">
                                            <label for="tab-1" style={{cursor:"pointer"}}>已有账户？</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <canvas id="canvas" onLoad={this.canvas.bind(this)}>                      
                    </canvas>
                </div>
            </div>    
        );
    }



    /*javascript*/

    //没有写判断用户名是否被占用..
    //要写的话可以加到下面这个函数，但是需要后台返回的数据做对比.. 我感觉我不太会搞，留在这里看你想什么法子
    //验证用户名

    checkUserName() {
        let This = this
        var su_username = document.getElementById('su_username');
        var errname = document.getElementById('nameErr');
        var pattern = /^\w{1,}$/;  //用户名格式正则表达式：用户名要至少一位，不清楚怎么判断中文
        su_username.oninput = function () {
            if (su_username.value.length == 0) {
                errname.innerHTML = "用户名不能为空"
                errname.className = "error"
                return false;
            }
        
        if (!pattern.test(su_username.value)) {
            errname.innerHTML = "用户名不合规范"
            errname.className = "error"
            return false;
        }
        else {
            errname.innerHTML = "OK"
            errname.className = "success";
            return true;
        }
        }
    }
    //验证密码
    checkPassword() {
        let This = this
        var su_password = document.getElementById('su_password');
        var errPasswd = document.getElementById('passwordErr');
        var pattern = /^\w{4,8}$/; //密码要在4-8位
        if (!pattern.test(su_password.value)) {
            errPasswd.innerHTML = "密码不合规范"
            errPasswd.className = "error"
            return false;
        }
        else {
            errPasswd.innerHTML = "OK"
            errPasswd.className = "success";
            return true;
        }
    }
    //确认密码
    ConfirmPassword() {
        let This = this
        var su_password = document.getElementById('su_password');
        var su_conpassword = document.getElementById('su_conpassword');
        var errConPasswd = document.getElementById('conPasswordErr');
        if ((su_password.value) != (su_conpassword.value) || su_conpassword.value.length == 0) {
            errConPasswd.innerHTML = "上下密码不一致"
            errConPasswd.className = "error"
            return false;
        }
        else {
            errConPasswd.innerHTML = "OK"
            errConPasswd.className = "success";
            return true;
        }
    }
    //验证邮箱地址
    checkMail() {
        let This = this
        var su_usermail = document.getElementById('su_usermail');
        var emailErr = document.getElementById('emailErr');
        var pattern = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;     //验证邮箱地址正则表达式
        if (!pattern.test(su_usermail.value)) {
            emailErr.innerHTML = "邮箱格式不合规范"
            emailErr.className = "error"
            return false;
        }
        else {
            emailErr.innerHTML = "OK"
            emailErr.className = "success";
            return true;
        }
    } 
    //注册   
    signup() {
        let This = this
        var button_su = document.getElementById('button_su');
        button_su.onclick = function () {
        var su_usermail1 = document.getElementById('su_usermail').value;
        var su_password1 = document.getElementById('su_password').value;
        var su_username1 = document.getElementById('su_username').value;
        var su_conpassword1 = document.getElementById('su_conpassword').value;
        var xhr
        if (!su_username1 || su_username1 == "请输入用户名") {
            alert("用户名为空，请输入用户名");
        }
        else if (!su_usermail1 || su_usermail1 == "请输入邮箱") {
            alert("邮箱为空，请输入邮箱");
        }
        else if (!su_password1 || su_password1 == "请输入密码") {
            alert("密码为空，请输入密码");
        }
        else if (!su_conpassword1 || su_conpassword1 != su_password1) {
            alert("两次输入密码不一致，请重新输入");
        }
        else if (su_usermail1!=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/) {
            alert("邮箱格式不符合要求");
        }
        else {
            if(window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            }
            else{
                //xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
                xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var s = xhr.responseText;
                        var jsonObj = eval("(" + s + ")");
                        console.log(jsonObj);
                        if (jsonObj[0].status) {
                            alert("恭喜你注册成功，即将为你转跳登录页面");
                            var signup = document.getElementsByClassName('sign-up-htm');
                            var signin = document.getElementsByClassName('sign-in-htm');
                            signin.style.display = ("block");
                            signup.style.display = ("none");
                            var si_usermail = document.getElementById('si_usermail');
                            si_usermail.value = su_usermail1;
                        } else {
                            alert("未知错误");
                        }
                    } else {
                        alert(xhr.status);
                    }
                }
            };
            //alert(oRegiter_text4);
            xhr.open("GET", "__" + su_username1 + "&userPsw=" + su_password1 + "&userMail=" + su_usermail1, true);
            xhr.send();
        }      
        };
    }//open的地址自己改


    //登录
    signin() {
        let This = this
        /*ismail = function (str) {
            var s = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
            return s.test(str);
        };*/
        var button_si = document.getElementById('button_si');
        button_si.onclick = function () {
            var si_usermail = document.getElementById('si_usermail');
            var si_password = document.getElementById('si_password');
            var mail = si_usermail.value;
            var psw = si_password.value;
            var xhr;
            if (!mail || mail == "请输入邮箱") {
                alert("邮箱为空，请输入邮箱");
            } else if (!psw || psw == "请输入密码") {
                alert("密码为空，请输入密码");
            } else if (/*!ismail(mail)*/mail!=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/) {
                alert("邮箱格式不符合要求");
            } else {
                if (window.XMLHttpRequest) {
                    xhr = new XMLHttpRequest();
                } else {
                    //xhr = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            var s = xhr.responseText;
                            var jsonObj = eval("(" + s + ")");
                            if (jsonObj[0].status) {
                                alert("恭喜你登录成功");
                            } else {
                                alert("邮箱不存在或邮箱密码输入错误");
                            }
                            console.log(jsonObj);
                        } else {
                            alert(xhr.status);
                        }

                    }
                };
                //alert(mail);
                xhr.open("GET", "__" + mail + "&userPsw=" + psw, true);
                xhr.send();
            }
        };
    }//open的地址自己改
    canvas(){
        let This = this
        var num = 250; //星星数
        var star = []; //星星位置
        var canvas = document.querySelector("#canvas");

        //设置画布宽高为浏览器宽高
        var w = canvas.width = window.innerWidth;
        var h = canvas.height = window.innerHeight;

        //获取上下文
        var ctx = canvas.getContext("2d");

        // 创建星星
        for (let i = 0; i < num; i++) {
            star[i] = {
                x: Math.random() * w,
                y: Math.random() * h,
                x0: Math.random() * 0.5 - 0.25,
                y0: Math.random() * 0.5 - 0.25,
            };
            drawStar(star[i].x, star[i].y);
        }

        //绘制星星
        function drawStar(x, y, starSize = 1.5, starColor = "yellow") {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = starColor;
            ctx.arc(x, y, starSize, Math.PI * 2, true);
            ctx.fill();
            ctx.restore();
        };

        // 定时使星星移动
        setInterval(() => {
            move();
        }, 13);

        //星星移动
        function move() {
            ctx.clearRect(0, 0, w, h)
            // 加上长尾效果
            // ctx.fillStyle = 'rgba(0,0,0,0.2)';
            // ctx.fillRect(0, 0, w, h);
            for (let i = 0; i < num; i++) {
                // 当星星到达屏幕边界时, 转换移动方向
                star[i].x0 = star[i].x < 0 || star[i].x > w ? -star[i].x0 : star[i].x0;
                star[i].y0 = star[i].y < 0 || star[i].y > h ? -star[i].y0 : star[i].y0;
                // 使星星移动
                star[i].x += star[i].x0;
                star[i].y += star[i].y0;
                drawStar(star[i].x, star[i].y)
                // 连接相邻的星星
                link(star[i].x, star[i].y)
            }
        };

        // 连接相邻的星星
        function link(centerX, centerY, lineWidth = "0.3", lineColor = "#f5ae1b") {
            for (let i = 0; i < num; i++) {
                // 勾股定理算相邻距离
                var distance = Math.pow(Math.pow((centerX - star[i].x), 2) + Math.pow((centerY - star[i].y), 2), 0.5)
                if (distance < 50) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(centerX, centerY);
                    ctx.lineTo(star[i].x, star[i].y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = lineWidth;
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }


        // 监听鼠标移动事件 添加鼠标位置的星星
        canvas.addEventListener('mousemove', (e) => {
            // 移动后先将上一次push的star删除掉
            star.pop();
            // 增加一个星星
            num = star.push({
                x: e.clientX,
                y: e.clientY,
                x0: 0,
                y0: 0
            })
            // 连接新增的星星与其附近的星星
            link(e.clientX, e.clientY);
        })
            }


}





export default part5;