var ItalyImg = 0
var EgyptImg = 0
$(document).ready(function(){
	
	var Egypt = "first"
	var Lndia = "first"
	var China = "first"
	
	
	
	//先展示开始界面，其他地图隐藏
	$("#worldMap").hide();
	$("#LndiaMap").hide();
	$(".EgyptMap").hide();
	$(".ChinaMap").hide();
	$(".finishMap").hide();
	// $("#openScreen").hide();
	$(".ItalyMap").hide();
	
	
	//印度地图内介绍隐藏
	
	$(".spicesKnow").hide();
	$(".zitherKnow").hide();
	$(".flaskKnow").hide();
	$(".TajMahalKnow").hide();
	$(".LotusTempleKnow").hide();
	$(".IndiaCateDelhiKnow").hide();
	$(".AmberFortKnow").hide();
	
	//中国地图内介绍隐藏
	$(".qinganKnow").hide();
	$(".qitaKnow").hide();
	$(".tianfengKnow").hide();
	$(".ayuwangKnow").hide();
	
	
	//选择人物
	$("#selectZhenghe").click(function(){
		$("#Lndiagame").css({
			"background":"url(img/zhengInduGame.png)",
			"background-size":"100% 100%",
		})
		$("#LndiagameOver").css({
			"background":"url(img/zhengInduGameSuccess.png)",
			"background-size":"100% 100%",
		})
		
		$("#Italygame").css({
			"background":"url(img/zhengYidaliGame.png)",
			"background-size":"100% 100%",
		})
		$("#ItalygameOver").css({
			"background":"url(img/zhengYidaliGameSuccess.png)",
			"background-size":"100% 100%",
		})
		$("#ItalygameOver1").css({
			"background":"url(img/zhengYidaliGameFail.png)",
			"background-size":"100% 100%",
		})
		
		$("#Egyptgame").css({
			"background":"url(img/zhengEgyptGame.png)",
			"background-size":"100% 100%",
		})
		$("#EgyptgameFail").css({
			"background":"url(img/zhengEgyptGameFail.png)",
			"background-size":"100% 100%",
		})
		$("#EgyptgameSuccess").css({
			"background":"url(img/zhengEgyptGameSuccess.png)",
			"background-size":"100% 100%",
		})
	})
	
	//中国地图内介绍浮动显示
	$(".qingan").mouseover(function(){
		$(".qinganKnow").show()
	})
	$(".qingan").mouseout(function(){
		$(".qinganKnow").hide()
	})
	
	$(".qita").mouseover(function(){
		$(".qitaKnow").show()
	})
	$(".qita").mouseout(function(){
		$(".qitaKnow").hide()
	})
	
	$(".tianfeng").mouseover(function(){
		$(".tianfengKnow").show()
	})
	$(".tianfeng").mouseout(function(){
		$(".tianfengKnow").hide()
	})
	
	$(".ayuwang").mouseover(function(){
		$(".ayuwangKnow").show()
	})
	$(".ayuwang").mouseout(function(){
		$(".ayuwangKnow").hide()
	})
	
	//印度地图内介绍浮动显示
	$(".spicesImg").mouseover(function(){
		$(".spicesKnow").show()
	})
	$(".spicesImg").mouseout(function(){
		$(".spicesKnow").hide()
	})
	
	$(".zitherImg").mouseover(function(){
		$(".zitherKnow").show()
	})
	$(".zitherImg").mouseout(function(){
		$(".zitherKnow").hide()
	})
	
	$(".flaskImg").mouseover(function(){
		$(".flaskKnow").show()
	})
	$(".flaskImg").mouseout(function(){
		$(".flaskKnow").hide()
	})
	
	$(".TajMahalImg").mouseover(function(){
		$(".TajMahalKnow").show()
	})
	$(".TajMahalImg").mouseout(function(){
		$(".TajMahalKnow").hide()
	})
	
	$(".LotusTempleImg").mouseover(function(){
		$(".LotusTempleKnow").show()
	})
	$(".LotusTempleImg").mouseout(function(){
		$(".LotusTempleKnow").hide()
	})
	
	$(".IndiaCateDelhiImg").mouseover(function(){
		$(".IndiaCateDelhiKnow").show()
	})
	$(".IndiaCateDelhiImg").mouseout(function(){
		$(".IndiaCateDelhiKnow").hide()
	})
	
	$(".AmberFortImg").mouseover(function(){
		$(".AmberFortKnow").show()
	})
	$(".AmberFortImg").mouseout(function(){
		$(".AmberFortKnow").hide()
	})
	
	//选择人物界面隐藏
	$(".selectPerson").hide();
	
	//将图鉴界面隐藏
	$("#atlasBlock").hide();
	
	//印度界面中的图片隐藏
	$("#completeFlask").hide();
	$("#completeSpices").hide();
	$("#completeZither").hide();
	
	$("#Lndiagame").hide()
	$("#LndiagameOver").hide()//印度游戏
	
	$("#Italygame").hide()//意大利游戏
	
	$("#Egyptgame").hide()//埃及游戏
	
	//将图鉴中图标隐藏
	
	$("#atlasSpices").hide();
	$("#atlasFlask").hide();
	$("#atlasZither").hide(); //印度
	
	$("#atlasCheese").hide();
	$("#atlasNoodle").hide();
	$("#atlasShoes").hide(); //意大利
	
	$("#atlasReel").hide();
	$("#atlasCamel").hide();
	$("#atlasPot").hide(); //埃及
	
	//从开始界面过渡到世界地图界面
	$("#playGame").click(function(){
		$(".selectPerson").show(1000)
		$("#worldMap").show();
		$("#openScreen").hide();
	})
	
	//从世界地图界面过渡到印度界面
	$("#Lndia").click(function(){
		if(EgyptImg >= 3){
			if(Lndia == "first"){
				$("#littleBoat").animate({"top":"52vh","left":"28vw"},2000,"linear",function(){
					$("#littleBoat").animate({"top":"54vh","left":"35vw"},1000,"linear",function(){
						$("#littleBoat").animate({"top":"63vh","left":"42vw"},1000,"linear",function(){
							$("#littleBoat").animate({"top":"58vh","left":"49vw"},1000,"linear",function(){
								$("#littleBoat").animate({"top":"63vh","left":"55vw"},1000,"linear");
							});
						});
					});
				});
				setTimeout(function(){
					$("#worldMap").hide();
					$("#LndiaMap").show();
					
				},6000)
				Lndia = "second"
			}else{
				$("#worldMap").hide();
				$("#LndiaMap").show();
			}
		}else{
			alert("完成上一关的收集才可进入下一阶段")
		}
		
		
	})
	//选择人物
	$(".maizhelun").click(function(){
		$(".selectPerson").hide(1000);
	})
	$(".zhenghe").click(function(){
		$(".selectPerson").hide(1000);
	})
	
	//从世界地图过渡到意大利界面
	$("#Italy").click(function(){
		$("#worldMap").hide()
		$(".ItalyMap").show()
	})
	
	//从世界地图界面过渡到埃及界面
	$("#Egypt").click(function(){
		if(ItalyImg >= 3){
			if(Egypt == "first"){
				$("#littleBoat").animate({"top":"24vh","left":"14vw"},1000,"linear",function(){
					$("#littleBoat").animate({"top":"34vh","left":"22vw"},1000,"linear");
				});
				setTimeout(function(){
					$("#worldMap").hide();
					$(".EgyptMap").show();
				},2000)
				Egypt = "second"
			}else{
				$("#worldMap").hide();
				$(".EgyptMap").show();
			}
		}else{
			alert("完成上一关后才可进入下一界面")
		}
		
		
	})
	
	
	//图鉴界面的隐藏和显示
	var isShowAtlas = false;
	$("#atlas").click(function(){
		if(isShowAtlas == false){
			$("#atlasBlock").show(1000);
			isShowAtlas = true;
		}
	})
	
	$("#closeButton").click(function(){
		if(isShowAtlas == true){
			$("#atlasBlock").hide(1000);
			isShowAtlas = false;
		}
	})
	
	//点击埃及地图界面三个图标事件
	
	$("#EgyptgameButton").click(function(){ //意大利游戏
		if(EgyptImg >= 3){
			$("#Egyptgame").show()
		}else{
			alert("收集完所有物品，才可开始游戏")
		}
	})
	
	//点击意大利地图界面三个图标事件
	
	
	$("#ItalygameButton").click(function(){ //意大利游戏
		if(ItalyImg >= 3){
			$("#Italygame").show()
		}else{
			alert("收集完所有物品，才可开始游戏")
		}
	})
	
	//点击印度地图界面三个图标事件
	
	var LndiaImg = 0
	$("#flask").click(function(){
		$("#completeFlask").show(1000);
		$("#atlasFlask").show();
		LndiaImg++;
	})
	
	$("#spices").click(function(){
		$("#completeSpices").show(1000);
		$("#atlasSpices").show();
		LndiaImg++;
	})
	
	$("#zither").click(function(){
		$("#completeZither").show(1000);
		$("#atlasZither").show();
		LndiaImg++;
	})
	$("#LndiagameButton").click(function(){ //印度游戏
		if(LndiaImg >= 3){
			$("#Lndiagame").show()
		}else if(LndiaImg <3){
			alert("收集完所有物品，才可开始游戏")
		}
	})
	
	
	//印度退格
	$("#backButtonInLndia").click(function(){
		$("#worldMap").show();
		$("#LndiaMap").hide();
		
	})
	
	//中国退格
	$("#backButtonInChina").click(function(){
		$("#worldMap").show();
		$(".ChinaMap").hide();
	})
	
	//意大利退格
	$("#backButtonInItaly").click(function(){
		$("#worldMap").show();
		$(".ItalyMap").hide();
	})
	
	//埃及退格
	$("#backButtonInEgypt").click(function(){
		$("#worldMap").show();
		$(".EgyptMap").hide();
	})
	
	
	//进入宁波界面
	$("#China").click(function(){
		if(LndiaImg >= 3){
			if(China == "first"){
				$("#littleBoat").animate({"top":"50vh","left":"60vw"},1000,"linear",function(){
					$("#littleBoat").animate({"top":"70vh","left":"68vw"},1000,"linear",function(){
						$("#littleBoat").animate({"top":"57vh","left":"76vw"},1000,"linear",function(){
							$("#littleBoat").animate({"top":"37vh","left":"82vw"},1500,"linear");
						});
					});
				});
				setTimeout(function(){
					$("#worldMap").hide()
					$(".ChinaMap").show()
				},4500)
				China = "second"
			}else{
				$("#worldMap").hide();
				$(".ChinaMap").show();
			}
		}else{
			alert("收集完所有物品，才可进入下一关")
		}
	})
	
	//结束界面
	$("#huizhan").click(function(){
		$(".ChinaMap").hide()
		$(".finishMap").show()
	})
	$(".finishImg").click(function(){
		$(".finishImg").hide()
	})
	
	//印度界面游戏
	
	$(".zitherLine").hide()
	$(".spicesLine").hide()
	$(".flaskLine").hide()
	var LndiaMark = " "
	var zitherLine = 0
	var spicesLine = 0
	var flaskLine = 0
	$(".gameZitherLeft").click(function(){
		if(LndiaMark == "ZitherRight"){
			$(".zitherLine").show()
			zitherLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "ZitherLeft"
		}
	})
	$(".gameZitherRight").click(function(){
		if(LndiaMark == "ZitherLeft"){
			$(".zitherLine").show()
			zitherLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "ZitherRight"
		}
	})
	$(".gameSpicesLeft").click(function(){
		if(LndiaMark == "SpicesRight"){
			$(".spicesLine").show()
			spicesLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "SpicesLeft"
		}
	})
	$(".gameSpicesRight").click(function(){
		if(LndiaMark == "SpicesLeft"){
			$(".spicesLine").show()
			spicesLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "SpicesRight"
		}
	})
	$(".gameFlaskLeft").click(function(){
		if(LndiaMark == "FlaskRight"){
			$(".flaskLine").show()
			flaskLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "FlaskLeft"
		}
	})
	$(".gameFlaskRight").click(function(){
		if(LndiaMark == "FlaskLeft"){
			$(".flaskLine").show()
			flaskLine = 1
			judgeLndiaLine()
		}else{
			LndiaMark = "FlaskRight"
		}
	})
	$("#LndiagameOver").click(function(){
		$("#LndiagameOver").hide()
	})
	function judgeLndiaLine(){
		if(flaskLine == 1&&zitherLine == 1&&spicesLine == 1){
			LndiaImg ++
			setTimeout(function(){
				$("#Lndiagame").hide()
				$("#LndiagameOver").show()
				$(".zitherLine").hide()
				$(".spicesLine").hide()
				$(".flaskLine").hide()
				zitherLine = 0
				spicesLine = 0
				flaskLine = 0
				$("#littleBoat").prop(
					"src","./img/boatBig.png"
				)
				$(".littleBoatInLndia").prop(
					"src","./img/boatBig.png"
				)
				$(".littleBoatInChina").prop(
					"src","./img/boatBig.png"
				)
			},2000)
		}
	}
	
	
	//意大利界面游戏
	$("#ItalygameOver").hide()
	$("#ItalygameOver1").hide()
	$(".gameManButton").click(function(){
		setTimeout(function(){
			$("#Italygame").hide()
			$("#ItalygameOver").show()
			$("#littleBoat").prop(
				"src","./img/boatMiddle.png"
			)
			$(".littleBoatInEgypt").prop(
				"src","./img/boatMiddle.png"
			)
			$(".littleBoatInItaly").prop(
				"src","./img/boatMiddle.png"
			)
			$(".littleBoatInLndia").prop(
				"src","./img/boatMiddle.png"
			)
			$(".littleBoatInChina").prop(
				"src","./img/boatMiddle.png"
			)
		},1000)
		
	})
	$(".gameWomanButton").click(function(){
		setTimeout(function(){
			$("#Italygame").hide()
			$("#ItalygameOver1").show()
		},1000)
	})
	$("#ItalygameOver").click(function(){
		$("#ItalygameOver").hide()
	})
	$("#ItalygameOver1").click(function(){
		$("#ItalygameOver1").hide()
	})
	
	//埃及界面游戏
	$("#EgyptgameFail").hide()
	$("#EgyptgameSuccess").hide()
	var mark = 0
	$(".gameLeftBottomButton").click(function(){
		mark = 1
		judgeOptions()
	})
	$(".gameLeftTopButton").click(function(){
		mark = 2
		judgeOptions()
	})
	$(".gameRightTopButton").click(function(){
		mark = 2
		judgeOptions()
	})
	$(".gameRightBottomButton").click(function(){
		mark = 2
		judgeOptions()
	})
	$("#EgyptgameSuccess").click(function(){
		$("#EgyptgameSuccess").hide()
	})
	$("#EgyptgameFail").click(function(){
		$("#EgyptgameFail").hide()
	})
	function judgeOptions(){
		if(mark == 1){
			setTimeout(function(){
				$("#Egyptgame").hide()
				$("#EgyptgameSuccess").show()
				mark = 0
				$("#littleBoat").prop(
					"src","./img/boatBig.png"
				)
				$(".littleBoatInEgypt").prop(
					"src","./img/boatBig.png"
				)
				$(".littleBoatInLndia").prop(
					"src","./img/boatBig.png"
				)
				$(".littleBoatInChina").prop(
					"src","./img/boatBig.png"
				)
			},1000)
			
		}
		if(mark == 2){
			setTimeout(function(){
				$("#Egyptgame").hide()
				$("#EgyptgameFail").show()
				mark = 0
			},1000)
			
		}
	}
})



