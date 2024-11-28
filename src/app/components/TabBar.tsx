
import './TabBar.css';

export interface Tab {
  text: string;
  linkUrl: string;
  selected?: boolean;
}

export default function TabBar({
  tabs,
}: Readonly<{
  tabs: Tab[];
}>) {
  return (
    <div className="tab-bar">
      {tabs.map((tab, index) => (
        <a
          key={index}
          href={tab.linkUrl}
          className={`tab ${tab.selected ? 'selected' : ''}`}
        >
          {tab.text}
        </a>
      ))}
    </div>
  );
}
