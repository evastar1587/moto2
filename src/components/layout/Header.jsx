import { Radio, Users, BookOpen, Package } from 'lucide-react';

const Header = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'feed', label: 'Feed', icon: Radio },
    { id: 'people', label: 'People', icon: Users },
    { id: 'inventory', label: 'Tools', icon: Package },
    { id: 'guides', label: 'Guides', icon: BookOpen },
  ];

  return (
    <header className="bg-moto-charcoal border-b-2 border-moto-red">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-moto-red flex items-center justify-center text-white font-black border-2 border-moto-red-dark shadow-lg">
              <span className="text-xl leading-none">M<sup className="text-xs">2</sup></span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Moto<sup className="text-sm">2</sup>
              </h1>
              <p className="text-moto-red text-xs font-bold uppercase tracking-wide">
                Knowledge • Community • DIY or Die
              </p>
            </div>
          </div>
          <button className="px-5 py-2 bg-moto-red text-white hover:bg-moto-red-dark transition-all font-black text-sm uppercase border-b-2 border-moto-red-dark">
            Join
          </button>
        </div>

        <div className="bg-zinc-800 border-l-2 border-moto-red p-3 mb-4">
          <p className="text-zinc-400 text-sm">
            <span className="text-moto-red font-bold">RIGHT TO REPAIR:</span> Peer-to-peer platform for Portland&apos;s moped and motorcycle community.
          </p>
        </div>

        <nav className="flex gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase transition-all ${
                  isActive
                    ? 'bg-moto-red text-white border-b-2 border-moto-red-dark'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
