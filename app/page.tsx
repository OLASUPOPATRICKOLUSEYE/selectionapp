// pages/index.tsx
import React, { useState } from 'react';
import StudentList from "";
import Groups from "";

interface Group {
  supervisor: string;
  students: string[];
}

const Home: React.FC = () => {
  const [randomizedGroups, setRandomizedGroups] = useState<Group[]>([]);

  const handleRandomize = (groups: Group[]) => {
    setRandomizedGroups(groups);
  };

  return (
    <div className='bg-cover bg-center bg-fixed' style={{ backgroundImage: 'url("/bg2.jpg")', height: '100vh' }}>
      <div className="container mx-auto text-center pt-16 p-4 bg-opacity-80">
        <h1 className="text-3xl font-bold mb-4 text-white">ComSci Randomizer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2 text-white">Enter Student Names</h2>
            <StudentList onRandomize={handleRandomize} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-white">Randomized Groups</h2>
            <Groups groups={randomizedGroups} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
