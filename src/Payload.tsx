import React, { useEffect, useState } from 'react';
import Heading from './Heading';

interface Payload {
  text: string;
}

const Payload = () => {
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
      {data ? (
        <div>
          <Heading text="Payload" />
          <code>{JSON.stringify(data)}</code>
        </div>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default Payload;