//意大利界面内函数
	function showImage()
	{	
		document.getElementById("atlasShoes").style.display = "block"
		document.getElementsByClassName("xie1")[0].style.display = "block";
		ItalyImg++;
	}
	function showImage1()
	{	
		document.getElementById("atlasNoodle").style.display = "block"
		document.getElementsByClassName("mian1")[0].style.display = "block";
		ItalyImg++;
	}
	function showImage2()
	{	
		document.getElementById("atlasCheese").style.display = "block"
		document.getElementsByClassName("cheese1")[0].style.display = "block";
		ItalyImg++;
	}
	function romeintroduce()
	{
		document.getElementsByClassName("Rome1")[0].style.display = "block";
	}
	function romeend()
	{
		document.getElementsByClassName("Rome1")[0].style.display = "none";
	}
	function pisaintroduce()
	{
		document.getElementsByClassName("pisa")[0].style.display = "block";
	}
	function pisaend()
	{
		document.getElementsByClassName("pisa")[0].style.display = "none";
	}
	function towerintroduced()
	{
		document.getElementsByClassName("towerintroduce")[0].style.display = "block";
	}
	function towerend()
	{
		document.getElementsByClassName("towerintroduce")[0].style.display = "none";
	}
	function churchintroduced()
	{
		document.getElementsByClassName("church")[0].style.display = "block";
	}
	function churchend()
	{
		document.getElementsByClassName("church")[0].style.display = "none";
	}
	function shoesintroduced()
	{
		document.getElementsByClassName("shoesintroduce")[0].style.display = "block";
	}
	function shoesend()
	{
		document.getElementsByClassName("shoesintroduce")[0].style.display = "none";
	}
	function cheeseintroduced()
	{
		document.getElementsByClassName("cheeseintroduce")[0].style.display = "block";
	}
	function cheeseend()
	{
		document.getElementsByClassName("cheeseintroduce")[0].style.display = "none";
	}
	function mianintroduced()
	{
		document.getElementsByClassName("mianintroduce")[0].style.display = "block";
	}
	function mianend()
	{
		document.getElementsByClassName("mianintroduce")[0].style.display = "none";
	}

