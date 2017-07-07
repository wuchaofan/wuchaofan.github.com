angular.module('starter.controller',[])
.filter('range', function() {
	return function(input, total) {
		total = parseInt(total);
		for (var i=0; i<total; i++)
			input.push(i);
		return input;
	};
})
.controller('IndexCtrl',function($scope,$window,$timeout,$document,$ionicScrollDelegate,$state,$ionicModal){
	var data = [
		{id: 0,img: 'img/1.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441291621966_2296_720x480.mp4'},
		{id: 1,img: 'img/2.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441291433591_2284_720x480.mp4'},
		{id: 2,img: 'img/3.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1440750952445_2306_720x480.mp4'},
		{id: 3,img: 'img/1.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441198862310_2304_720x480.mp4'},
		{id: 4,img: 'img/3.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441283060325_2300_720x480.mp4'}
	];
  
  $scope.data = data;
	$scope.initVir = function(){
    //console.log(flag);
    if(!!$scope.changepic){
      return true;
    }
    if(!$scope.selecttype){
      var scrollTop = $ionicScrollDelegate.getScrollPosition().top;
      //console.log(scrollTop/200);
      var index = Math.round(scrollTop/200);
      //console.log(index);
      $scope.showplay(index);
      return true;
    }
    $scope.selecttype=false;

    $ionicScrollDelegate.freezeScroll(false);

    $scope.backlist = true;
		var item,index;
		for(index in $scope.data){
			item = $scope.data[index];
			item.visiable = true;
      item.isdetail = false;
		}
	}
	//$scope.info=true;
    //$scope.$on()
	var visiable = function(id){
		var item,index;
		for(index in $scope.data){
			item = $scope.data[index];
			if(id==item.id){
				item.visiable=true;
        		item.isdetail = true;
			}else{
				item.visiable=false;
        		item.isdetail = false;
			}
		}
    //$timeout(function(){
    //  for(index in $scope.data) {
    //    item = $scope.data[index];
    //    if(id!=item.id){
    //      item.visiable=false;
    //    }
    //  }
    //},2000);
	}
	$scope.showplay = function(index){
		//console.log(index);
		$scope.selecttype=true;
   // $ionicScrollDelegate.scrollTop(false);
   // $ionicScrollDelegate.freezeScroll(true);
    $scope.offsetY = $ionicScrollDelegate.getScrollPosition().top +'px';
	visiable(index);
    $ionicScrollDelegate.freezeScroll(true);

  }
  $scope.scrollFinish = function(scrollTop, scrollLeft){
    $scope.changY = scrollTop+'px';
    //$scope.scomplete = true;
   }
  $scope.usersetting = function() {
    //console.log($scope);
    //$ionicScrollDelegate.$getByHandle('small').
    $scope.changepic=!$scope.changepic;
    $ionicScrollDelegate.freezeScroll((!!$scope.changepic)||(!!$scope.selecttype));
    //$scope.selecttype = $scope.changepic?true: ($scope.selecttype?true: false);
    //$ionicScrollDelegate.scrollTop(true);
    $scope.changY = $ionicScrollDelegate.getScrollPosition().top +'px';
  }
  $ionicModal.fromTemplateUrl('templates/share-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
  }).then(function(modal) {
      $scope.modal = modal;
  });
  $scope.showshare = function(){
     $scope.modal.show();
  }
    $scope.closeModal = function() {
    $scope.modal.hide();
  };
  $scope.isselectshow=true;
  $scope.selectshow = function(k){
    $scope.isselectshow = k;
  }

  $scope.gettype = function(index){
    $state.go('type',{id: index});
  }
  $scope.playvideo = function(index){
    console.log($scope.data[index].video);
    $state.go('play',{path: $scope.data[index].video,img:$scope.data[index].img});
  }
})
.controller('TypeCtrl',function($scope,$stateParams){
  console.log($stateParams);

  var data = [
    {id: 0,img: 'img/1.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441283060325_2300_720x480.mp4'},
    {id: 1,img: 'img/2.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441283060325_2300_720x480.mp4'},
    {id: 2,img: 'img/3.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441283060325_2300_720x480.mp4'},
    {id: 3,img: 'img/1.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441283060325_2300_720x480.mp4'},
    {id: 4,img: 'img/3.jpg',detail: '测试过中sdsdd',visiable: true,isdetail: false,video: 'http://baobab.cdn.wandoujia.com/1441283060325_2300_720x480.mp4'}
  ];
  var types = [
    {name: '创意',api: data},
    {name: '运动',api: data},
    {name: '旅行',api: data},
    {name: '剧情',api: data},
    {name: '动画',api: data},
    {name: '广告',api: data},
    {name: '音乐',api: data},
    {name: '开胃',api: data}
  ];
  $scope.data = types[$stateParams.id];
})
.controller('PlayCtrl',function($scope,$stateParams,$sce){
 
  $scope.data = $stateParams;
  console.log($scope.data)
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  function playPause() {
            var myVideo = document.getElementsByTagName('video')[0];
            console.log(myVideo);
            if (myVideo.paused)
                myVideo.play();
            else
                myVideo.pause();
  }
  $scope.goFullscreen = function(){
    var myVideo = document.getElementsByTagName('video')[0];
    myVideo.webkitEnterFullscreen();
  }
  $scope.playPause = playPause;
  // $scope.video = function(e) {
  //   // var videoElements = angular.element(e.srcElement);
  //   // videoElements[0].play();
  //   screen.lockOrientation('landscape');

  // }
  // $scope.$on('$ionicView.leave',function(){
  //   screen.unlockOrientation();
  // })
})
