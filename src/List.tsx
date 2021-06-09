import React from 'react';
import Box from './Box';

interface ListProps {
  items: string[];
  onClick?: (item: string) => void;
}

const List = ({ items, onClick }: ListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick?.(item)}>
          <Box>{item}</Box>
        </li>
      ))}
    </ul>
  );
};

export default List;
