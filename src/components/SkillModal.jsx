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
  line-height: 2;
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
  const getSkillDescription = (skillName) => {
    const descriptions = {
      javascript:
        "JavaScript를 사용하여 복잡한 웹 애플리케이션을 개발할 수 있습니다. 이 언어를 선택한 이유는 웹 개발의 기본이며, 다양한 라이브러리와 프레임워크와의 호환성이 높기 때문입니다. 프로젝트 진행 중 비동기 처리에서 발생한 콜백 지옥 문제를 Promise와 Async/Await를 활용하여 해결한 경험이 있습니다.",
      react:
        "React를 통해 컴포넌트 기반의 사용자 인터페이스를 구축하고, useState, useEffect, useContext 등 Hooks를 잘 활용하여 상태 관리와 사이드 이펙트를 최적화할 수 있습니다. React를 선택한 이유는 재사용 가능한 컴포넌트와 가상 DOM으로 성능과 개발 효율을 높일 수 있기 때문입니다. 프로젝트에서 복잡한 상태 관리로 인한 퍼포먼스 이슈를 React.memo와 useCallback을 사용하여 해결하였습니다.",
      typescript:
        "TypeScript를 사용하여 코드의 타입 안정성과 유지보수성을 향상시킬 수 있습니다. 이를 채택한 이유는 규모가 큰 프로젝트에서 발생할 수 있는 타입 관련 오류를 사전에 방지하기 위함입니다. 기존 JavaScript 프로젝트를 TypeScript로 마이그레이션하여 코드 품질을 높인 경험이 있습니다.",
      nextjs:
        "Next.js를 사용하여 서버 사이드 렌더링과 정적 사이트 생성을 구현해보았습니다. 이를 선택한 이유는 SEO 최적화와 초기 로딩 속도를 개선하기 위함입니다.",
      vite: "Vite를 사용하여 빠른 개발 환경을 구축할 수 있습니다. 이를 채택한 이유는 빠른 모듈 번들링과 HMR(Hot Module Replacement) 지원으로 개발 효율을 높일 수 있기 때문입니다. 기존 Webpack 기반의 빌드 속도 이슈를 Vite로 전환하여 개선한 경험이 있습니다.",
      git: "Git을 통해 버전 관리를 효율적으로 수행하고, GitHub를 사용하여 팀원들과 협업할 수 있습니다. 이 도구들을 사용하는 이유는 코드 변경 이력을 체계적으로 관리하고 협업 효율을 높이기 위함입니다. 복잡한 머지 충돌을 해결하고 Git Flow 전략을 적용하여 프로젝트를 관리한 경험이 있습니다.",
      github:
        "Git을 통해 버전 관리를 효율적으로 수행하고, GitHub를 사용하여 팀원들과 협업할 수 있습니다. 이 도구들을 사용하는 이유는 코드 변경 이력을 체계적으로 관리하고 협업 효율을 높이기 위함입니다. 복잡한 머지 충돌을 해결하고 Git Flow 전략을 적용하여 프로젝트를 관리한 경험이 있습니다.",
      figma:
        "Figma를 이용하여 디자인 작업과 개발 간의 협업을 원활하게 할 수 있습니다. 이를 선택한 이유는 실시간 협업 기능과 프로토타이핑이 용이하기 때문입니다. 디자이너와의 소통 과정에서 디자인 변경 사항을 신속하게 반영한 경험이 있습니다.",
      sass: "SCSS를 사용하여 CSS를 모듈화하고 재사용성을 높일 수 있습니다. 이 기술을 채택한 이유는 변수, 믹스인, 함수 등을 통해 스타일링의 효율성을 높일 수 있기 때문입니다. 프로젝트에서 스타일 중복으로 인한 유지보수 어려움을 SCSS로 해결한 경험이 있습니다.",
      styledcomponents:
        "Styled-Components를 활용하여 컴포넌트별로 스타일을 관리하고 동적 스타일링을 구현할 수 있습니다. 이를 선택한 이유는 CSS-in-JS 방식으로 JavaScript 내에서 스타일을 작성하여 생산성을 높일 수 있기 때문입니다. 테마 변경 기능을 ThemeProvider를 통해 구현한 경험이 있습니다.",
      tailwind:
        "Tailwind CSS를 사용하여 유틸리티 퍼스트 방식의 빠른 UI 개발이 가능합니다. 이를 채택한 이유는 클래스 조합을 통해 스타일링 속도를 높이고 일관성을 유지할 수 있기 때문입니다. 프로젝트에서 반응형 디자인 구현 시 Tailwind의 장점을 활용하였습니다.",
      redux:
        "Redux를 통해 전역 상태 관리를 구현해보았습니다. 한두 개의 프로젝트에서 사용해본 경험이 있으며, 선택한 이유는 복잡한 상태를 체계적으로 관리하고 애플리케이션의 예측 가능성을 높이기 위해서입니다.",
      recoil:
        "Recoil을 통해 전역 상태 관리를 간편하게 구현할 수 있습니다. 이를 선택한 이유는 React와 자연스럽게 통합되어 상태 관리를 효율화할 수 있기 때문입니다.",
      graphql:
        "GraphQL을 활용하여 필요한 데이터만 효율적으로 페칭할 수 있습니다. 프로젝트에서 한두 번 사용해보았으며, 선택한 이유는 데이터 요청을 최적화하고 네트워크 부담을 줄이기 위해서입니다.",
      nodejs:
        "Node.js를 사용하여 서버 사이드 개발을 경험해보았습니다. 간단한 RESTful API를 구축할 수 있으며, 선택한 이유는 JavaScript로 서버와 클라이언트를 모두 다룰 수 있기 때문입니다.",
      firebase:
        "Firebase를 활용하여 서버리스 애플리케이션을 개발하고, 인증 및 실시간 데이터베이스 기능을 구현할 수 있습니다. 이를 채택한 이유는 빠른 프로토타이핑과 백엔드 관리의 편의성 때문입니다. Firebase Authentication으로 사용자 인증을 구현한 경험이 있습니다.",
      reactquery:
        "React Query를 사용하여 서버 상태 관리를 효율적으로 수행할 수 있습니다. 이를 선택한 이유는 데이터 페칭, 캐싱, 동기화, 그리고 업데이트를 간편하게 처리하여 애플리케이션의 성능과 사용자 경험을 향상시킬 수 있기 때문입니다. 프로젝트에서 React Query를 도입하여 API 호출 로직을 단순화하고, 로딩 및 에러 상태를 손쉽게 관리한 경험이 있습니다.",
    };
    return descriptions[skillName.toLowerCase()] || "설명이 준비중입니다.";
  };

  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <SkillImage src={image} alt={skill} />
          <SkillName>{skill.toUpperCase()}</SkillName>
          <SkillDescription>{getSkillDescription(skill)}</SkillDescription>
        </ModalContent>
      </ModalWrapper>

      <MobileModal $isOpen={isOpen} onClick={onClose}>
        <MobileModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>×</CloseButton>
          <SkillImage src={image} alt={skill} />
          <SkillName>{skill.toUpperCase()}</SkillName>
          <SkillDescription>{getSkillDescription(skill)}</SkillDescription>
        </MobileModalContent>
      </MobileModal>
    </>
  );
};

export default SkillModal;