//埃及界面内函数
	function pyramidintro()
	{
		document.getElementsByClassName("pyramidintroduce")[0].style.display = "block";
	}
	function pyramidend()
	{	
		document.getElementsByClassName("pyramidintroduce")[0].style.display = "none";
	}
	function shrineintro()
	{
		document.getElementsByClassName("shrineintroduced")[0].style.display = "block";
	}
	function shrineend()
	{	
		document.getElementsByClassName("shrineintroduced")[0].style.display = "none";
	}
	function templeintro()
	{
		document.getElementsByClassName("templeintroduce")[0].style.display = "block";
	}
	function templeend()
	{	
		document.getElementsByClassName("templeintroduce")[0].style.display = "none";
	}
	function simbleintro()
	{
		document.getElementsByClassName("simbleintroduce")[0].style.display = "block";
	}
	function simbleend()
	{	
		document.getElementsByClassName("simbleintroduce")[0].style.display = "none";
	}
	function reelintro()
	{
		document.getElementsByClassName("reelintroduce")[0].style.display = "block";
	}
	function reelend()
	{	
		document.getElementsByClassName("reelintroduce")[0].style.display = "none";
	}
	function reelshow()
	{	
			document.getElementById("atlasReel").style.display = "block"
			document.getElementsByClassName("reelright")[0].style.display = "block";
			EgyptImg++;
	}
	function camelintro()
	{
		document.getElementsByClassName("camelintroduce")[0].style.display = "block";
	}
	function camelend()
	{	
		document.getElementsByClassName("camelintroduce")[0].style.display = "none";
	}
	function camelshow()
	{		
			document.getElementById("atlasCamel").style.display = "block"
			document.getElementsByClassName("camelright")[0].style.display = "block";
			EgyptImg++;
	}
	function potintro()
	{
		document.getElementsByClassName("potintroduce")[0].style.display = "block";
	}
	function potend()
	{	
		document.getElementsByClassName("potintroduce")[0].style.display = "none";
	}
	function potshow()
	{	
			document.getElementById("atlasPot").style.display = "block";
			document.getElementsByClassName("potright")[0].style.display = "block";
			EgyptImg++;
	}
