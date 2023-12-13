// components/Groups.tsx
import React from 'react';

interface Group {
  supervisor: string;
  students: string[];
}

interface GroupsProps {
  groups: Group[];
}

const Groups: React.FC<GroupsProps> = ({ groups }) => {
  return (
    <div>
      {groups.map((group, index) => (
        <div key={index} className="mb-4 bg-white text-black h-full text-sm px-2 py-3 rounded-lg">
          <h2 className="text-xl font-bold mb-2">{`Group ${index + 1} - ${group.supervisor}`}</h2>
          <ul>
            {group.students.map((student, studentIndex) => (
              <li key={studentIndex}>{student}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Groups;
