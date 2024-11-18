import { useIntersectionObserver } from '@react-hookz/web';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ChevronsDownIcon } from '../Icon/Icon';

export function CollapsibleSection({
  title,
  subtitle = '',
  summary,
  children,
}: CollapsibleSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(true);
  const intersection = useIntersectionObserver(elementRef);

  useEffect(() => {
    console.log('title', title);
  }, [intersection, title]);

  console.log('Render');

  return (
    <Wrapper ref={elementRef}>
      <TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        <IconWrapper
          className="block"
          animate={{
            rotate: isOpen ? 0 : -90,
          }}
        >
          <ChevronsDownIcon size={2} />
        </IconWrapper>

        <Titles>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Titles>
      </TitleWrapper>
      {!isOpen && <Summary>{summary}</Summary>}
      {isOpen && <Content>{children}</Content>}
    </Wrapper>
  );
}

const IconWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  font-size: 1rem;
  margin: 32px;
  border: 2px solid;
  border-radius: 4px;
`;

const TitleWrapper = styled.div`
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
  display: flex;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 2rem;
  line-height: 1;
`;

const Subtitle = styled.div`
  font-size: 1rem;
`;

const Summary = styled.div`
  padding: 32px;
`;

const Content = styled.div`
  padding: 32px;
`;

type CollapsibleSectionProps = {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  summary: string;
  children: React.ReactNode;
};
