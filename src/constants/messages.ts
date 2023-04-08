const MESSAGES = {
  LOGIN: {
    error: '비정상적인 로그인입니다.',
    complete: '환영합니다!',
    inCorrect: '가입되지 않은 이메일이거나\n\n비밀번호가 일치하지 않습니다.',
  },
  LOGOUT: {
    error: '비정상적인 로그아웃입니다.',
    complete: '로그아웃 되었습니다',
  },
  SIGNUP: {
    error: '회원가입중 오류가 발생했습니다.',
    complete: '회원가입이 완료되었습니다.',
  },
  WITHDRAWAL: {
    normal: '탈퇴하시겠습니까?',
    error: '다시 시도해 주세요.',
    complete: '탈퇴되었습니다.',
  },
  CHECKPASSWORD: {
    error: '비밀번호를 다시 확인해 주세요.',
  },
  REVIEW: {
    complete: '삭제되었습니다.',
    normal: '삭제하겠습니까?',
    error: '삭제할 수 없습니다.',
  },
  MYPAGE: {
    USEREDIT: {
      complete: '회원 정보 수정이 완료되었습니다.',
      error: '수정 내용을 다시 확인해주세요.'
    }
  }
}

export default MESSAGES
