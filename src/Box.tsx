import React, { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
}

const Box = ({ children }: BoxProps) => (
  <div style={{ padding: '1rem', fontWeight: 'bold' }}>{children}</div>
);

export default Box;
