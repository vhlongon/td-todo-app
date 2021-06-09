import React from 'react';

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => <h2>{text}</h2>;

export default Heading;
