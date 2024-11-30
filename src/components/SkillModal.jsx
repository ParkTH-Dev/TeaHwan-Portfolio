import styled from "styled-components";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.cardColor}60;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none; // 모바일에서는 기존 내용 숨김
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const CloseButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 5px;
  }
`;

const SkillImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 40px;
    height: 40px;
  }
`;

const SkillName = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const SkillDescription = styled.p`
  font-size: 18px;
  line-height: 1.7;
  font-weight: 400;
  white-space: pre-line;
  strong {
    font-weight: 700;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const MobileModal = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    justify-content: center;
    align-items: center;
  }
`;

const MobileModalContent = styled.div`
  @media (max-width: 768px) {
    background: ${({ theme }) => theme.bgColor};
    padding: 30px;
    border-radius: 15px;
    position: relative;
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const SkillModal = ({ skill, image, isOpen, onClose }) => {
  const convertMarkdownToBold = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  const getSkillDescription = (skillName) => {
    const descriptions = {
      javascript: `**JavaScript**를 사용하여 복잡한 웹 애플리케이션을 개발할 수 있습니다. 이 언어를 선택한 이유는 **웹 개발의 기본**이며, **다양한 라이브러리와 프레임워크와의 호환성**이 높기 때문입니다.
프로젝트 진행 중 **비동기 처리**에서 발생한 콜백 지옥 문제를 **Promise**와 **Async/Await**를 활용하여 해결한 경험이 있습니다.`,
      react: `**React**를 통해 **컴포넌트 기반**의 사용자 인터페이스를 구축하고, **useState, useEffect, useContext** 등 **Hooks**를 잘 활용하여 상태 관리와 사이드 이펙트를 최적화할 수 있습니다. 
      React를 선택한 이유는 **재사용 가능한 컴포넌트**와 **가상 DOM**으로 성능과 개발 효율을 높일 수 있기 때문입니다. 
      프로젝트에서 복잡한 상태 관리로 인한 퍼포먼스 이슈를 **React.memo**와 **useCallback**을 사용하여 해결하였습니다.`,
      typescript: `**TypeScript**를 사용하여 **코드의 타입 안정성**과 **유지보수성**을 향상시킬 수 있습니다. 
      이를 채택한 이유는 **규모가 큰 프로젝트**에서 발생할 수 있는 **타입 관련 오류**를 사전에 방지하기 위함입니다. 
      기존 JavaScript 프로젝트를 **TypeScript로 마이그레이션**하여 코드 품질을 높인 경험이 있습니다.`,
      nextjs: `**Next.js**를 사용하여 **서버 사이드 렌더링**과 **정적 사이트 생성**을 구현해보았습니다. 
      이를 선택한 이유는 **SEO 최적화**와 **초기 로딩 속도**를 개선하기 위함입니다.`,
      vite: `**Vite**를 사용하여 **빠른 개발 환경**을 구축할 수 있습니다. 이를 채택한 이유는 **빠른 모듈 번들링**과 **HMR(Hot Module Replacement)** 지원으로 개발 효율을 높일 수 있기 때문입니다. 기존 **Webpack** 기반의 빌드 속도 이슈를 **Vite**로 전환하여 개선한 경험이 있습니다.`,
      git: `**Git**을 통해 **버전 관리**를 효율적으로 수행하고, **GitHub**를 사용하여 팀원들과 협업할 수 있습니다. 
      이 도구들을 사용하는 이유는 **코드 변경 이력**을 체계적으로 관리하고 **협업 효율**을 높이기 위함입니다. **복잡한 머지 충돌**을 해결하며 프로젝트를 관리한 경험이 있습니다.`,
      github: `**Git**을 통해 **버전 관리**를 효율적으로 수행하고, **GitHub**를 사용하여 팀원들과 협업할 수 있습니다. 
      이 도구들을 사용하는 이유는 **코드 변경 이력**을 체계적으로 관리하고 **협업 효율**을 높이기 위함입니다. 
      **복잡한 머지 충돌**을 해결하여 프로젝트를 관리한 경험이 있습니다.`,
      figma: `**Figma**를 이용하여 **디자인 작업**과 **개발 간의 협업**을 원활하게 할 수 있습니다. 이를 선택한 이유는 **실시간 협업 기능**과 **프로토타이핑**이 용이하기 때문입니다. 
      **lo-fi**, **hi-fi 프로토타입**을 제작하여 프로젝트에 적용한 경험이 있습니다.`,
      sass: `**SCSS**를 사용하여 **CSS를 모듈화**하고 **재사용성**을 높일 수 있습니다. 
      이 기술을 채택한 이유는 **변수**, **믹스인**, **함수** 등을 통해 스타일링의 효율성을 높일 수 있기 때문입니다. 
      프로젝트에서 스타일 중복으로 인한 유지보수 어려움을 **SCSS**로 해결한 경험이 있습니다.`,
      styledcomponents: `**Styled-Components**를 활용하여 **컴포넌트별 스타일 관리**와 **동적 스타일링**을 구현할 수 있습니다. 
      이를 선택한 이유는 **CSS-in-JS** 방식으로 JavaScript 내에서 스타일을 작성하여 생산성을 높일 수 있기 때문입니다. **테마 변경 기능**을 **ThemeProvider**를 통해 구현한 경험이 있습니다.`,
      tailwind: `**Tailwind CSS**를 사용하여 **유틸리티 퍼스트** 방식의 빠른 UI 개발이 가능합니다. 
      이를 채택한 이유는 **클래스 조합**을 통해 스타일링 속도를 높이고 **일관성**을 유지할 수 있기 때문입니다. 프로젝트에서 **반응형 디자인** 구현 시 Tailwind의 장점을 활용하였습니다.`,
      redux: `**Redux**를 통해 **전역 상태 관리**를 구현해보았습니다. 한두 개의 프로젝트에서 사용해본 경험이 있으며, 선택한 이유는 **복잡한 상태**를 **체계적**으로 관리하기 위해서입니다.`,
      recoil: `**Recoil**을 통해 **전역 상태 관리**를 간편하게 구현할 수 있습니다. 이를 선택한 이유는 **React**와 자연스럽게 통합되어 **상태 관리**를 효율화할 수 있기 때문입니다.`,
      graphql: `**GraphQL**을 활용하여 **필요한 데이터**만 효율적으로 페칭할 수 있습니다. 프로젝트에서 한두 번 사용해보았으며, 선택한 이유는 **데이터 요청을 최적화**하고 **네트워크 부담**을 줄이기 위해서입니다.`,
      nodejs: `**Node.js**를 사용하여 **간단한 CRUD 서버**를 구축해보았습니다. 선택한 이유는 **JavaScript**로 **서버**와 **클라이언트**를 모두 다룰 수 있기 때문입니다.`,
      firebase: `**Firebase**를 활용하여 **서버리스 애플리케이션**을 개발하고, **인증** 및 **실시간 데이터베이스** 기능을 구현할 수 있습니다. 이를 채택한 이유는 **빠른 프로토타이핑**과 **백엔드 관리의 편의성** 때문입니다.`,
      reactquery: `프로젝트에서 **React Query**를 활용하여 **서버 데이터 관리**를 최적화하고 **로딩/에러 상태**를 효과적으로 처리한 경험이 있습니다. 
      이를 선택한 이유는 **데이터 페칭**, **캐싱**, **동기화**, 그리고 **업데이트**를 간편하게 처리하여 애플리케이션의 성능과 사용자 경험을 향상시킬 수 있기 때문입니다.`,
      pug: `**node.js**로 서버를 구축하며 **pug**를 사용해보았습니다. 이를 선택한 이유는 **빠른 템플릿 작성**과 **가독성**을 높이기 위함입니다.`,
      express: `**Express**를 사용하여 **서버 사이드 개발**을 경험해보았습니다. **간단한 RESTful API**를 구축해보았으며, 선택한 이유는 **JavaScript**로 서버와 클라이언트를 모두 다룰 수 있기 때문입니다.`,
      mongodb: `**MongoDB**를 사용하여 **데이터베이스 관리**를 경험해보았습니다. 이를 선택한 이유는 **node.js**와 연동하여 **빠른 데이터 조회**와 **쓰기 성능**을 높이기 위함입니다.`,
    };
    return descriptions[skillName.toLowerCase()] || "설명이 준비중입니다.";
  };

  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <SkillImage src={image} alt={skill} />
          <SkillName>{skill.toUpperCase()}</SkillName>
          <SkillDescription
            dangerouslySetInnerHTML={{
              __html: convertMarkdownToBold(getSkillDescription(skill)),
            }}
          />
        </ModalContent>
      </ModalWrapper>

      <MobileModal $isOpen={isOpen} onClick={onClose}>
        <MobileModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>×</CloseButton>
          <SkillImage src={image} alt={skill} />
          <SkillName>{skill.toUpperCase()}</SkillName>
          <SkillDescription
            dangerouslySetInnerHTML={{
              __html: convertMarkdownToBold(getSkillDescription(skill)),
            }}
          />
        </MobileModalContent>
      </MobileModal>
    </>
  );
};

export default SkillModal;
