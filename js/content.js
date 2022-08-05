const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
console.log(btns);
for(let j = 0; j<btns.length; j++){
    // console.log(btn);
    // 각 버튼 클릭
    btns[j].addEventListener("click", () => {
        // on 클래스 추가 및 제거 로직
        if (btns[j].className !== 'on') {

            btns[j].className += 'on';
    
            // 버튼에 알맞는 컨텐츠에 클래스 넣기
            boxs[j].className += 'on';
    
            // 클릭된 버튼 제외하고 나머지 버튼/컨텐츠는 on class 해제
            for (let i = 0; i<btns.length; i++) {
                if(btns[i] !== btns[j]) {
                    btns[i].classList.remove('on');
                    boxs[i].classList.remove('on');
                }
            }
        }

        
    });
};
