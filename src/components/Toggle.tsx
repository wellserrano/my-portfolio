import * as ToggleGroup from '@radix-ui/react-toggle-group';

export function Toggle() {
  const toggleItemStyle = 'uppercase flex items-center justify-center w-36 h-12 rounded-[inherit] data-[state=on]:bg-[#0C151D] text-[#A3ABB2] focus:outline-none'
    
  return (
    <ToggleGroup.Root
      className="flex justify-between items-center w-80 h-16 bg-[#171F26] rounded-xl p-2"
      type="single"
      defaultValue="portfolio"
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