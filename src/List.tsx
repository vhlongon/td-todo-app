import React from 'react';
import Box from './Box';

interface ListProps {
  items: { text: string; id: number }[];
  onClick?: (item: { text: string; id: number }) => void;
}

const List = ({ items, onClick }: ListProps) => (
  <ul>
    {items.map(item => (
      <li key={item.id} onClick={() => onClick?.(item)}>
        <Box>{item.text}</Box>
      </li>
    ))}
  </ul>
);

export default List;
