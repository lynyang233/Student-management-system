/**
 * 面向对象程序设计：
 * 学生管理系统，蜗牛学院要开发一个学生管理系统，
 * 管理学生的基本信息，学生可以登陆到系统，然后查看自己的信息。
 * 每个学生都有一个唯一的班级，每个班级都有一个老师，
 * 老师可以查看自己班级的学生基本信息，
 * 也可以根据id查询到自己管理的班级某一个学生，
 * 老师也可以给学生换班级。
 *  请用面向对象的思想来实现这个系统。
 * 
 * 项目流程：
    1、先找对象，设计对象的属性和行为
    2、写一个系统类类定义一个函数 来单独组织下面的逻辑。

    项目流程为：
    1、ui主界面 选择老师登陆还是学生登陆（登陆不是老师和学的行为）
    2、老师登陆到系统，可以选择查看所有学生信息、也可以根据输入的id查询到学生信息、根据学生的id给学生换班级。老师也可以添加一个学生（添加的时候需要选择班级目前已经存在的班级）。
    3、学生登陆到系统，可以查看自己的信息。

 */
var prompt = require("prompt-sync")()
    //============================类================================
class School {
    constructor(name, address) {
        this.name = name
        this.address = address
        this.Sgrade = []
        this.teas = []
    }
}

class Student {
    constructor(id, stuGrade, name, sex, tel, pwd) {
        this.id = id
        this.stuGrade = stuGrade
        this.name = name
        this.sex = sex
        this.tel = tel
        this.pwd = pwd
    }
    showOwn() {
        console.info(this.name + "，你好！")
        console.info("你的id是：" + this.id)
        console.info("你的班级是：" + this.stuGrade)
        console.info("你的性别是：" + this.sex)
        console.info("你的电话是：" + this.tel)
        console.info("你的密码是：" + this.pwd)
    }
}
class Grade {
    static allStus = []
    constructor(name, leader) {
        this.name = name
        this.leader = leader
        this.stus = []
    }
    static showAll() {
        for (var i = 0; i < this.allStus.length; i++) {
            console.info("      id:" + this.allStus[i].id + "    班级：" + this.allStus[i].stuGrade + "    姓名：" + this.allStus[i].name + "      性别：" + this.allStus[i].sex + "    电话：" + this.allStus[i].tel)
        }
    }
}

class Teacher {
    constructor(id, name, sex, tel, grade, pwd) {
        this.id = id
        this.name = name
        this.sex = sex
        this.tel = tel
        this.grade = grade
        this.pwd = pwd
    }
    showStus() {
        console.info("==============================  学生信息如下：================================")
        Grade.showAll()
    }
    showById() {
        var inputId = prompt("请输入需要查询的学生id：")
        for (var i = 0; i < Grade.allStus.length; i++) {
            if (inputId == Grade.allStus[i].id) {
                console.info("id为：" + Grade.allStus[i].id + "的学生信息如下：")
                console.info("  班级：" + Grade.allStus[i].stuGrade + "      姓名：" + Grade.allStus[i].name + "      性别：" + Grade.allStus[i].sex + "    电话：" + Grade.allStus[i].tel)
            }
        }
    }
    changeGrade() {
        var inputId = prompt("请输入需要换班的学生id：")
        for (var i = 0; i < Grade.allStus.length; i++) {
            if (inputId == Grade.allStus[i].id) {
                var newStuGrade = prompt("请输入修改后的班级：")
                for (var j = 0; j < woniu.Sgrade.length; j++) {
                    if (newStuGrade == woniu.Sgrade[j].name) {
                        // console.info(Grade.allStus[i].stuGrade)
                        Grade.allStus[i].stuGrade = newStuGrade
                        console.info("该学生已成功换到" + Grade.allStus[i].stuGrade + "班")
                        return
                    }
                }
                console.info("该班级不存在")
            }
        }
    }
    addStu() {
        var addStuId = prompt("请输入新增学生id：")
        var addStuGrade = prompt("请输入新增学生的班级:")
        var addStuName = prompt("请输入新增学生的姓名：")
        var addStuSex = prompt("请输入新增学生的性别：")
        var addStuTel = prompt("请输入新增学生的电话：")
        var addStuPwd = prompt("请输入新增学生的初始密码：")
        for (var i = 0; i < Grade.allStus.length; i++) {
            if (addStuId == Grade.allStus[i].id) {
                console.info("id不可与其他学生重复！")
                return
            }
        }
        for (var i = 0; i < woniu.Sgrade.length; i++) {
            if (parseInt(addStuGrade) > woniu.Sgrade[i].length) {
                console.info('不存在该班级！')
                return
            } else {
                var stu = new Student(addStuId, addStuGrade, addStuName, addStuSex, addStuTel, addStuPwd)
                Grade.allStus.push(stu)
                for (var i = 0; i < woniu.Sgrade.length; i++) {
                    if (addStuGrade == woniu.Sgrade[i].name) {
                        woniu.Sgrade[i].stus.push(stu)
                        console.info("成功添加学生！")
                    }
                }
            }
        }


    }
}
//=============================创建对象并初始化并添加======================
var stu1 = new Student("1", "1", "Angle", "female", "123456789", "000")
var stu2 = new Student("2", "1", "Bruce", "male  ", "987654321", "000")
var stu3 = new Student("3", "1", "Cathy", "female", "234599999", "000")
var stu4 = new Student("4", "2", "David", "male  ", "888888888", "000")
var stu5 = new Student("5", "2", "Fiona", "female", "222222222", "000")
var stu6 = new Student("6", "2", "Gavin", "male  ", "333333333", "000")
var gra1 = new Grade("1", "Emma")
var gra2 = new Grade("2", "Alen")
var tea1 = new Teacher("1", "Emma", "female", "998877665", gra1, "999")
var tea2 = new Teacher("2", "Alen", "male  ", "112233445", gra2, "999")
gra1.stus.push(stu1)
gra1.stus.push(stu2)
gra1.stus.push(stu3)
gra2.stus.push(stu4)
gra2.stus.push(stu5)
gra2.stus.push(stu6)
Grade.allStus.push(stu1)
Grade.allStus.push(stu2)
Grade.allStus.push(stu3)
Grade.allStus.push(stu4)
Grade.allStus.push(stu5)
Grade.allStus.push(stu6)
var woniu = new School("蜗牛学院", "成都")
woniu.Sgrade.push(gra1)
woniu.Sgrade.push(gra2)
woniu.teas.push(tea1);
woniu.teas.push(tea2);
// tea1.showStus()
// tea1.addStu()
// tea1.showById()
// tea1.changeGrade()
// tea1.showStus()
// Grade.allStus[0].showOwn()


