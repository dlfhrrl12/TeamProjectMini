const joinForm = document.getElementById('join-form');

joinForm.addEventListener('submit', (event) => {
  event.preventDefault(); // 기본 폼 제출 동작 방지

  // 입력된 데이터 가져오기
  const profileImage = document.getElementById('profile-image').value;
  const name = document.getElementById('name').value;
  const mbti = document.getElementById('mbti').value;
  const blog = document.getElementById('blog').value;
  const git = document.getElementById('git').value;

  // 멤버 데이터 객체 생성
  const memberData = {
    profileImage,
    name,
    mbti,
    blog,
    git,
  };

  // localStorage에 데이터 저장
  localStorage.setItem('newMember', JSON.stringify(memberData));

  // 다른 HTML 페이지로 이동
  window.location.href = 'members.html';
});