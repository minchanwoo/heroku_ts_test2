### 타입스크립트+웹팩+바벨을 이용하여 헤로쿠에 배포하는 방법
##  주의할 점
# 포트설정시 엔트리 파일에 const PORT = process.env.PORT || 5000; 라고 써줘야한다
# package.json파일에서 scripts에는 git에 올릴 시에는 꼭 "start": "node app.js"만 남겨놔야한다
# 빌드 할 당시 필요한 scripts들은 잠시 삭제 후 올리자
# webpack에서 output directory가 lib로 되어있는데 폴더에서 파일을 꺼내 루트 디렉토리로 옮겨놔야한다

