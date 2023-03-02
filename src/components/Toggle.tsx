import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

export function Toggle() {
  const [value, setValue] = useState('portfolio');
  const toggleItemStyle = 'uppercase flex items-center justify-center w-36 h-12 sm:w-[22rem] sm:h-[4rem] rounded-[inherit] data-[state=on]:bg-[#D7D7D7] dark:data-[state=on]:bg-[#0C151D] text-[#19191B] dark:text-[#A3ABB2] focus:outline-none dark:data-[state=on]:animate-popIn dark:data-[state=off]:animate-popOut'
    
  return (
    <ToggleGroup.Root
      className="flex justify-around items-center w-72 h-16 sm:w-[28rem] sm:h-[6rem] bg-white dark:bg-[#171F26] rounded-xl p-2 gap-4 text-sm sm:text-lg"
      type="single"
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      <ToggleGroup.Item
        className={ toggleItemStyle }
        value="portfolio"
      >
        Portfolio
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={ toggleItemStyle }
        value="skills"
      >
        Skills
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}