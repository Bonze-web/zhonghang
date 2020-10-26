let that = null;
class myApp {
    constructor() {
       
        this.winWidth = document.body.clientWidth||document.documentElement.clientWidth||window.innerWidth;
        this.winHeight = document.body.clientHeight||document.documentElement.clientHeight||window.innerHeight;
        this.page_num = 1;  //页码
        this.page_all = 14;  //总页码
        this.minTimePot =  this.winHeight/(this.winHeight*this.page_all);
        this.allTimeLine = new TimelineMax({paused : true});    //设置总的时间轴
        this.oneTimeLine = new TimelineMax();    //设置第一个画面的时间轴
        this.twoTimeLine = new TimelineMax({delay :0});
        this.threeTimeLine = new TimelineMax({delay : this.minTimePot});
        this.fourTimeLine = new TimelineMax({delay : this.minTimePot*2});
        this.fiveTimeLine = new TimelineMax({delay : this.minTimePot*3});
        this.sixTimeLine = new TimelineMax({delay : this.minTimePot*4});
        this.sevenTimeLine = new TimelineMax({delay : this.minTimePot*5});
        this.eightTimeLine = new TimelineMax({delay : this.minTimePot*6});
        this.nineTimeLine = new TimelineMax({delay : this.minTimePot*7});
        this.tenTimeLine = new TimelineMax({delay : this.minTimePot*8});
        this.elevenTimeLine = new TimelineMax({delay : this.minTimePot*9});
        this.allTimeLine.add([this.oneTimeLine,this.twoTimeLine,this.threeTimeLine,this.fourTimeLine,this.fiveTimeLine,this.sixTimeLine,this.sevenTimeLine,this.eightTimeLine,this.nineTimeLine,this.tenTimeLine, this.elevenTimeLine],0)
        this.alloy = null;
        that  = this;
        this.init();
    }
    init() {
        this.loaderFn();
        this.scrollAuto();
        this.adaptation();
        this.animated();
    }
    //加载页的函数
    loaderFn() {
        var manifest = [  
            'img/p10_bg.jpg',  
            'img/p1_bg1.jpg',  
            'img/p1_bg2.jpg',  
            'img/p2_bg1.jpg',  
            'img/p2_bg_1448.jpg',  
            'img/p5_bg.jpg',  
            'img/p5_bg2.jpg',  
            'img/p6_bg.jpg',  
            'img/p6_bg1.jpg',  
            'img/p7_bg.jpg',  
            'img/p8_bg.jpg',  
            'img/p9_bg.jpg',  
            'img/1984.png',  
            'img/close.png',  
            'img/fire1.png',  
            'img/fire2.png',  
            'img/fire3.png',  
            'img/fire4.png',  
            'img/fire5.png',  
            'img/fire6.png',  
            'img/fire7.png',  
            'img/fog_begin.png',  
            'img/fog_over.png',  
            'img/hand2.png',  
            'img/loading_cloud1.png',  
            'img/p10_1.png',  
            'img/p10_2.png',  
            'img/p10_btn.png',  
            'img/p10_font.png',  
            'img/p10_p3.png',  
            'img/p1_1.png',  
            'img/p1_2.png',  
            'img/p1_3.png',  
            'img/p1_4.png',  
            'img/p1_5.png',  
            'img/p1_6.png',  
            'img/p1_7.png',  
            'img/p1_cloud.png',  
            'img/p1_fire1.png',  
            'img/p1_fire2.png',  
            'img/p1_fire3.png',  
            'img/p1_font1.png',  
            'img/p1_font2.png',  
            'img/p1_tips.png',  
            'img/p2_2.png',  
            'img/p2_body.png',  
            'img/p2_box.png',  
            'img/p2_font.png',  
            'img/p2_left.png',  
            'img/p2_right.png',  
            'img/p5_1.png',  
            'img/p5_10.png',  
            'img/p5_11.png',  
            'img/p5_2.png',  
            'img/p5_4.png',  
            'img/p5_5.png',  
            'img/p5_6.png',  
            'img/p5_7.png',  
            'img/p5_8.png',  
            'img/p5_9.png',  
            'img/p5_change.png',  
            'img/p5_change1.png',  
            'img/p5_font.png',  
            'img/p6_1.png',  
            'img/p6_2.png',  
            'img/p6_4.png',  
            'img/p6_5.png',  
            'img/p6_6.png',  
            'img/p6_7.png',  
            'img/p6_8.png',  
            'img/p6_change.png',  
            'img/p6_change1.png',  
            'img/p6_font.png',  
            'img/p7_1.png',  
            'img/p7_2.png',  
            'img/p7_5.png',  
            'img/p7_6.png',  
            'img/p7_9.png',  
            'img/p7_change.png',  
            'img/p7_font.png',  
            'img/p8_1.png',  
            'img/p8_2.png',  
            'img/p8_font.png',  
            'img/p9_1.png',  
            'img/p9_2.png',  
            'img/p9_font.png',  
            'img/window1.png',  
            'img/window2.png',    
        ];  
        let my_sum = 2;
        const loader = PIXI.Loader.shared;
            loader
            .add(manifest)
            .load(function(){  
                my_sum = 2;
                $(".page-load").hide();
                $(".page-one").show(100);
                that.onePage();
            });
        
            loader.onProgress.add(function(res,rej){
                // console.log(res.progress,rej);  第一个是进度,第二个是图片信息
                $("#stage .progress span").text(Math.round(res.progress) + "%");
                if((res.progress/100)>=(my_sum/7)) {
                    $("#stage .marroon .fire img").attr("src",`./img/fire${my_sum}.png`);
                    my_sum++;
                }
            })
    }
    onePage() {

        TweenMax.fromTo($(".timepiece"),1,{
            ease: Power0.easeNone,      //动画不间断的动
            x : 600,
           rotationZ : 180,
        },{
            x : 0,
            rotationZ : 0,
        })
        $(".red-banner").addClass("red-bannerAni");
        TweenMax.to($(".one-content .bowling"),1,{
            ease: Power0.easeNone,      //动画不间断的动
            scale : 0.8,
            repeat : -1,
            yoyo : true,
        })
        $(".one-content .bowling").click(function(){
            $(this).addClass("dn");
           TweenMax.to($(".one-content .minute"),0.5,{
                ease: Power0.easeNone,      //动画不间断的动
                css : {rotationZ : 49+360}, //可以直接写属性,也可以写css
                repeat : 3,
            })
            TweenMax.to($(".one-content .hour"),1,{
                ease: Power0.easeNone,      //动画不间断的动
                css : {rotationZ : 225}, //可以直接写属性,也可以写css
                repeat : 1,
                onComplete() {
                    TweenMax.to($(".one-content .pendulum"),0.3,{
                        ease: Power0.easeNone,      
                        transformOrigin : "50% 0%",
                        rotationZ : 0,
                        repeat : 0,
                        onComplete() {
                            fireworks();
                        }
                    })
                }
            })
            TweenMax.to($(".one-content .pendulum"),1,{
                ease: Power0.easeNone,      //动画不间断的动
                transformOrigin : "50% 0%",
                rotationZ : -30,
                onComplete() {
                    TweenMax.to($(".one-content .pendulum"),1,{
                        ease: Power0.easeNone,      
                        transformOrigin : "50% 0%",
                        rotationZ : 28,
                        repeat : -1,
                        yoyo : true,
                    })
                }
            })
        })
        function fireworks() {
            $(".one-bg").css({
                "background" : "url(../img/p1_bg2.jpg) no-repeat",
                " background-size" : "100% 100%",
            });
            $(".one-cloud").addClass("dn");
            let redBannerUp = TweenMax.fromTo($(".red-banner .p1_font1"),0.5,{
               opacity : 1
            },{
                opacity : 0,
                onComplete() {

                    $(".red-banner .p1_font1").addClass("dn");
                    $(".red-banner .p1_font2").removeClass("dn");
                    TweenMax.fromTo($(".red-banner .p1_font2"),0.5,{
                        opacity : 0
                    },{
                        opacity : 1,
                        onComplete() {
                            $(".red-banner .pull-down").removeClass("dn");
                            $(".red-banner .pull-down .p1_7").addClass("pullDown");
                        }
                    })
                }
            })
            //放烟花
            //先将烟花放在固定的位置,进行dn,同时显示出来,不过是透明度为0,然后定时先显示这些烟花透明度为1,并且启动动画,先出现,再放大,再消失
            //先3,2,1
            $(".fireworks-box .fireworks3").removeClass("dn").css({opacity:0,zIndex : 0});
            $(".fireworks-box .fireworks2").removeClass("dn").css({opacity:0,zIndex : 0});
            $(".fireworks-box .fireworks1").removeClass("dn").css({opacity:0,zIndex : 0});
            TweenMax.delayedCall(0,()=>{
                $(".fireworks-box .fireworks3").addClass("fireworksAni");
            })
            TweenMax.delayedCall(1,()=>{
                $(".fireworks-box .fireworks2").addClass("fireworksAni");
            })
            TweenMax.delayedCall(2,()=>{
                $(".fireworks-box .fireworks1").addClass("fireworksAni");
            })
            TweenMax.delayedCall(3,()=>{
                $(".page-two .p2_2").removeClass("dn");
                that.alloyTouch({
                    page_num : 1,
                });
            })
            
        }
    }
    alloyTouch(){
        that.alloy = new AlloyTouch({
            touch:"#stage",//反馈触摸的dom
            vertical: true,//不必需，默认是true代表监听竖直方向touch
            min: -that.winHeight*that.page_num, //不必需,运动属性的最小值
            max: 0, //不必需,滚动属性的最大值
            sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
            factor: 1,//不必需,表示触摸位移运动位移与被运动属性映射关系，默认值是1
            moveFactor: 1,//不必需,表示touchmove位移与被运动属性映射关系，默认值是1
            bindSelf: false,
            maxSpeed: 1, //不必需，触摸反馈的最大速度限制 
            value: 0,
            inertia: false, //惯性运动
            bindSelf : true,
            change:function(value){ 
                let myprogress = -value/(that.winHeight*that.page_all);
                myprogress = myprogress>that.page_num/that.page_all ? that.page_num/that.page_all : myprogress;
                console.log(value);
                myprogress = myprogress<0 ? 0 : myprogress;
                myprogress = myprogress>1 ? 1 : myprogress;
                that.allTimeLine.tweenTo(Math.abs(myprogress));  //将总进度与滚动联系起来
            }, 
            touchStart : function(){
                if($(".pull-down").hasClass("dn")) return false;
                $(".pull-down").addClass("dn");
                if(!$(".page-three").hasClass("dn")) return false;
                $(".page-three").removeClass("dn");
            }
        })
    }
    animated() {
        //第一页动画
        let oneAni = TweenMax.to($(".red-banner"),that.winHeight/(that.winHeight*that.page_all),{y : 300, opacity : 0});
        let threeAni = TweenMax.to($(".page-one .one-bg"),that.winHeight/(that.winHeight*that.page_all),{opacity : 0});
        that.oneTimeLine.add(oneAni,0); 
        //黑夜背景变化
        that.oneTimeLine.add(threeAni,0);

        //第二页的动画
        let fourAni = TweenMax.to($(".page-two"),that.winHeight/(that.winHeight*that.page_all),{scale : 1});
        let fiveAni = TweenMax.fromTo($(".page-two .p2_2"),that.winHeight/(that.winHeight*that.page_all),{opacity : 0},{opacity : 1});
        let sixAni = TweenMax.fromTo($(".page-two .page-two-bg"),that.winHeight/(that.winHeight*that.page_all),{opacity : 0},{opacity : 1});
        let sevenAni = TweenMax.to($(".page-three"),that.winHeight/(that.winHeight*that.page_all),{opacity : 1});
        that.twoTimeLine.add(fourAni,0);
        that.twoTimeLine.add(fiveAni,0);
        that.twoTimeLine.add(sixAni,0);
        that.twoTimeLine.add(sevenAni,0);
        that.twoTimeLine.to($(".page-two"),0,{
            transformOrigin : `${100/7.5}vw ${300/7.5}vw`,
        },"originChange-=0.01");
        that.twoTimeLine.to($(".page-one"),0,{
            display : "none",
        },"originChange-=0.01")
        that.twoTimeLine.addCallback(function(){
            $(".page-three .three_p1_tips").removeClass("dn");
            TweenMax.to($(".page-three .three_p1_tips"),1,{
                ease: Power0.easeNone,      //动画不间断
                scale : 0.8,
                repeat : -1,
                yoyo : true,
            })
        },that.winHeight/(that.winHeight*that.page_all))
        .addLabel("originChange");

        let nineAin = TweenMax.to($(".page-two"),that.winHeight/(that.winHeight*that.page_all),{
            ease: Power0.easeNone,     
            scale : 4,
            transformOrigin : `${100/7.5}vw ${300/7.5}vw`,
        }
        );
        that.threeTimeLine.add(nineAin,0);
        $(".page-three .three_p1_tips").click(function(){
            $(this).hide();
            that.autoplay(10,2);
        });

        //显示出楼梯
        that.fourTimeLine.add(TweenMax.fromTo($(".page4-page5-box"),that.minTimePot,{display : "none",opacity: 0,scale : 1.45,transformOrigin:"0 50%"},{display : "block" , opacity : 1,scale : 1}));
        that.fourTimeLine.add(TweenMax.to($(".page-two"),that.winHeight/(that.winHeight*that.page_all),{
            ease: Power0.easeNone,     
            scale : 1,
            transformOrigin : `${100/7.5}vw ${300/7.5}vw`,
        }
        ),0);
        that.fourTimeLine.add(TweenMax.fromTo($(".page-six"),0,{display: "none"},{display : "block"}),0);
        //下一楼
        that.fiveTimeLine.add(TweenMax.to($(".page4-page5-box"),that.minTimePot,{y : -that.stairs()}),0);
        that.fiveTimeLine.add(TweenMax.to($(".page-two"),that.minTimePot,{y : -that.stairs()}),0);
        //费翔
        
        that.fiveTimeLine.add(TweenMax.to($(".page-six"),that.minTimePot,{y : -that.stairs()}),0);
        that.sixTimeLine.add(TweenMax.to($(".page4-page5-box"),that.minTimePot*0.2,{opacity : 0,scale : 1.45,transformOrigin:"50% 75%"}),0);
        that.sevenTimeLine.add(TweenMax.to($(".page-seven-box"),0,{overflow : "visible",rotationZ : 0}),0);
        //在费翔页面0.8完成的动画
        that.sevenTimeLine.add(TweenMax.to($(".page-seven-box"),that.minTimePot*0.8,{top : 0,left : 0}),0);
        that.sevenTimeLine.add(TweenMax.to($(".page-seven-box .page-seven"),that.minTimePot*0.8,{scale :1,left :0, top :0,marginTop : 0}),0);
        that.sevenTimeLine.add(TweenMax.to($(".page-six"),that.minTimePot*0.8,{scale :1}),0);
        that.sevenTimeLine.add(TweenMax.to($(".page-six .page-six-bg"),that.minTimePot*0.1,{opacity : 0}),0).addLabel("six-bg");
        that.sevenTimeLine.add(TweenMax.to($(".page-six .p5_1"),that.minTimePot*0.1,{opacity : 0}),0);
        that.sevenTimeLine.add([TweenMax.to($(".page-six-bg")),TweenMax.to($(".page-six-bg")),TweenMax.to($(".page4-page5-box"))],0,{display : "none"},"six-bg+=0.01");
        that.sevenTimeLine.add(TweenMax.fromTo($(".photograph"),that.minTimePot*0.2,{display : "none",left : `${-100}%`},{display : "block",left : `${0}%`}),that.minTimePot*0.8);
        that.eightTimeLine.add(TweenMax.fromTo($(".white-light-box"),0,{display : "none"},{display : "block"}),0).addLabel("white-light-time");
        that.eightTimeLine.add(TweenMax.fromTo($(".white-light-begin"),that.minTimePot*0.2,{display : "none",opacity : 0,scale : 0.1},{display : "block",opacity : 1,scale : 1}),0);
        that.eightTimeLine.add(TweenMax.fromTo($(".white-light"),that.minTimePot*0.8,{display : "none",scale : 1},{display : "block",scale : 5}),that.minTimePot*0.2);
        that.eightTimeLine.add(TweenMax.fromTo($(".page-six"),that.minTimePot*0.2,{opacity : 1},{display : "none", opacity : 0}),that.minTimePot*0.8);
        that.eightTimeLine.add(TweenMax.to($(".photograph"),that.minTimePot*0.2,{display : "none",opacity : 0}),that.minTimePot*0.8);
        //设置白布隐藏
        that.nineTimeLine.add(TweenMax.to($(".white-light-begin"),that.minTimePot*0.2,{display : "none",opacity : 0,scale : 0.1}),0);
        that.nineTimeLine.add(TweenMax.to($(".white-light"),that.minTimePot*0.3,{display : "none",scale : 1,opacity : 0}),0);
        //让赵丽蓉页面显示
        that.nineTimeLine.add(TweenMax.fromTo($(".source"),that.minTimePot*0.3,{display : "none",opacity : 0},{display : "block",opacity : 1}),0);
        that.nineTimeLine.add(TweenMax.fromTo($(".movie"),that.minTimePot*0.4,{display : "none",opacity : 0},{display : "block",opacity : 1}),that.minTimePot*0.3);
        that.nineTimeLine.add(TweenMax.to($(".red-banner"),that.minTimePot*0.3,{y : 0, opacity : 1}),that.minTimePot*0.7);
        //手机
        that.tenTimeLine.add(TweenMax.fromTo($(".source .cellular-phone"),that.minTimePot*0.2,{y : 300, opacity : 0},{ y : 0,opacity : 1}),0);
        that.tenTimeLine.add(TweenMax.to($(".source .cellular-phone .p6_change1"),that.minTimePot*0.1,{ opacity : 0}),that.minTimePot*0.2);
        that.tenTimeLine.add([TweenMax.to($(".source .cellular-phone"),that.minTimePot*0.2,{y : -that.winHeight/4,x : -that.winWidth/4 }),TweenMax.to($(".source .cellular-phone"),that.minTimePot*0.2,{y : -that.winHeight*2/4, x : that.winWidth*3/4}),TweenMax.to($(".source .cellular-phone"),that.minTimePot*0.2,{y : -that.winHeight*3/4,  x : -that.winWidth/4}),TweenMax.to($(".source .cellular-phone"),that.minTimePot*0.2,{y : -that.winHeight*5/4,  x : that.winWidth*3/4})],that.minTimePot*0.3,"sequence",0);
        //让页面进行消失,下一个页面进行显示

        that.tenTimeLine.add(TweenMax.to($(".source .p8_1"),that.minTimePot*0.7,{opacity : 1, scale : 1}),that.minTimePot*0.3);
        that.tenTimeLine.add(TweenMax.fromTo($(".yesterday"),that.minTimePot*0.4,{display : "none",opacity : 0},{display : "block",opacity : 1}),that.minTimePot*0.6);
        that.tenTimeLine.add(TweenMax.to($(".source"),that.minTimePot*0.4,{display : "none",opacity : 0}),that.minTimePot*0.6);
        
        that.tenTimeLine.add(TweenMax.to($(".red-banner"),that.minTimePot*0.4,{ y : 300,display : "none"}),that.minTimePot*0.6);

        //小崔页面
        this.elevenTimeLine.add(TweenMax.to($(".conversation .p7_2"),that.minTimePot*0.1,{ rotationZ : "15deg"}),0);
        this.elevenTimeLine.add(TweenMax.fromTo($(".standard"),that.minTimePot*0.2,{ y : 400},{y : 0}),that.minTimePot*0.1);
        this.elevenTimeLine.add(TweenMax.fromTo($(".cloud"),0,{display : "none"},{display : "block"}),0);
        this.elevenTimeLine.add(TweenMax.fromTo($(".cloud .fog_over"),that.minTimePot*0.4,{x : 800,scale : 3,opacity : 0.5,y : 0},{x : -200,scale : 4,opacity:1,y : -200}),that.minTimePot*0.6);
        this.elevenTimeLine.add(TweenMax.to($(".conversation .p7_5"),that.minTimePot*0.1,{ rotationZ : "15deg"}),that.minTimePot*0.3);
        this.elevenTimeLine.add(TweenMax.to($(".conversation .p7_6"),that.minTimePot*0.1,{ rotationZ : "-15deg"}),that.minTimePot*0.4);
    }
    //适配
    adaptation() {
        //楼梯的适配
        that.stairs = function() {
            if(that.winWidth<380&&that.winHeight<560){
                return that.winHeight+170;
            }
            else if(that.winWidth<380&&that.winHeight<610){
                return that.winHeight+120;
            }
            else if(that.winWidth<380&&that.winHeight<678) {
                return that.winHeight+220;
            }
            else if(that.winWidth<=400&&that.winHeight<678) {
                return that.winHeight+120;
            }
            else if(that.winWidth<=400&&that.winHeight>700) {
                return that.winHeight-40;
            }
            else {
                return that.winHeight+120;
            }
        }
        //费翔页电视放大的适配
        if(that.winWidth<380&&that.winHeight<610) {
            that.sixTimeLine.add(TweenMax.to($(".page-six"),that.minTimePot*0.8,{scale : 8,transformOrigin : `${300/7.5}vw ${300/7.5}vw`}),that.minTimePot*0.2);
        }
        else {
            that.sixTimeLine.add(TweenMax.to($(".page-six"),that.minTimePot*0.8,{scale : 8,transformOrigin : `${300/7.5}vw ${220/7.5}vw`}),that.minTimePot*0.2);
        }
        // $(".page-six").css({"top" :"0",display : "block"});
    }
    autoplay(limit,aft) {
        that.page_num = limit;
        that.alloy.min = function(){
            return -that.winHeight*limit;
        }
        that.alloy.to(-aft*that.winHeight,1000);
    }
    /*============= 禁止屏幕滚动 ============*/
    scrollAuto() {
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
            return false;
        }, {
            passive: false
        });
    }
}
new myApp();

