# **작심**

> 작심삼일도 122번 하면 1년!



## 머지텍(mergeTech) 소개

- 팀명 (B108) :  **머지텍** 
   5명의 개성을 merge 하는 터틀텍의 자회사 머지텍입니다.

- 팀원 소개

  팀장 : 노천명 (BE)

  팀원 : 김상돈(FE), 김예슬(FE), 백민주(FE), 박수빈(BE)

- 직함
  - CEO : 백민주(머지민주)
  - CTO : 노천명(GP천명)
  - 개발자 : 박수빈(물콩수빈)
  - 디자이너 :  김예슬(Yes예슬)
  - 앞잡이 : 김상돈(낭만상돈)
  
  

## 주제

- 목표관리 서비스

  : 계획은 거창하지만 실천력이 부족한 사람들을 위한 목표 달성을 위한 플랫폼



## 기술스택

- React (frontend)
- Spring (backend)



## 기능





## 개발 규칙

### Git

🐱‍💻**1 day 1 commit**

### git commit 메시지

> 커밋 메시지는 Jira 이슈 번호, (Fix, Add, Delete, Update, Merge) 중 하나 (첫글자는 대문자로) 그리고 작업 내용을 명시 
>

```
이슈번호(공백)/(공백)작업분류(공백)::(공백)작업 내용 

ex )  S04P12B108-11 / Add :: 로그인 관련 파일 추가
```





### 작업분류

- Fix : 버그 수정에 대한 커밋

```jsx
ex) Fix :: 로그인시 DB에 저장 안되는 것 수정
```

- Add : 코드나 테스트, 예제 문서 등의 처음 추가가 있을 때 사용

```jsx
ex) Add :: login 컴포넌트 기능 추가
```

- Delete : 코드의 삭제, 파일의 삭제가 있을 때

```jsx
ex) Delete :: login.vue 파일 삭제
```

- Update : 이미 추가 되어 있는 파일의 수정, 추가, 보완을 했을 때

```jsx
ex) Update :: Readme 업데이트
```

- Merge : 브랜치의 소스코드를 병합 할 때

```jsx
ex) Merge :: front 브랜치와 dev 브랜치 병합
```



### git merge

- 작업 하기 전 dev 브랜치에 있는 내용 pull 해오기

```jsx
git checkout 브랜치명
git pull origin dev
```

- merge 하기 전 코드 리뷰 댓글,  또는 의견 받은 뒤 merge 하기
- merge 한 뒤 필요 없는 branch 는 삭제

```jsx
ex) feature/fLogin 로그인 기능 구현이 완료 되었으면 merge 할 때 feature/fLogin은
    삭제하기
```



### git branch

```
			    → front → feature/fLogin
master → dev
				→ back  → feature/bLivestream
```

- dev : deploy-ready 상태의 코드가 있는 브랜치로 테스트가 완료 되고 언제든 배포 가능한 상태의 코드
- `feature/f `, `feature/b ` : frontend와 backend의 동일한 기능이름에서 오는 동일path 충돌을 막기 위해 front는 소문자 f로 시작, back은 b로 시작하고 뒤의 상세 기능은 대문자로 시작한다