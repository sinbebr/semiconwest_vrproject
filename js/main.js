/* =============== SHOW / HIDE MENU =============== */
const navMenu = document.getElementById('nav__menu'),
navToggle = document.getElementById('nav-toggle'); 
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click',()=>{
        navMenu.classList.toggle('show-menu');
    });
}

// 버튼 요소 가져오기
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", function() {
  // 현재 스크롤 위치 가져오기
var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  // 스크롤 위치가 300px 이상이면 버튼 보이기, 그렇지 않으면 숨기기
if (currentScroll > 300) {
    scrollToTopBtn.style.display = "block";
} else {
    scrollToTopBtn.style.display = "none";
}
});

// 버튼 클릭 이벤트 리스너 등록
scrollToTopBtn.addEventListener("click", function() {
  // 맨 위로 부드럽게 스크롤
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
});

// 영상 자동재생//
var videoElement = document.querySelector('.video video');
var videoWrapper = document.querySelector('.video__wrapper');

function checkVideoInView() {
    var videoTop = videoWrapper.getBoundingClientRect().top;

    // 스크롤 위치에 따라 영상을 재생 또는 일시정지
    if (videoTop < window.innerHeight && videoTop > -videoWrapper.offsetHeight) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
}

window.addEventListener('scroll', checkVideoInView);
checkVideoInView(); // 페이지 로드 시 초기 체크