import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useState } from 'react';

export function Toggle() {
  const [value, setValue] = useState('portfolio');
  const toggleItemStyle = 'uppercase flex items-center justify-center w-36 h-12 rounded-[inherit] data-[state=on]:bg-[#D7D7D7] dark:data-[state=on]:bg-[#0C151D] text-[#19191B] dark:text-[#A3ABB2] focus:outline-none data-[state=on]:animate-popIn data-[state=off]:animate-popOut'
    
  return (
    <ToggleGroup.Root
      className="flex justify-between items-center w-72 h-16 bg-white dark:bg-[#171F26] rounded-xl p-2"
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