import React, { useState, useCallback, useEffect } from 'react';
import Heading from './Heading';
import List from './List';

interface Payload {
  text: string;
}

export default function App() {
  const handleClick = useCallback((item: string) => {
    alert(item);
  }, []);

  const [data, setData] = useState<Payload | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<Payload> => {
      const res = await fetch('./data.json');
      const data = await res.json();
      return data;
    };

    fetchData().then(setData);
  }, []);

  return (
    <div>
      <Heading text="Typescript React todo app" />
      <List items={['one', 'two', 'three']} onClick={handleClick} />
      {data && (
        <div>
          <Heading text="Payload" />
          <code>{JSON.stringify(data)}</code>
        </div>
      )}
    </div>
  );
}