// 2020/10/29: 今天需要完成


//第一个页面,我添加了两条时间轴,都是同时进行的,实际上可以不需要,吸取教训,只写一条时间轴
// 什么算是一条时间轴,应该是事件
//TweenMax使用的是transform,所以,最好在布局的时候不用transform

//最新的问题:
//1,要计算向左位移的距离,可以通过比例来计算
//2,换背景
//3,显示第二个页面,第二个页面是滑动缩小
// 568*0.8 *x = 390 *0.8
//让第二个页面的层级为2，透明度为1,还要添加新的时间轴

//解决几个问题:
//1,红旗上升,
// 2,红旗换字
//3,还有下拉提示动画

//再解决几个问题:
//写在两个盒子里,让第一个页面的闹钟保留到第二个页面,让第二个页面的盒子进行缩小,也就是说一开始,两个盒子是重叠在一起的,第一个盒子压在第一个盒子上面,并且第二个盒子进行透明,当点击事件之后,通过改变层级,来写的和谐一些
//2,一旦滑动,下滑提示就消失
//3,旗子向下滚动,实际上就是回退
//4,背景透明
//5,另外一个盒子显示,也就是墙,凳子
//6,变化就只有三个东西,一个是透明度,一个位移,一个是放大缩小


//解决动画间隔开来相继的执行,只需要新建一个时间轴: let gou = new TimelineMax();建立了时间轴后,通过gou.add(TweenMax动画,时间)或者是gou.to(动画内容,时间)来相继执行这个动画,只要调整时间就好了,这个是链式书写,可以反复添加,但是更好的办法是添加标签,也就是在里面的某个阶段添加gou.addLabel("标签名",时间),写时间可以写 "+=2",也就是在动画结束前2秒,tl.add([tween1, tween2, tween3], "+=2", "sequence", 0.5);这个例子就是多个动画轮流执行,第一个参数是数组,里面可以填动画的实例,只要填在时间轴里面的动画,就不会执行这个动画第三个参数是依次执行,当然也有同时执行的属性,最后一个是相隔几秒进行执行
//var tm = new TimelineMax({paused: true});可以一开始设置为暂停,当点击之后,tm.play(),就可以进行执行



