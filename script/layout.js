$(document).ready(function(){

  let gnb = $('.gnb > ul > li'); //메인메뉴 변수

$(window).scroll(function(){
  let sPos = $(this).scrollTop();
  console.log(sPos);
  if(sPos >=880){
    $('.gnb').addClass('on');
  }else{
    $('.gnb').removeClass('on');
  }

  //방법1. 세로스크롤 값을 각각 체크하여 수식작성

  // if(sPos>=200&&sPos<970){
  //   gnb.eq(0).find('a').addClass('act');

  // }else if(sPos>=1050&&sPos<1800){
  //   gnb.eq(1).find('a').addClass('act');

  // }else if(sPos>=1900&&sPos<2630){
  //   gnb.eq(2).find('a').addClass('act');

  // }else if(sPos>=2700&&sPos<3460){
  //   gnb.eq(3).find('a').addClass('act'); 

  // }else if(sPos>=3500){

  //   gnb.eq(4).find('a').addClass('act'); 

  // }else{
  //   gnb.find('a').removeClass('act')
  // }

  gnb.find('a').removeClass('act');

  //방법2. 
  //섹션태그의 높이값이 세로스크롤 값 영역과 비교하여 0일때 addClass적용하기
  $('section').each(function(i){ 
    let top=$(this).offset().top-400; //선택한 section의 위치값을 변수에 저장

    if(sPos>=top){ //section태그가 위에서 떨어진값이 스크롤값보다 크면
       gnb.find('a').removeClass('act'); //기존서식을 제거하고
       gnb.eq(i).find('a').addClass('act'); //해당 a에만 서식을 적용
    }
  });




});

// 내비게이션 각각 클릭시 해당 기능 삽입하기
gnb.click(function(){
  let i = $(this).index();
  console.log(i); //0,1,2,3,4나오는지 확인
  $('html, body').animate({scrollTop:$('main section').eq(i).offset().top},300, 'easeOutQuint');
  return false; //새로고침 방지
});


//이미지 박스 스크립트
let img_src;
		let m_src;
		$('nav li a').mouseenter(function(){ //a태그에 마우스 오버시
			let img_src = $(this).attr('href'); //현재 a요소의 href속성값을 변수에 담는다.
			console.log(img_src); //잘 나오는지 테스트한다.

			//.banner img의 src속성값에 대입함
			$('.banner img').css('opacity','0').stop().animate({'opacity':'1'},300).attr('src',img_src);
		});

		let n = $('m_box ul li').index()+1;
    let a = $('m_box ul p').index()+1;
		console.log(n);

		const g_nav = $('.m_box ul li');
		const a_nav = $('.m_box ul p');

		g_nav.click(function(){  //li를 클릭하면 인덱스 번호를 이미지 파일명에 대입하여 변경되도록 한다.
		
			// alert('click');
			n = $(this).index()+1; //선택한 목록 인덱스값을 변수에 저장
			console.log(n);

			$('.movie img').attr('src','./images/mockup0'+n+'.jpg').css('opacity','0').stop().animate({'opacity':'1'},500);
			// $('.movie img').attr('src','./images/mockup0'+n+'.png').css('opacity','0').stop().animate({'opacity':'1'},500);

			return false; // #때문에 페이지가 새로고침 되는것을 방지
		});

		// let l_btn = $('i.fa-angle-left');
		// let r_btn = $('i.fa-angle-right');

		// l_btn.click(function(){
		// 	if(n==1){
		// 		n=7;
		// 	}else{
		// 		n--;
		// 	}
		// 	console.log(n);
		// 	$('.movie img').attr('src','./img/movie'+n+'.png').css('opacity','0').stop().animate({'opacity':'1'},500);
		// });

		// r_btn.click(function(){
		// 	if(n==7){
		// 		n=1;
		// 	}else{
		// 		n++;
		// 	}
		// 	console.log(n);
		// 	$('.movie img').attr('src','./img/movie'+n+'.png').css('opacity','0').stop().animate({'opacity':'1'},500);
		// });

});