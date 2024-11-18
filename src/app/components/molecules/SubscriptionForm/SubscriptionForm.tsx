import { Colors } from '@styles/colors';
import { FontWeights } from '@styles/fonts';
import { media } from '@styles/media';
import { CSSProperties } from 'react';
import styled from 'styled-components';

export function SubscriptionForm({}: SubscriptionFormProps) {
  return (
    <SubscriptionFormWrapper>
      <form>
        <SubscriptionFormLabelGroup>
          <label htmlFor="email">Enter your Email</label>
        </SubscriptionFormLabelGroup>
        <SubscriptionFormInputGroup>
          <InputField id="email" type="email"></InputField>
          <SubmitButton>Submit</SubmitButton>
        </SubscriptionFormInputGroup>
        <SubscriptionFormInfoGroup>
          <p>
            Adipisicing dolore nulla ullamco laboris dolor sint nostrud
            cupidatat ex consectetur. Et velit proident cillum mollit cillum
            adipisicing exercitation voluptate incididunt ipsum amet dolore.
            Incididunt esse esse id officia ipsum duis dolor sint aliqua
            reprehenderit ex adipisicing duis. Consequat eu tempor ad quis minim
            magna sunt occaecat excepteur.
          </p>
        </SubscriptionFormInfoGroup>
      </form>
    </SubscriptionFormWrapper>
  );
}

const SubscriptionFormWrapper = styled.div<SubscriptionFormProps>`
  &:focus-within {
    transform: translateY(-1px);
  }

  ${media.from_tablet`
    border: 1px solid var(--color-primary);
  `}

  form {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const SubscriptionFormLabelGroup = styled.div`
  /* border: red solid; */
  display: flex;
  flex: 1 1 0;
`;

const SubscriptionFormInputGroup = styled.div`
  /* border: red solid; */
  display: flex;
`;

const SubscriptionFormInfoGroup = styled.div`
  /* border: red solid; */
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${Colors.Gray300};
  max-width: 560px;
`;

const InputField = styled.input`
  border: 1px ${Colors.Gray50} solid;
  border-radius: 8px 0 0 8px;
  line-height: 2rem;
  flex: 3 1 0;
  padding: 12px;
  box-shadow: inset 1px 2px 4px hsl(0deg 0% 0% / 0.2);
`;

const SubmitButton = styled.button`
  border: 1px ${Colors.Gray50} solid;
  border-radius: 0 8px 8px 0;
  line-height: 2rem;
  flex: 1 1 0;
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${Colors.Contrast};
  color: ${Colors.White};
  font-weight: ${FontWeights.ExtraBold};

  &:hover {
    background-color: ${Colors.Primary};
  }
`;

type SubscriptionFormProps = {};