//对于时间的计算:如果所有的动画都是同时开始执行的,那么我只能通过延时来计算动画分别执行的时间,如果是滚动的话,就需要通过开始动画时滚动所在的距离/总距离,因为都是相对的,谁也不晓得总共的时间是多少,所以没法去计算百分之多少到百分之多少,但是能够通过距离的计算得出相对的时间,可以通过延时来得出每个动画开始的时间,可以通过(结束的位置-开始的位置)/总长,就能得出动画应该执行多长时间,所以总共就是计算距离就可以得出动画时间

//对于动画的几种方法总结:
//1,通过css来做动画,但是很有局限,因为css动画也要通过js来控制它的执行
//2,可以用js 的定时器来制作动画
//3,可以用机器频率requestAnimationFrame,但似乎不能控制频率

//对于先现阶段动画的几种类型
//1,通过tween和Timeline这两个插件,就可以制作出来,可以随意改变动画的属性,还可以无衔接的动画一个一个的执行,就是通过staggerTo()这个方法,可以使得动画组一个一个有规律的执行,最重要的是可以通过alloytouch这个插件,可以制作出来一镜到底的动画,可以让动画退回
//如果页面只想要一个弹回的效果,那么可以引入swiper或者Iscroll,但是如果要监听一个页面滚动,最好的插件还是aollyTouch这个,因为它可以监听到滚动到了哪里,当然原生的也可以,但是有滚动条,原生的还有很多功能也实现不了
//加载的功能,如果仅仅要实现一个图片加载的效果,那么可以使用自己写的放啊,pixi似乎是用来做canvas的,很多canvas的精灵图可就直接用pixi来实现
//zepto是一个移动端简化版的jq,唯一的优点就是体积小
//howler的好处就是能够控制音乐的播放,如果有很多需要播放音乐的,就可以使用这个插件,如果只有一个可以直接用paused和play来控制


//现在基本弄清除了动画与时间轴的关系

