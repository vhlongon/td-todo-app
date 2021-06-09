import * as React from 'react';

interface HeadingProps {
  text: string;
}
const Heading = ({ text }: HeadingProps) => <h2>{text}</h2>;

interface BoxProps {
  children: React.ReactNode;
}
const Box = ({ children }: BoxProps) => (
  <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>
);

interface ListProps {
  items: string[];
  onClick?: (item: string) => void;
}
const List = ({ items, onClick }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick?.(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export interface IAppProps {}

export default function App(props: IAppProps) {
  const handleClick = React.useCallback((item: string) => {
    alert(item);
  }, []);

  return (
    <div>
      <Heading text="Typescript React todo app" />
      <List items={['one']} onClick={handleClick} />
    </div>
  );
}
