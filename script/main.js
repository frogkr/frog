// 워크 아이템 설정
const workConfig = [
    {
        title: "개구리 디자인 WEB",
        description: "UI/UX DESIGNER",
        image: "web.png"
    },
    {
        title: "파이브엠",
        description: "UI/UX DESIGNER", 
        image: "fivem.png"
    },
    {
        title: "Coming Soon",
        description: "프로젝트 준비중",
        image: ""
    },
    {
        title: "Coming Soon",
        description: "프로젝트 준비중",
        image: ""
    }
];

// 워크 리스트 동적 생성
function createWorkList() {
    const workList = document.querySelector('.workList');
    if (!workList) return;

    workConfig.forEach(item => {
        const workItem = document.createElement('div');
        workItem.className = 'workItem';
        
        workItem.innerHTML = `
            <div class="workImage">
                <img src="./asset/${item.image || 'null.png'}" alt="${item.title}" onerror="this.src='./asset/null.png'">
            </div>
            <div class="workDec">
                <div class="workDecTitle">${item.title}</div>
                <div class="workDecDec">${item.description}</div>
            </div>
        `;
        
        workList.appendChild(workItem);
    });
}

// 페이지 로드 시 워크 리스트 생성
createWorkList();

// 헤더 스크롤 효과
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    const headerHeight = 100; // 헤더 높이
    
    if (scrollY >= headerHeight) {
        // 헤더 높이만큼 스크롤했을 때 블러 효과 적용
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        header.style.backdropFilter = 'blur(5px)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
        // 스크롤이 헤더 높이보다 적을 때 원래 상태로 복원
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'blur(0px)';
        header.style.borderBottom = 'none';
        header.style.boxShadow = 'none';
    }
});

window.addEventListener('scroll', () => {
    const scrollText = document.querySelector('.scrollText');
    const work = document.querySelector('.work');
    if (!scrollText || !work) return;

    const rect = work.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // work가 화면에 보이는지 더 정확히 체크
    const isInViewport = rect.top < windowHeight && rect.bottom > 0;
    // work의 중앙 부분에 있을 때만 표시
    const isInCenterArea = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;

    if (isInViewport && isInCenterArea) {
        scrollText.style.opacity = '1';
    } else {
        scrollText.style.opacity = '0';
    }
});


// 타이틀 클릭 시 상단으로 스크롤
const title = document.querySelector('.title');

title.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
