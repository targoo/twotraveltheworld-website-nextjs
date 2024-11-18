export type TabId = number | string;

export interface TabProps extends React.DOMAttributes<HTMLDivElement> {
  doublePadding?: boolean;
  active?: boolean;
  icon?: any;
  label?: string;
}

export interface TabPanelProps extends React.DOMAttributes<HTMLDivElement> {
  tabId: TabId;
}

export interface TabHeader extends TabProps {
  id: TabId;
}

export interface TabControllerProps {
  doublePadding?: boolean;
  headers: TabHeader[];
  children?: any;
  initialActiveId?: TabId;
  onTabChanged?: TabChangeCallback;
}

export type TabChangeCallback = (tabId: TabId) => void;