(function init() {
    var index = welcome()
    if (index == 1) {
        var indexStu = loginForStu()
        if (indexStu != false) {
            while (true) {
                let boo = stuMain(indexStu)
                if (boo == false) break
            }
        }
    } else if (index == 2) {
        var indexTea = loginForTea()
        if (indexTea != false) {
            while (true) {
                let boo = TeaMain(indexTea)
                if (boo == false) break
            }
        }

    }
})();

function welcome() {
    console.info("==============================欢迎来到蜗牛学院================================")
    console.info("==============================================================================")
    console.info("===============================请按照提示登录=================================")
    console.info("=======================1、学生登录       2、老师登录==========================")
    var choose = prompt("请输入您的选择：")
    return parseInt(choose)
}

function loginForStu() {
    console.info("===================================请先登录===================================")
    var loginId = prompt("请输入您的Id：")
    var loginPwd = prompt("请输入您的密码：")
    for (var i = 0; i < Grade.allStus.length; i++) {
        if (loginId == Grade.allStus[i].id && loginPwd == Grade.allStus[i].pwd) {
            console.info("登录成功！")
            return loginId
        }
    }
    console.info("id或密码错误！")
    return false
}

function stuMain(indexStu) {
    console.info("============================请按照提示选择您的操作============================")
    console.info("=========================1、查询我的信息     2、退出系统======================")
    var choose = prompt("请输入您的选择：")
    switch (parseInt(choose)) {
        case 1:
            macthStu(indexStu);
            break
        case 2:
            return false
        default:
            console.info("请输入正确指令！")
    }
}

function macthStu(indexStu) {
    for (var i = 0; i < Grade.allStus.length; i++) {
        if (indexStu == Grade.allStus[i].id) {
            Grade.allStus[i].showOwn()
            return
        }
    }
}

function loginForTea() {
    console.info("==================================请先登录====================================")
    var loginId = prompt("请输入您的Id：")
    var loginPwd = prompt("请输入您的密码：")
    for (var i = 0; i < woniu.teas.length; i++) {
        if (loginId == woniu.teas[i].id && loginPwd == woniu.teas[i].pwd) {
            console.info("登录成功！")
            return i + 1
        }
    }
    console.info("密码或id有误！")
    return false
}

function TeaMain(indexTea) {
    console.info("==============================================================================")
    console.info("=================== " + woniu.teas[indexTea - 1].name + "老师，您好！请按照提示选择您的操作====================")
    console.info("==============================================================================")
    console.info("1、查看学生信息    2、输入ID查询学生   3、学生换班   4、添加学生   5、退出系统")
    console.info("==============================================================================")
    var choose = prompt("请输入您的操作：")
    switch (parseInt(choose)) {
        case 1:
            woniu.teas[indexTea - 1].showStus();
            break;
        case 2:
            woniu.teas[indexTea - 1].showById();
            break;
        case 3:
            woniu.teas[indexTea - 1].changeGrade();
            break;

        case 4:
            woniu.teas[indexTea - 1].addStu();
            break;

        case 5:
            return false
        default:
            console.info("请输入正确指令！")


    }
}