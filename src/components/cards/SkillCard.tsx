'use client';

import Image from 'next/image';
import { Skill } from '@/types/types';
import { Card } from '@heroui/react';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card className="flex flex-col items-center border-2 shadow-none">
      <Card.Content>
        <Image
          src={skill.icon}
          alt={skill.name}
          width={64}
          height={64}
          className="h-13.5 w-13.5 object-contain sm:h-14.5 sm:w-14.5"
        />
      </Card.Content>
      <Card.Footer>
        <p className="mt-2 text-sm font-medium text-gray-400">{skill.name}</p>
      </Card.Footer>
    </Card>
  );
};

export default SkillCard;
