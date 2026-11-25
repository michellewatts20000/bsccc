import { Tabs } from '@base-ui/react/tabs'
import type { CSSProperties, ReactNode } from 'react'

type Tab = string | { label: string; color?: string }

interface Props {
  tabs: Tab[]
  /** Accessible name for the list of tabs */
  label: string
  /** Extra class for each panel, e.g. for its layout */
  panelClassName?: string
  // Each panel's content arrives from Astro as a named slot: panel0, panel1, …
  [slot: `panel${number}`]: ReactNode
}

export default function SectionTabs({
  tabs,
  label,
  panelClassName = '',
  ...panels
}: Props) {
  const items = tabs.map((tab) =>
    typeof tab === 'string' ? { label: tab } : tab
  )

  return (
    <Tabs.Root defaultValue={0} className="tabs">
      <Tabs.List className="tabs-list" aria-label={label}>
        {items.map(({ label, color }, i) => (
          <Tabs.Tab
            key={label}
            value={i}
            className={color ? 'tab tab-coloured' : 'tab'}
            style={color ? ({ '--tab-color': color } as CSSProperties) : undefined}
          >
            {color && <span className="tab-dot" aria-hidden="true" />}
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <div className="tabs-viewport">
        {items.map(({ label }, i) => (
          <Tabs.Panel
            key={label}
            value={i}
            keepMounted
            className={`tabs-panel ${panelClassName}`.trim()}
          >
            {panels[`panel${i}`]}
          </Tabs.Panel>
        ))}
      </div>
    </Tabs.Root>
  )
}
