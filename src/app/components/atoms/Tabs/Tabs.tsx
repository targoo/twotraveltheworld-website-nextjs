import { Colors } from '@styles/colors';
import React, { useState } from 'react';
import styled from 'styled-components';

import {
  TabControllerProps,
  TabHeader,
  TabId,
  TabPanelProps,
  TabProps,
} from './Tabs.types';

export const TabController = ({
  headers,
  children,
  initialActiveId = 0,
  onTabChanged,
}: TabControllerProps) => {
  const [currentTabId, setTabId] = useState<TabId>(initialActiveId);

  const tabPanels = React.Children.map(
    children,
    (child: React.ReactElement<TabPanelProps>, index) =>
      child.props.tabId === currentTabId &&
      React.cloneElement(child, {
        ...child.props,
        key: child.props.tabId,
      }),
  );

  return (
    <ControllerWrapper>
      <TabList>
        {headers.map((header: TabHeader) => (
          <Tab
            {...header}
            key={header.id}
            active={header.id === currentTabId}
            onClick={() => {
              setTabId(header.id);
              onTabChanged && onTabChanged(header.id);
            }}
          />
        ))}
      </TabList>
      <PanelWrapper>{tabPanels}</PanelWrapper>
    </ControllerWrapper>
  );
};

export const Tab = ({
  doublePadding,
  active,
  icon,
  label,
  ...props
}: TabProps) => {
  return (
    <TabWrapper doublePadding={doublePadding} active={active} {...props}>
      {icon && icon}
      {label && <TabLabel>{label}</TabLabel>}
    </TabWrapper>
  );
};

export const TabPanel = styled.div<TabPanelProps>``;

const PanelWrapper = styled.div`
  overflow: hidden;
`;

const TabLabel = styled.span`
  color: ${Colors.PrimaryDark};
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

const TabList = styled.div`
  display: flex;
  overflow-x: auto;
  position: relative;
  align-items: stretch;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${Colors.Primary};
  }
`;

const ControllerWrapper = styled.div`
  width: 100%;
  ${TabList} {
    margin-bottom: 30px;
  }
`;

const TabWrapper = styled.div<{ active?: boolean; doublePadding?: boolean }>`
  cursor: pointer;
  padding: ${({ doublePadding }) => (doublePadding ? '20px' : '10px 20px')};
  flex: 0 0 auto;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${Colors.Primary};
  }
  ${({ active }) =>
    active &&
    `
    color: ${Colors.PrimaryDark};
    &:before {
      border-bottom: 4px solid ${Colors.Contrast};
    }
  `}
`;
